## Context

- V3 adopted TanStack Table v8 (and the associated `ColumnDef`, `TableState`, `RowData` generics) while V2 relied on `react-table@7` and bespoke helper interfaces.
- The new Table component (`packages/react-formio/src/molecules/table/Table.tsx`) now expects typed column helpers, filter components, and keyboard enhancements. `UseTableProps` likewise changed signatures (e.g., `columns` array shape, `data` typing, introduction of `initialState`, etc.).
- Developers need a clear comparison doc that references both implementations and shows example diffs.
- Goal is documentation only; no code changes to Table itself.

## Goals / Non-Goals

**Goals:**

- Summarize the API differences between the v2 Table/`UseTableProps` and the v3 versions.
- Highlight TanStack-specific requirements (new generics, `getCoreRowModel`, filter components, `columnVisibility`, virtualization hooks, etc.).
- Provide code snippets that show how to migrate `columns` definitions, `data` typing, and table options.

**Non-Goals:**

- No runtime changes to Table, hooks, or build tooling.
- No attempt to backport TanStack Table to v2 or create compatibility shims.

## Decisions

1. **Diff-based analysis**

   - Use `git show`/`rg` to capture the v2 Table file (pre-refactor) and contrast with the current v3 version.
   - Reasoning: ensures accuracy and allows us to list concrete renames (e.g., `columns: Column[]` → `columns: ColumnDef<TData, TValue>[]`).

2. **Doc location & format**

   - Add `docs/migrations/table-use-table.md` and optionally a Storybook MDX entry referencing it.
   - Reasoning: keeps the main v3 migration guide lean while letting table consumers deep dive on TanStack-specific guidance.

3. **Structure**
   - Document should contain:
     - Overview of TanStack upgrade
     - Interface comparison tables (property-by-property)
     - Code diff snippet for a simple table before/after
     - Checklist (dependencies, required hooks)
   - Reasoning: consistent with other migration docs and gives developers actionable steps.

## Risks / Trade-offs

- **[Risk] Missing past context** → Mitigation: reference the v2 source in git history or release tarball; embed relevant snippets so users trust the comparison.
- **[Risk] Doc drift** → Mitigation: cross-link from README/Storybook so updates are easier to discover and keep in sync with future Table changes.

## Migration Plan

1. Extract the v2 Table + `UseTableProps` definitions (from `master` tag or history) and annotate the changes (e.g., renames, removed props, new generics).
2. Write `docs/migrations/table-use-table.md` with the comparison tables and code examples.
3. Link the new doc from the main v3 migration page and Storybook (if applicable).
4. Review and ensure the doc references the correct file paths (`packages/react-formio/src/molecules/table/Table.tsx`, `.../hooks/useTable.tsx`, `.../interfaces/extends.ts`, etc.).

## Open Questions

- Should we include guidance on migrating custom filter components (SelectFilter, RangeFilter) to the new TanStack filter API? (TBD once we review usage examples.)
