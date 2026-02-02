## ADDED Requirements

### Requirement: Table migration doc lists API deltas

We SHALL provide a dedicated migration document (`docs/migrations/table-use-table.md`) explaining every breaking change between the v2 and v3 table layers, specifically covering `Table.tsx`, `useTable` hook, `UseTableProps`, and TanStack `ColumnDef` adoption.

#### Scenario: Developer reviews the doc

- **WHEN** a developer reads `docs/migrations/table-use-table.md`
- **THEN** they find explicit before/after code snippets for column definitions, `UseTableProps` property changes, required peer dependencies, and the new TanStack helper imports.

### Requirement: Storybook references the table migration guidance

Storybook SHALL expose the migration summary via an MDX docs page (e.g., `stories/TableMigration.mdx`) or update an existing table story to link to the repo doc.

#### Scenario: Storybook navigation

- **WHEN** a developer browses the Table docs in Storybook
- **THEN** they see a link to the migration guide and a condensed list of the major TanStack-related changes.
