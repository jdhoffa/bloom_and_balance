// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static build for GitHub Pages deploy:
//  - `nitro: false` skips Nitro entirely — GitHub Pages doesn't need a server runtime.
//  - `tanstackStart.pages` + `prerender.enabled` renders each listed route to a plain HTML file
//    under `dist/client/` at build time. GitHub Pages serves those files directly.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    server: { entry: "server" },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/impressum", prerender: { enabled: true } },
      { path: "/datenschutz", prerender: { enabled: true } },
      { path: "/agb", prerender: { enabled: true } },
    ],
    prerender: { enabled: true, crawlLinks: false },
  },
});
