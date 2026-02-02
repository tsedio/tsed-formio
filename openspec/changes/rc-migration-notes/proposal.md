## Why

The `rc` branch already contains the full set of v3 refactors—ESM-only build outputs, atomic component folders, new peer dependencies, refreshed docs, etc.—but there is no concrete migration guide summarizing what changed between `master` (v2) and the release-candidate line. Developers trying to adopt v3 need a single source of truth that distills those commits into actionable steps. We also want automation-friendly instructions so LLM copilots can safely help with upgrades.

## What Changes

- Document every breaking change introduced on `rc` since `master`, including ESM-only builds, per-component import paths, dropped Tailwind v2, removed Redux helper packages, and new peer dependencies such as `@tanstack/react-table`, `react-select`, and `@formio/choices.js`.
- Provide a Storybook page that walks teams through the v2→v3 migration while linking to working component examples.
- Update `packages/react-formio/readme.md` so the “Migrate to v3” section matches the current architecture (tree-shaking entrypoints, `@tsed/react-formio/all`, removed store packages, Tailwind 3+ requirement, etc.).
- Publish an additional markdown brief tailored for LLMs so automated assistants have deterministic guidance when rewriting imports or wiring hooks for v3.

## Capabilities

### New Capabilities

- `developer-migration-guide`: A docs/Storybook experience (including `stories/MigrateToV3.mdx`) that enumerates the migration steps, code snippets, and dependency checklist for human developers.
- `readme-v3-alignment`: Align the README “Migrate to v3” block with the final guidance so the npm landing page stays accurate.
- `llm-migration-briefing`: A standalone markdown file (e.g., `docs/llm-migrate-v2-to-v3.md`) optimized for LLM consumption with structured instructions, heuristics, and guardrails for automated code modifications.

### Modified Capabilities

- _None_.

## Impact

- `packages/react-formio/readme.md`
- `stories/MigrateToV3.mdx` (new)
- `docs/migrations/v2-to-v3.md` and supporting assets
- `docs/llm-migrate-v2-to-v3.md`
- Any related Storybook navigation/indexes referencing the new MDX page
