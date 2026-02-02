# Migrating `@tsed/react-formio` from v2 to v3

The `rc` branch already bundles every breaking change that will ship with `@tsed/react-formio@3.x`. Compared to `master` (v2), we moved to an ESM-only toolchain, reorganised the components into Atomic folders, replaced the Redux helper packages with hooks/contexts, refreshed peer dependencies (Choices.js, React Select, TanStack Table), and introduced Storybook/MSW-based documentation.

This guide distills the `git log master..rc` history into concrete steps so you can upgrade a v2 codebase with minimal friction.

---

## Snapshot of the RC branch

| Area                   | Highlights from `master..rc`                                                                                                                                                                                             |
|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Build & Tooling        | `refactor(react-formio): migrate to esm and vitest`, `refactor(tailwind-formio): use vite to build package to esm`, Vite/Vitest upgrade                                                                                  |
| Component architecture | `refactor(react-formio): move all formio component under organisms`, `feat(react-formio): add button molecule`, `feat(tabs): implement Tabs component with keyboard navigation`                                          |
| Data layer             | `feat(react-formio): use @tanstack/react-table`, `feat(react-formio): add support Choicesjs and React-select layout to InputTags`, `feat(react-formio): register FormBuilder, FormEdit, etc to the container components` |
| UX & Docs              | `feat: implement i18n support`, `feat: add more documentation and use lucide font instead bx icons`, new Storybook docs (`stories/GettingStarted.mdx`, `stories/FormViews.mdx`, etc.)                                    |
| Housekeeping           | Removal of `packages/react-formio-stores`, `packages/redux-utils`, and `packages/react-formio-container`; CI upgrades; Chromatic/Storybook 9                                                                             |

---

## Key breaking changes

1. **ESM-only bundles** – `@tsed/react-formio` now ships `"type": "module"` outputs only. Update your bundler (Vite, Webpack ≥5, Next ≥13) or use tools with ESM support. CommonJS `require()` imports are no longer supported.
2. **Per-component import paths** – Tree-shaking relies on importing from the component’s atomic folder, e.g. `@tsed/react-formio/organisms/form/Form` or `@tsed/react-formio/molecules/forms/select/Select`. The root barrel no longer exports every component.
3. **Tailwind 3+ baseline** – All design tokens expect Tailwind ≥3.3. Tailwind v2 classes are removed. Update your `tailwind.config.[jt]s` plus any presets referencing the old tokens.
4. **Redux store packages removed** – `@tsed/react-formio-stores`, `@tsed/redux-utils`, and `@tsed/react-formio-container` were deleted. Migrate to hooks (`useForm`, `useFormioContext`), TanStack Table helpers, or bring your own state management.
5. **New peer dependencies** – Several UI components now depend on `@formio/choices.js`, `react-select`, `@tanstack/react-table@^8`, and `use-debounce`. Install them explicitly in your application.
6. **FormBuilder & FormViews refactor** – Builder, Edit, Preview, Export, and Settings views moved under `organisms/form`. Form routes rely on the new `FormViews` composite component plus hooks (`useFormBuilder`, `useFormEdit`).
7. **I18n & accessibility updates** – Tabs, tables, and forms now use lucide icons, improved keyboard navigation, and `useI18n`. Ensure your host app provides translation strings or fallbacks.
8. **MSW-powered stories** – Storybook uses Mock Service Worker for form APIs. Local playgrounds should either run MSW (`public/mockServiceWorker.js`) or provide equivalent mocks.

---

## Step-by-step migration

1. **Upgrade dependencies**
   - Ensure Node ≥18 and Yarn 4 (Plug’n’Play) are in place.
   - Install new peers:  
     ```bash
     yarn add @formio/choices.js @tanstack/react-table react-select react-table @tsed/tailwind-formio
     ```
   - Remove deprecated packages:  
     ```bash
     yarn remove @tsed/react-formio-stores @tsed/redux-utils @tsed/react-formio-container
     ```

