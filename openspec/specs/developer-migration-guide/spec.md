# developer-migration-guide Specification

## Purpose

TBD - created by archiving change rc-migration-notes. Update Purpose after archive.

## Requirements

### Requirement: Repo ships a canonical v2-to-v3 migration doc

The repository SHALL include `docs/migrations/v2-to-v3.md` that explains the delta between `master` (v2) and `rc` (v3), covering breaking changes, dependency updates, component import changes, FormBuilder hook updates, Tailwind requirements, and testing/verification steps.

#### Scenario: Developer references the migration doc

- **WHEN** a developer opens `docs/migrations/v2-to-v3.md`
- **THEN** they read at least the sections “Overview”, “Key Breaking Changes”, “Step-by-step migration”, “Dependency checklist”, and “Verification”.

### Requirement: Storybook exposes the migration instructions

Storybook SHALL include a docs entry at `stories/MigrateToV3.mdx` containing the same migration sections as the repo doc plus inline links to relevant Storybook component stories (Form, FormBuilder, FormViews, Input components, etc.).

#### Scenario: Storybook navigation

- **WHEN** a developer opens Storybook’s docs navigation
- **THEN** they can launch “Migrate to v3”, read the migration steps, and follow links to component stories that illustrate the new APIs.
