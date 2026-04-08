# LLM Playbook: Upgrade a v2 codebase to `@tsed/react-formio@3`

Use this checklist when automating migrations. Follow the steps in order and only proceed when prior validations succeed.

---

## 1. Gather context

Ask the repository (or user) for:

1. `package.json` excerpts for dependencies and scripts.
2. The Tailwind configuration file (`tailwind.config.{js,ts}`).
3. Example React components that import `@tsed/react-formio` (preferably Form, FormBuilder, Tables, Tabs).
4. Any Redux store wiring that references `@tsed/react-formio-stores` or `@tsed/redux-utils`.
5. Lint/test commands (usually `yarn lint`, `yarn test`, `yarn storybook:start`).

Do not modify files until you have the above information.

---

## 2. Code rewrite rules

Apply the following transformations:

1. **Convert CommonJS to ESM** – replace `require("@tsed/react-formio")` with `import` statements. Ensure files use `import/export`.
2. **Per-component imports** – rewrite every `@tsed/react-formio` import to point at the atomic path:
   - `Form` → `@tsed/react-formio/organisms/form/Form`
   - `FormBuilder` → `@tsed/react-formio/organisms/form/builder/FormBuilder`
   - `InputText` → `@tsed/react-formio/molecules/forms/input-text/InputText`
   - `Table` → `@tsed/react-formio/molecules/table/Table`
   - Add more mappings as needed by inspecting `packages/react-formio/src`.
3. **Register everything (optional)** – if the host app previously relied on the barrel side-effects, add `import "@tsed/react-formio/all";` once in the app bootstrap file.
4. **Rename types** – update `*Schema` type imports to their new names (`FormSchema` → `FormType`, `SubmissionSchema` → `SubmissionType`, `RoleSchema` → `RoleType`, etc.).
5. **Remove Redux helpers** – delete imports/references to `@tsed/react-formio-stores`, `@tsed/redux-utils`, and `@tsed/react-formio-container`. Replace them with hooks (`useForm`, `useFormBuilder`, `useFormioContext`) and local state or the consuming app’s store.
6. **Update builder flows** – when you encounter custom builder routes, swap them for `<FormViews />` or the new builder components under `organisms/form/builder`. Wire hooks (`useFormBuilder`, `useFormEdit`) instead of legacy classes.
7. **Adopt new hooks** – Tabs, Tables, and Pagination include keyboard/i18n helpers. Ensure you do not override their `onKeyDown` handlers unless you re-call `useKeyboardControls`.

---

## 3. Dependency updates

1. Ensure the app uses Yarn 4+ or an equivalent ESM-aware package manager.
2. Add the new peers (if not already installed):
   ```bash
   yarn add @formio/choices.js @tanstack/react-table react-select react-table use-debounce
   ```
3. Remove deprecated packages:
   ```bash
   yarn remove @tsed/react-formio-stores @tsed/redux-utils @tsed/react-formio-container
   ```
4. Upgrade Tailwind to ≥3.3 and install `@tsed/tailwind-formio@^3`. Update `tailwind.config` to consume the preset.

---

## 4. Styling & assets

1. Replace any custom imports of `boxicons` with the new lucide icon mapping or rely on the preset provided by `@tsed/tailwind-formio`.
2. Import the refreshed CSS bundles if the app previously used `packages/tailwind-formio/styles/*.css`.
3. Confirm Tailwind rebuild scripts (`yarn tailwind:build`) run successfully after the preset change.

---

## 5. Validation checklist

Run these commands (or instruct the user to run them) after edits:

```bash
yarn lint
yarn test
yarn build
yarn storybook:start
```

If Storybook is part of a CI pipeline (Chromatic), mention that snapshots need to be updated once the UI matches expectations.

---

## 6. When to ask for help

- You encounter custom Redux logic that cannot be trivially replaced with hooks.
- The host project uses bundlers without ESM support.
- Tailwind cannot be upgraded to v3 yet.
- The app depends on `@tsed/react-formio-stores` APIs not covered by the new hooks.

Document these blockers so a human can resolve them before retrying the migration.
