# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Core stack and constraints
- Next.js `16.2.2` (App Router), React `19`, TypeScript `5`, Tailwind CSS `4`.
- This is **not** legacy Next.js behavior; before major framework changes, check docs under `node_modules/next/dist/docs/` and watch for deprecations.
- Path alias: `@/*` maps to repository root (configured in `tsconfig.json`).

## Common commands
- Install deps (lockfile present): `npm ci`
- Run dev server: `npm run dev`
- Production build: `npm run build`
- Run production server: `npm run start`
- Lint: `npm run lint`
- Type-check only: `npx tsc --noEmit`

## Tests
- There is currently **no test runner** and no `test` script in `package.json`.
- Single-test execution is therefore not available yet; add a test framework and script first.

## High-level architecture
This is a content-driven medical exam prep site built around Next.js App Router routes plus in-repo TypeScript data modules.

- Routing and page composition (`app/`)
  - `app/layout.tsx` defines global chrome (fonts, `Navbar`, `Footer`) and site metadata.
  - `app/page.tsx` is a marketing-style homepage composed from UI sections.
  - Main product flow is under `app/concours`:
    - `app/concours/page.tsx` lists years from `lib/data.ts`.
    - `app/concours/[year]/page.tsx` validates year, generates static params/metadata, and renders category cards.
    - `app/concours/[year]/[category]/page.tsx` validates params server-side, then delegates to `CategoryPageClient.tsx`.

- Data model and content sources (`lib/`)
  - `lib/data.ts` holds canonical taxonomy (years, categories, year metadata).
  - `lib/exam-data.ts` stores structured exam content (`ExamData`, questions, solutions) and lookup via `getExamData`.
  - `lib/content-2024.ts` stores tips and recap datasets (`getTipsData`, `getRecapData`).
  - `lib/revision-2024.ts` stores revision-series dataset (`getRevisionData`).
  - Content availability is currently year-gated (not all years/categories have backing content modules).

- Interactive rendering layer (`components/ui/`)
  - `ExamViewer.tsx` is the main interactive engine (navigation, answers, reveal flow, timer, scoring/results).
  - `TipsViewer.tsx` and `RecapViewer.tsx` render non-exam learning content from `lib/content-2024.ts`.
  - Math display is centralized through `MathRenderer.tsx` (KaTeX client rendering); preserve this path when adding math-rich content.

## Practical implementation notes
- Category pages are intentionally split server/client: server route validates params and handles metadata/static params; client component handles interactive state and content switching.
- If adding a new year’s content, update both taxonomy (`lib/data.ts`) and corresponding content providers (`lib/exam-data.ts`, `lib/content-2024.ts`, `lib/revision-2024.ts`) so dynamic routes resolve to real data instead of fallback UI.
