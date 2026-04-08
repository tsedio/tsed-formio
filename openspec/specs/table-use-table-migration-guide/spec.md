# table-use-table-migration-guide Specification

## Purpose

TBD - created by archiving change table-use-table-migration. Update Purpose after archive.

## Requirements

### Requirement: Table migration doc lists API deltas

We SHALL provide a dedicated “Table & `useTable` specifics” section inside `docs/migrations/v2-to-v3.md` explaining every breaking change between the v2 and v3 table layers, specifically covering `Table.tsx`, `useTable` hook, `UseTableProps`, and TanStack `ColumnDef` adoption.

#### Scenario: Developer reviews the doc

- **WHEN** a developer reads the “Table & `useTable` specifics” section in `docs/migrations/v2-to-v3.md`
- **THEN** they find explicit before/after code snippets for column definitions, `UseTableProps` property changes, required peer dependencies, and the new TanStack helper imports.

### Requirement: Storybook references the table migration guidance

Storybook SHALL expose the migration summary inside `stories/MigrateToV3.mdx`, including a dedicated section that links to the repo doc and summarizes the TanStack-specific changes.

#### Scenario: Storybook navigation

- **WHEN** a developer browses the Table docs in Storybook
- **THEN** they see a link to the migration guide and a condensed list of the major TanStack-related changes.
