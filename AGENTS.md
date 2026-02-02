# Repository Guidelines

## Project Structure & Module Organization

`packages/*` hosts all publishable code. `packages/react-formio` delivers the React wrapper and builders, `packages/tailwind-formio` and `packages/tailwind` own the design tokens, and `packages/integration` is a Vite playground for manual verification. Shared configs (`tsconfig*.json`, `eslint.config.mjs`, `vitest.config.mts`) live at the root, long-form docs go in `docs/`, design experiments stay in `stories/`, and static assets belong in `public/`. Keep feature code, styles, and specs (`*.spec.tsx`) co-located inside the relevant package.

## Build, Test, and Development Commands

- `yarn` installs workspace dependencies and runs the Tailwind prebuild via `postinstall`.
- `yarn start` streams each package’s dev server through Lerna; scope with `lerna run start --scope <pkg>` when needed.
- `yarn build` triggers `monorepo build`, while `yarn tailwind:build` refreshes design tokens for Storybook and published bundles.
- `yarn lint` / `yarn lint:fix` execute the flat ESLint config; pair with `yarn prettier --write` for docs.
- `yarn test` runs Vitest with coverage; Playwright browsers install automatically during `pretest`.
- `yarn storybook:start`, `yarn storybook:build`, and `yarn chromatic` cover local review, static export, and visual regression baselines.

## Coding Style & Naming Conventions

Favor TypeScript modules with 2-space indentation. Components follow `PascalCase.tsx`, hooks `useCamelCase.ts`, and utilities `kebab-case.ts`. Import paths should use workspace aliases defined in `tsconfig.json`. Run `yarn lint:fix` plus Prettier before committing; lint-staged enforces the same rules in CI. When styling, rely on Tailwind tokens defined in `tailwind.config.js` instead of inline hex values.

## Testing Guidelines

Vitest + Testing Library power unit and integration specs; mirror the code path in the filename and append `.spec.ts`/`.spec.tsx`. Maintain or raise coverage noted in `coverage/coverage-summary.json`. Use `packages/integration` or Storybook stories for exploratory testing, and document new Playwright scenarios whenever bugs require browser reproduction.

## Commit & Pull Request Guidelines

Commitlint expects Conventional Commits such as `feat(form-builder): add keyboard shortcuts`; keep the imperative mood. Each PR should include a narrative summary, linked issues, screenshots or Chromatic links for UI work, and mention any docs or story updates. Avoid omnibus changes—split risky migrations per package and call out dependency order.

## Environment & Release Tips

Stick to Yarn 4 (Plug’n’Play); avoid `npm install` to keep `.yarn/` artifacts valid. Husky hooks live under `.husky/`; run `yarn prepare` if they stop firing. Releases run from `master` through `semantic-release`, so confirm branch state before invoking `yarn release` or `yarn publish`.
