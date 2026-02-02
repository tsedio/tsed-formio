## ADDED Requirements

### Requirement: LLM-focused guide describes deterministic rewrite rules

The repo SHALL include `docs/llm-migrate-v2-to-v3.md` explaining, in structured form, the inputs an LLM must collect (package.json versions, Tailwind config, import paths), the rewrite rules (ESM-only, component-level imports, removal of Redux store packages, dependency installs), and the validation steps (Storybook build, Vitest, lint) to verify the migration.

#### Scenario: Automation system consumes the briefing

- **WHEN** an LLM or automation script reads `docs/llm-migrate-v2-to-v3.md`
- **THEN** it finds clearly labeled sections (“Prerequisites”, “Code rewrite rules”, “Dependency updates”, “Validation checklist”) it can translate into tasks without guessing.