2. **Adopt ESM import patterns**
   - Convert any `require()` usage to `import`.
   - Update Jest/Vitest configs to use native ESM or Vite’s `tsconfigPaths`.
   - Replace default imports with component paths:
     ```diff
     - import { FormBuilder, Form } from "@tsed/react-formio";
     + import { Form } from "@tsed/react-formio/organisms/form/Form";
     + import { FormBuilder } from "@tsed/react-formio/organisms/form/builder/FormBuilder";
     ```
   - If you want to register every molecule/organism globally (Storybook, legacy apps), import once:  
     ```ts
     import "@tsed/react-formio/all";
     ```

3. **Update styling and tokens**
   - Replace Tailwind v2 presets with the new `@tsed/tailwind-formio` preset and run `yarn tailwind:build`.
   - Ensure your global CSS loads lucide fonts (bundled with `packages/tailwind-formio`) or map icons in your `tailwind.config`.
   - Review form-specific styles (`packages/tailwind-formio/styles/*.css`) and import whichever layers you override.

4. **Migrate data and table usage**
   - Swap legacy `react-table@7` helpers to TanStack Table v8. Example:
     ```ts
     import { createColumnHelper } from "@tanstack/react-table";
     ```
   - Use the new molecules table hooks: `@tsed/react-formio/molecules/table/hooks/useTable`.
   - For lists such as Forms, Submissions, or Actions, prefer the new `organisms/table/*` components. They expose keyboard navigation and filter helpers out of the box.
   - Need the full diff for `Table`/`UseTableProps`? See the dedicated section “Table & `useTable` specifics” below for column examples, prop mappings, and TanStack-specific notes.

5. **Refactor FormBuilder flows**
   - The builder and edit experiences rely on hooks:  
     ```ts
     import { useFormBuilder } from "@tsed/react-formio/organisms/form/builder/useFormBuilder";
     import { useFormEdit } from "@tsed/react-formio/organisms/form/builder/useFormEdit";
     ```
   - `FormViews` encapsulates the builder, preview, export, and access settings. Replace custom routing with `<FormViews />` where possible.
   - Hooks now return typed `FormType`/`SubmissionType` (renamed from the previous `Schema` suffix). Adjust generics accordingly.

6. **Internationalisation**
   - Components expect translations via `useI18n`. Provide a context by wrapping your app with `FormioContext` or pass `options.i18n`.
   - Tabs and pagination include keyboard navigation out of the box; ensure no alternative handlers hijack `Arrow` keys.

7. **Verification**
   - Re-run lint/tests to confirm ESM + Tailwind changes compile:
     ```bash
     yarn lint
     yarn test
     yarn storybook:start
     ```
- For CI, update any scripts that referenced the removed packages or old Storybook CLI flags.

---

## Table & `useTable` specifics

The table layer moved from `react-table@7` (`useCustomTable`) to `@tanstack/react-table@8`. This section consolidates all API changes so teams can migrate custom tables without diffing the repo.

### Snapshot of differences

| Concern              | v2 (`react-table@7`)                                                                  | v3 (`@tanstack/react-table@8`)                                                                                                |
|----------------------|----------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------|
| Component path       | `@tsed/react-formio/components/table/table.component`                                  | `@tsed/react-formio/molecules/table/Table`                                                                                   |
| Hook                 | `useCustomTable` (wraps `useTable`, `useSortBy`, `usePagination`, etc.)                | `useTable` (wraps `useReactTable`, `getCoreRowModel`, filtering + faceting helpers)                                          |
| Column definition    | `Column<Data>` + custom `ExtendedColumn` metadata                                      | `ColumnDef<Data>` with metadata in `column.columnDef.meta` and filters declared via `meta.filter`                            |
| Operations           | Optional `operations?: Operation[]`, manual cell render                               | `operations: Operation<Data>[]` is required; hook automatically appends an “Operations” column when non-empty                |
| Query events         | `onChange?(query: QueryOptions)` (filters/page/sort)                                   | `onChange?(state: TableState)` returns the TanStack state bag (pagination, sorting, column visibility, etc.)                 |
| Pagination inputs    | `totalLength`, `pageSize`, `pageIndex`, `manualPagination`, `pageSizes`                | `rowCount`, `pageSizes`, `manualPagination`, `pageCount`; Table component wires them into the shared Pagination component    |
| Filters              | Per-column `ColumnFilter` props, string filter ids                                     | Column metadata (`column.columnDef.meta.filter`), faceted row/unique value helpers, filter components under `molecules/table/filters` |
| Custom cells/headers | Props such as `Cell`, `Row`, `CellHeader`, `CellOperations` passed directly            | Components resolved via registries (`getComponent("CellHeader")`, `CellFooter`, `CellOperations`) with TanStack render context |
| Drag & drop          | Built-in via `DrapNDropContainer`, `onDrag`, `onDrop`                                  | Removed; implement drag-and-drop externally if still required                                                                |

