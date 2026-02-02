## Why

Developers upgrading from v2 to v3 struggled to understand how the Table component and the `UseTableProps` hook changed after we adopted TanStack Table v8. There is no focused migration note showing the TypeScript/API deltas, so consumers either read the source or diff the repo. We need an explicit guide that contrasts v2 vs. v3 props, highlights the new TanStack generics, and provides code examples for updating tables.

## What Changes

- Produce an analysis comparing `packages/react-formio/src/molecules/table/Table.tsx` (v2 vs. v3) and the associated `UseTableProps` interface. **BREAKING** behavior (TanStack migration, filter helpers, keyboard support) must be called out.
- Author a migration note (likely under `docs/migrations/table-use-table.md` or Storybook) that documents prop/return-type renames, column definition changes, and expected peer dependencies.
- Update README/Storybook references if necessary so developers can find the table-specific migration instructions from the broader v3 guide.

## Capabilities

### New Capabilities

- `table-use-table-migration-guide`: Focused documentation comparing the v2 and v3 Table + `UseTableProps` APIs, including TanStack-specific rewrite steps.

### Modified Capabilities

- _None._

## Impact

- `packages/react-formio/src/molecules/table/Table.tsx` (analysis only, no code change expected but we must cite current APIs)
- Source history for v2 vs v3 Table/UseTableProps definitions
- New doc/story file (likely `docs/migrations/table-use-table.md` and/or `stories/TableMigration.mdx`)
