/// <reference types="vite/client" />
/// <reference types="unplugin-icons/types/react" />

/** Inlined by the `local-svgr` plugin in vite.config.ts — see the note there. */
declare module '*.svg?react' {
  import type {ComponentType, SVGProps} from 'react';
  const ReactComponent: ComponentType<SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

/** The résumé as base64, built by the `resume-payload` plugin in vite.config.ts. */
declare module 'virtual:resume-payload' {
  const base64: string;
  export default base64;
}