### `TableProps` / `UseTableProps` comparison

| v2 property | v3 equivalent | Notes |
|-------------|--------------|-------|
| `columns: ExtendedColumn<Data>[]` | `columns: ColumnDef<Data, TValue>[]` | Column metadata such as filters, cell props, and visibility now lives under `column.columnDef.meta` (see `molecules/table/interfaces/extends.ts`). |
| `data: Data[]` | `data: Data[]` | Must satisfy `{ [key: string]: JSON }` to align with FormIO data typing. |
| `operations?: Operation[]` | `operations: Operation<Data>[]` **(required)** | Provide `[]` if you have no row-level actions; the hook appends an “Operations” column when the array is non-empty. |
| `onClick?(row, operation)` | `onClick?(data, operation)` | Same behaviour, but bound to the injected operations column. |
| `onChange?(QueryOptions)` | `onChange?(TableState)` | Expect the TanStack state bag (pagination, sorting, column order, column visibility, etc.). |
| `totalLength` | `rowCount` (Pagination prop) | Keeps the pagination footer totals accurate in server/manual mode. |
| `manualFilters`, `manualSortBy`, `manualPagination` | `manualFiltering`, `manualSorting`, `manualPagination` | TanStack renamed these flags. |
| `ColumnFilter`, `ArrowSort`, `Cell`, `Row`, `CellHeader`, `CellOperations` props | Components resolved via registries (`getComponent("CellHeader")`, `getComponent("CellOperations")`, etc.). | Override registry entries to customise the visuals. |
| `enableDragNDrop`, `onDrag`, `onDrop` | _Removed_ | Wrap `<Table />` with your own drag-and-drop solution if needed. |
| `filters`, `sortBy`, `pageIndex`, `pageSize` (controlled props) | Provide TanStack `state`/`onStateChange` or rely on the built-in pagination state | Controlled mode now mirrors TanStack’s API. |
| `metadata` | `metadata?: Record<string, unknown>` | Optional bag forwarded to `CellOperations`. |

> **Tip:** Re-export the new type to ease adoption:  
> `export type AdminTableProps<TData extends Record<string, JSON>> = TableProps<TData>;`

### Code diff examples

#### Columns definition

```diff
- import { Column } from "react-table";
+ import { ColumnDef } from "@tanstack/react-table";

- const columns: Column<User>[] = [
-   {
-     Header: "Email",
-     accessor: "email",
-     Filter: EmailFilter,
-     Cell: ({ value }) => <a href={`mailto:${value}`}>{value}</a>
-   }
- ];
+ const columns: ColumnDef<User>[] = [
+   {
+     header: "Email",
+     accessorKey: "email",
+     meta: {
+       filter: { type: "text" },
+       cellProps: { className: "text-blue-500" }
+     },
+     cell: ({ getValue }) => <a href={`mailto:${getValue<string>()}`}>{getValue<string>()}</a>
+   }
+ ];
```

#### Hook/component usage

```diff
- import { useCustomTable, TableProps } from "@tsed/react-formio/components/table";
-
- function UsersTable(props: TableProps<User>) {
-   const table = useCustomTable({
-     ...props,
-     columns
-   });
-   // render table.tableInstance
- }
+ import { Table, TableProps } from "@tsed/react-formio/molecules/table/Table";
+
+ function UsersTable(props: TableProps<User>) {
+   return (
+     <Table
+       {...props}
+       data={props.data}
+       columns={columns}
+       operations={[
+         { id: "view", label: "View", action: "view" },
+         { id: "delete", label: "Delete", action: "delete", variant: "danger" }
+       ]}
+       onClick={(row, operation) => handleOperation(row, operation)}
+       onChange={(state) => syncQuery(state)}
+       manualPagination
+       pageSizes={[10, 25, 50]}
+       rowCount={props.rowCount}
+     />
+   );
+ }
```

