# AGENTS.md

## Cursor Cloud specific instructions

This is a React/TypeScript SPA (Akua - AI Services Platform) built with Vite. No backend services, databases, or environment variables are required.

### Key commands

See `package.json` scripts. Quick reference:

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server | `npm run dev` (port 5173) |
| Lint | `npm run lint` |
| Test | `npx vitest run` (non-watch mode) |
| Build | `npm run build` |

### Notes

- The lint script uses `--max-warnings 0`. There are 2 pre-existing warnings in `badge.tsx` and `button.tsx` (react-refresh/only-export-components). Lint exits non-zero because of these; this is expected.
- Tests run with jsdom (no browser needed). Use `npx vitest run` for a single non-interactive run.
- The dev server starts on port 5173 with HMR. No environment variables are required for Feature-1.
