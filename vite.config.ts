import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import {transform as svgrTransform} from '@svgr/core';
import fs from 'node:fs/promises';
import path from 'path';
import {defineConfig, transformWithEsbuild, type Plugin} from 'vite';

/*
  Turns `import Mark from "./x.svg?react"` into a React component whose SVG is
  part of the JS bundle, rather than a separate `image/svg+xml` response behind
  an <img src>. That distinction is the point: corporate proxies, antivirus web
  shields and several content blockers drop `image/svg+xml` wholesale (SVG can
  carry script), which leaves every <img src="*.svg"> on the page empty while
  the webp and png alongside them load fine. Markup in the bundle is never a
  separate request, so there is nothing left for such a filter to see.

  `dimensions: false` strips the root width/height so the caller's classes size
  the mark — every source therefore needs a viewBox. Props land after the
  element's own attributes, so className and preserveAspectRatio override.
*/
function svgrPlugin(): Plugin {
  return {
    name: 'local-svgr',
    enforce: 'pre',
    // `load`, not `transform`: Vite's own asset loader emits a hashed .svg file
    // as a side effect of loading, and a transform that replaced the code
    // afterwards would leave that orphan file in dist. Loading first means the
    // asset pipeline never sees the module at all.
    async load(id) {
      const [filePath, query] = id.split('?', 2);
      if (query !== 'react' || !filePath.endsWith('.svg')) return null;

      const svg = await fs.readFile(filePath, 'utf8');
      const componentName = path
        .basename(filePath, '.svg')
        .replace(/(^|[^a-zA-Z0-9])([a-zA-Z0-9])/g, (_m, _sep, c: string) => c.toUpperCase());

      const jsx = await svgrTransform(
        svg,
        {
          jsxRuntime: 'automatic',
          dimensions: false,
          svgProps: {focusable: 'false'},
          plugins: ['@svgr/plugin-jsx'],
        },
        {filePath, componentName}
      );

      // svgr emits JSX; esbuild has to lower it before the bundle sees it, since
      // the react plugin only transforms .jsx/.tsx ids and this one ends in .svg.
      const out = await transformWithEsbuild(jsx, filePath, {loader: 'jsx', jsx: 'automatic'});
      return {code: out.code, map: null};
    },
  };
}

export default defineConfig({
  plugins: [
    svgrPlugin(),
    react(),
    tailwindcss(),
    // Compiles `~icons/<collection>/<name>` imports into inline SVG components at
    // build time. No runtime icon library ships, and only imported icons are bundled.
    Icons({compiler: 'jsx', jsx: 'react'}),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },
  build: {
    // Surfaces oversized assets in CI rather than only in a browser waterfall.
    chunkSizeWarningLimit: 600,
  },
});