### Filters, sorting, and metadata

1. **Filters:** Attach filter metadata via `column.columnDef.meta.filter`. Built-in helpers (TextField, Select, Range) live in `packages/react-formio/src/molecules/table/filters`, powered by TanStack’s faceted row/unique value helpers.
2. **Sorting & headers:** Use `column.getIsSorted()` plus the registry-driven `DefaultCellHeader` for keyboard-accessible headers.
3. **Hidden columns:** Set `column.columnDef.meta.hidden = true` to hide a column while keeping it in the data model (replaces `ExtendedColumn.hidden`).
4. **Custom cell props:** Provide `column.columnDef.meta.cellProps` to tweak `<td>` attributes (`className`, `data-*`, etc.).

### Query lifecycle changes

- `onChange` emits the full `TableState` (pagination, sorting, column order, column pinning, column sizing, column visibility, global filter). Use it to update query params or trigger server requests.
- Manual mode uses TanStack flags: `manualPagination`, `manualSorting`, `manualFiltering`, plus `pageCount`. Keep `rowCount` in sync so the pagination footer shows totals.
- The hook injects an “Operations” column whenever `operations.length > 0`. Override the `CellOperations` registry entry for advanced layouts.

### Table migration checklist

1. Update imports to the new paths (`@tsed/react-formio/molecules/table/Table`, `ColumnDef` from `@tanstack/react-table`).
2. Rewrite columns using `accessorKey`/`accessorFn` and move metadata to `meta`.
3. Provide `operations`, `pageSizes`, and `rowCount` (set `operations: []` if you have none).
4. Update `onChange` handlers to expect `TableState`.
5. Remove `enableDragNDrop`, `onDrag`, and `onDrop`.
6. Run `yarn lint && yarn test && yarn storybook:start` to ensure the new definitions compile and render.

---

## Component import cheat sheet

| v2 import                                         | v3 import                                                                            |
|---------------------------------------------------|--------------------------------------------------------------------------------------|
| `import {Form} from "@tsed/react-formio";`        | `import {Form} from "@tsed/react-formio/organisms/form/Form";`                       |
| `import {FormBuilder} from "@tsed/react-formio";` | `import {FormBuilder} from "@tsed/react-formio/organisms/form/builder/FormBuilder";` |
| `import {InputText} from "@tsed/react-formio";`   | `import {InputText} from "@tsed/react-formio/molecules/forms/input-text/InputText";` |
| `import {Table} from "@tsed/react-formio";`       | `import {Table} from "@tsed/react-formio/molecules/table/Table";`                    |
| `import {Tabs} from "@tsed/react-formio";`        | `import {Tabs} from "@tsed/react-formio/molecules/tabs/Tabs";`                       |

---

## Dependency checklist

- [ ] `@tsed/react-formio@^3`
- [ ] `@formio/js` peer still installed
- [ ] `@formio/choices.js@^9`
- [ ] `react-select@^5`
- [ ] `@tanstack/react-table@^8`
- [ ] `react-table@^7` (still required for backward-compatible APIs)
- [ ] `use-debounce@^10`
- [ ] `@tsed/tailwind-formio@^3` and Tailwind ≥3.3

---

## Verification & rollout

1. Run `yarn build` (monorepo) to ensure Vite bundles succeed.
2. Run Storybook locally (`yarn storybook:start`) and click through the new migration page to confirm links work.
3. If you rely on Chromatic or CI, update snapshots after verifying there are no unexpected visual regressions.
4. Communicate the removal of Redux store packages to downstream teams; they may need to pin v2 until ready.

---

## Related resources

- Storybook: `stories/MigrateToV3.mdx`
- README: `packages/react-formio/readme.md` → “Migrate to v3”
- LLM instructions: `docs/llm-migrate-v2-to-v3.md`
