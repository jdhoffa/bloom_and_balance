# Bloom & Balance

Marketing site for Bloom & Balance — massage and wellness with Angie in Freiburg.

Static site built with TanStack Start, deployed to GitHub Pages. Booking happens
externally via Acuity Scheduling; there is no backend.

See `CLAUDE.md` for locked-in constraints (palette, typography, static-only architecture,
German legal pages, etc.) before making changes.

## Development

```sh
bun install
bun run dev      # Vite dev server
bun run build    # Static build → dist/client/
bun run preview  # Serve the built output locally
bun run lint
```

## Stack

- TanStack Start (SSR framework, used here in prerender-only mode)
- React 19 + TypeScript
- Tailwind CSS v4
- Vite
