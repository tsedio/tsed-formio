## Context

- `rc` already diverged significantly from `master` (v2) by adopting ESM-only bundles, atomic folders (`atoms/`, `molecules/`, `organisms/`), new peer dependencies (Choices.js, React Select, TanStack Table), and the removal of the `@tsed/react-formio-stores` and `@tsed/redux-utils` packages.
- Existing public docs (`packages/react-formio/readme.md`, Storybook landing pages) only mention a subset of the breaking changes and do not enumerate the migration steps developers must follow.
- There is currently no automation-friendly checklist for tools/LLMs to perform consistent codebase upgrades.
- We therefore need a multi-surface documentation update that covers README, Storybook, and repo-level guides.

## Goals / Non-Goals

**Goals:**

- Capture a concise changelog between `master` and `rc` with emphasis on breaking changes and dependency updates.
- Provide a developer-friendly migration guide (docs + Storybook + README snippet) that links to concrete code samples.
- Provide a machine-friendly markdown brief enumerating deterministic rewrite rules for LLM copilots.

**Non-Goals:**

- No functional changes to the React components themselves—the scope is documentation and guidance only.
- No attempt to resurrect or maintain the removed Redux store packages.
- No automation tooling beyond markdown/templates.

## Decisions

1. **Dedicated docs structure**

   - _Decision_: Author a repo-level doc at `docs/migrations/v2-to-v3.md` as the canonical narrative, and reuse its structure across README + Storybook.
   - _Rationale_: Keeps a single source of truth that can be deep-linked while allowing other surfaces to summarize.
   - _Alternatives_: Embed the entire guide inside the README (too long) or only rely on Storybook (not accessible via npm).

2. **Storybook page (`stories/MigrateToV3.mdx`)**

   - _Decision_: Create a new MDX story under the existing docs to present migration steps alongside component links.
   - _Rationale_: Storybook is the primary discovery surface for UI consumers; the MDX page can embed `Canvas` references and tables.

3. **README alignment**

   - _Decision_: Condense the README “Migrate to v3” section into a bullet list referencing the doc and highlighting the top breaking changes.
   - _Rationale_: README is consumed on npm/GitHub; it should stay short but accurate.

4. **LLM briefing**
   - _Decision_: Write `docs/llm-migrate-v2-to-v3.md` with structured sections (inputs required, rewrite rules, validation checklist).
   - _Rationale_: Gives AI tooling deterministic steps, reducing hallucinations and ensuring safe modifications.

## Risks / Trade-offs

- **[Risk] Developers miss the new guide because there’s no navigation link** → Add references from README and Storybook index to the new doc.
- **[Risk] Guidance drifts from actual code** → Base the doc on explicit commit summaries (log of `master..rc`) and keep instructions high-level but verifiable.
- **[Risk] LLM instructions become prescriptive but incomplete** → Include validation steps (imports compile, dependencies installed, storybook/test commands) so copilots know when to stop or ask for help.

## Migration Plan

1. Inspect `git log master..rc` to extract the finalized list of breaking changes, new dependencies, and removed packages.
2. Draft `docs/migrations/v2-to-v3.md` and `stories/MigrateToV3.mdx`, ensuring both share the same sections: Overview, Breaking Changes, Step-by-Step, Dependency checklist, Verification.
3. Update `packages/react-formio/readme.md` `## Migrate to v3` block to mirror the high-level bullets and point to the full guide.
4. Create `docs/llm-migrate-v2-to-v3.md` with structured prompts for tooling (inputs to gather, rewrite rules, tests to run).
5. Verify Storybook lint/build locally if possible (optional), otherwise list follow-up commands in the PR description.

## Open Questions

- Should the migration doc also cover the removal of `packages/react-formio-stores` in-depth or link to historical docs? (Follow-up once teams confirm demand.)
- Do we need localized versions of the migration guide? (Out of scope for now.)
