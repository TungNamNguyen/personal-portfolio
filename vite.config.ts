import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import Icons from 'unplugin-icons/vite';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig({
  plugins: [
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
