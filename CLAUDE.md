# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## About this repo

Turborepo monorepo based on the shadcn/ui monorepo template. Currently contains a single Next.js app (`apps/web`) and a shared UI package (`packages/ui`). Package manager is **bun** (`packageManager: bun@1.3.10`), not pnpm/npm/yarn.

**Important: the installed `next` version (16.2.6) is not the Next.js you may know from training data** — APIs, conventions, and file structure may differ. Before writing any Next.js-specific code (routing, config, data fetching, etc.), read the relevant guide under `node_modules/next/dist/docs/` and heed any deprecation notices there.

## Commands

Run from the repo root unless noted. Turbo fans these out to every workspace package via its own `package.json` script of the same name.

```bash
bun install          # install deps for all workspaces
bun run dev          # turbo dev   — runs apps/web on Next.js dev server (persistent, uncached)
bun run build        # turbo build — next build, depends on upstream package builds
bun run lint         # turbo lint  — biome lint . in each workspace
bun run format       # turbo format — biome format --write . in each workspace
bun run typecheck    # turbo typecheck — tsc --noEmit in each workspace
```

To target a single workspace, use turbo's filter flag, e.g. `turbo build --filter=web`, or `cd apps/web && bun run <script>` directly.

There is currently no test runner configured in this repo (no test script, no test files).

### Adding shadcn/ui components

Components must be generated into `apps/web` and land in `packages/ui/src/components` (per `apps/web/components.json`'s shared Tailwind config path):

```bash
bunx shadcn@latest add button -c apps/web
```

Then import from the `@workspace/ui` package rather than a relative path:

```tsx
import { Button } from "@workspace/ui/components/button"
```

## Git and Development Rules
**Atomic Commits Rule EVER**
### Branch conventions
- feature/TICKET-ID-description
- fix/TICKET-ID-description
- chore/description

### Commit messages
- Imperative, in English
- First line ≤ 50 characters
- Example: "feat: add email validation"

### Implementation rules
- Do not refactor outside the task scope
- Always run tests and lint before committing
- If unsure, ask before assuming

### Commands
- Install: npm install
- Test: bun run test
- Lint: bun run lint
- Build: bun run build

### PRs
- Descriptive title
- Description with:
  - What changed
  - How to test
  - Review checklist

## Architecture

- **`apps/web`** — the Next.js app. Its `next.config.ts` sets `transpilePackages: ["@workspace/ui"]` because `@workspace/ui` ships as raw TS/TSX source, not a prebuilt package — Next.js compiles it on the fly.
- **`packages/ui`** (`@workspace/ui`) — shared component library consumed only by `apps/web` today. It has no build step; consumers import its subpaths directly via the `exports` map in `packages/ui/package.json`:
  - `@workspace/ui/components/*` → `src/components/*.tsx`
  - `@workspace/ui/hooks/*` → `src/hooks/*.ts`
  - `@workspace/ui/lib/*` → `src/lib/*.ts`
  - `@workspace/ui/globals.css` → `src/styles/globals.css` (imported once in `apps/web/app/layout.tsx`)
  - `@workspace/ui/postcss.config` → `postcss.config.mjs`
- **`packages/typescript-config`** — shared, unbuilt TS config package. `base.json`, `nextjs.json`, and `react-library.json` are extended by each workspace's `tsconfig.json`.
- **shadcn config** (`components.json` in both `apps/web` and `packages/ui`) is pinned to style `base-lyra`, `neutral` base color, and the `phosphor` icon library (`@phosphor-icons/react`) — match these when hand-writing components instead of generating them.
- Path aliases in `apps/web/tsconfig.json`: `@/*` → files local to `apps/web`; `@workspace/ui/*` → `packages/ui/src/*` (used for TS resolution; runtime resolution goes through the package's `exports` map above).
- **Biome** (root `biome.json`) is the single source of lint/format config for the whole repo — there's no per-workspace config. It replaces ESLint + Prettier; `apps/web` and `packages/ui` each run it via their own `lint`/`format` scripts (`biome lint .` / `biome format --write .`). The `react`, `next`, and `turborepo` linter domains are enabled, plus the nursery `useSortedClasses` rule (for `cn`/`cva`/`clsx`) as the Tailwind-class-sorting replacement for `prettier-plugin-tailwindcss` — its autofix is unsafe, so run `biome check --write --unsafe .` to apply it.
