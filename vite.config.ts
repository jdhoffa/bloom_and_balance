import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

// Static build for GitHub Pages:
//  - Nitro is intentionally not wired up — GitHub Pages doesn't need a server runtime.
//  - `tanstackStart.pages` + `prerender.enabled` renders each listed route to a plain HTML
//    file under `dist/client/` at build time. GitHub Pages serves those files directly.
export default defineConfig({
  plugins: [
    tailwindcss(),
    tsconfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      importProtection: {
        behavior: "error",
        client: {
          files: ["**/server/**"],
          specifiers: ["server-only"],
        },
      },
      server: { entry: "server" },
      pages: [
        { path: "/", prerender: { enabled: true } },
        { path: "/impressum", prerender: { enabled: true } },
        { path: "/datenschutz", prerender: { enabled: true } },
        { path: "/agb", prerender: { enabled: true } },
      ],
      prerender: { enabled: true, crawlLinks: false },
    }),
    viteReact(),
  ],
  resolve: {
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
});
