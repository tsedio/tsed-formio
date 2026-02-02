## ADDED Requirements

### Requirement: README migrate-to-v3 section reflects RC behavior

`packages/react-formio/readme.md` SHALL describe the current v3 migration requirements, including ESM-only builds, per-component import paths (with `/organisms/...` examples), the removal of `@tsed/react-formio-stores` and `@tsed/redux-utils`, the Tailwind v3+ requirement, and the need to install new peer dependencies (`@formio/choices.js`, `react-select`, `@tanstack/react-table`, etc.).

#### Scenario: Reader checks README (npm / GitHub)

- **WHEN** a developer reads the “Migrate to v3” section in the README
- **THEN** they see an up-to-date bullet list that mirrors the canonical migration doc and links to the full guide for detailed instructions.
