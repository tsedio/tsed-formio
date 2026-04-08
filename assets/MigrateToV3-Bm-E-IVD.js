import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{u as i,M as o}from"./blocks-BsHuuCaw.js";import{S as c}from"./StoryBanner-CioOQPBo.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";function r(s){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Migration/Migrate to v3"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h1,{id:"migrate-to-v3",children:"Migrate to v3"}),`
`,e.jsxs(n.p,{children:["This page summarises the delta between ",e.jsx(n.code,{children:"@tsed/react-formio"})," v2 (master) and the current ",e.jsx(n.code,{children:"rc"})," branch that will become v3. For the complete checklist, open ",e.jsx(n.code,{children:"docs/migrations/v2-to-v3.md"})," inside the repository—this Storybook entry mirrors its content and links to the relevant component stories."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"breaking-changes-at-a-glance",children:"Breaking changes at a glance"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ESM-only builds"})," – the package now exports ESM bundles exclusively. Convert ",e.jsx(n.code,{children:"require()"})," calls to ",e.jsx(n.code,{children:"import"})," and ensure your bundler/test runner supports native ESM."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tree-shaken import paths"})," – import each component from its atomic folder (",e.jsx(n.code,{children:"molecules/"}),", ",e.jsx(n.code,{children:"organisms/"}),", etc.). Example: ",e.jsx(n.code,{children:"@tsed/react-formio/organisms/form/Form"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tailwind v3 baseline"})," – Tailwind v2 tokens are removed. Upgrade to Tailwind ≥3.3 and adopt the new ",e.jsx(n.code,{children:"@tsed/tailwind-formio"})," preset."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Redux helpers removed"})," – ",e.jsx(n.code,{children:"@tsed/react-formio-stores"}),", ",e.jsx(n.code,{children:"@tsed/redux-utils"}),", and ",e.jsx(n.code,{children:"@tsed/react-formio-container"})," are gone. Use hooks and contexts instead."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"New peers"})," – install ",e.jsx(n.code,{children:"@formio/choices.js"}),", ",e.jsx(n.code,{children:"react-select"}),", ",e.jsx(n.code,{children:"@tanstack/react-table@^8"}),", and ",e.jsx(n.code,{children:"use-debounce"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Refreshed UX"})," – Tabs, Tables, FormBuilder, and FormViews gained keyboard navigation, lucide icons, and i18n hooks. Consume the new APIs showcased below."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"step-by-step-migration",children:"Step-by-step migration"}),`
`,e.jsx(n.h3,{id:"1-dependencies",children:"1. Dependencies"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Upgrade to ",e.jsx(n.code,{children:"@tsed/react-formio@^3"}),"."]}),`
`,e.jsxs(n.li,{children:["Install the new peers:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn add @formio/choices.js @tanstack/react-table react-select use-debounce
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Remove deprecated packages:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn remove @tsed/react-formio-stores @tsed/redux-utils @tsed/react-formio-container
`})}),`
`]}),`
`]}),`
`,e.jsx(n.h3,{id:"2-imports--bundler-config",children:"2. Imports & bundler config"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Use ESM imports everywhere (Vite/Vitest already configured in the monorepo)."}),`
`,e.jsxs(n.li,{children:["Map old imports to the new paths:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import { FormBuilder } from "@tsed/react-formio";
+ import { FormBuilder } from "@tsed/react-formio/organisms/form/builder/FormBuilder";
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Optionally register every component once via ",e.jsx(n.code,{children:'import "@tsed/react-formio/all";'})," in your app entrypoint."]}),`
`]}),`
`,e.jsx(n.h3,{id:"3-form--builder-flows",children:"3. Form & Builder flows"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"<Form />"})," lives at ",e.jsx(n.a,{href:"?path=/docs/organisms-form-form--docs",children:"organisms/form/Form"})," and now exposes ",e.jsx(n.code,{children:"useForm"})," hooks plus i18n helpers."]}),`
`,e.jsxs(n.li,{children:["Use the new ",e.jsx(n.a,{href:"?path=/docs/organisms-form-builder-formbuilder--docs",children:"FormBuilder"})," and ",e.jsx(n.a,{href:"?path=/docs/organisms-views-formviews--docs",children:"FormViews"})," stories as references for the builder/edit/export pipeline."]}),`
`,e.jsxs(n.li,{children:["Tabs (",e.jsx(n.a,{href:"?path=/docs/molecules-tabs-tabs--docs",children:"docs"}),") and Tables (",e.jsx(n.a,{href:"?path=/docs/molecules-table--docs",children:"docs"}),") ship with keyboard navigation—remove custom key handlers that conflict."]}),`
`]}),`
`,e.jsx(n.h3,{id:"4-styling",children:"4. Styling"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Import the updated Tailwind preset:",`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`// tailwind.config.ts
import {preset} from "@tsed/tailwind-formio";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  presets: [preset]
};
`})}),`
`]}),`
`,e.jsxs(n.li,{children:["Include lucide icon fonts or use your own mapping via ",e.jsx(n.code,{children:"@tsed/tailwind-formio/src/templates/tailwind/icon"}),"."]}),`
`]}),`
`,e.jsx(n.h3,{id:"5-verification",children:"5. Verification"}),`
`,e.jsx(n.p,{children:"Run the usual quality gates after updating imports:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`yarn lint
yarn test
yarn storybook:start
`})}),`
`,e.jsx(n.p,{children:"Chromatic/CI users should also update snapshots once Storybook renders the new components correctly."}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.h2,{id:"table--usetable-specifics",children:["Table & ",e.jsx(n.code,{children:"useTable"})," specifics"]}),`
`,e.jsxs(n.p,{children:["The table layer moved from ",e.jsx(n.code,{children:"react-table@7"})," (",e.jsx(n.code,{children:"useCustomTable"}),") to ",e.jsx(n.code,{children:"@tanstack/react-table@8"}),". Key changes:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsxs(n.strong,{children:[e.jsx(n.code,{children:"ColumnDef"})," metadata"]})," – define columns with ",e.jsx(n.code,{children:"ColumnDef<T>"})," and move filter/sorting metadata into ",e.jsx(n.code,{children:"column.columnDef.meta"})," (see ",e.jsx(n.code,{children:"packages/react-formio/src/molecules/table/interfaces/extends.ts"}),"). Built-in filters live under ",e.jsx(n.code,{children:"molecules/table/filters"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Hook + operations"})," – ",e.jsx(n.code,{children:"useTable"})," appends an “Operations” column whenever ",e.jsx(n.code,{children:"operations"})," is non-empty. Provide the array (or ",e.jsx(n.code,{children:"[]"}),") and optional ",e.jsx(n.code,{children:"metadata"})," so the injected ",e.jsx(n.code,{children:"CellOperations"})," component can render buttons with i18n support."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"State events"})," – ",e.jsx(n.code,{children:"onChange"})," now receives TanStack’s ",e.jsx(n.code,{children:"TableState"})," (pagination, sorting, filters, column visibility). Use it to drive remote queries instead of the old ",e.jsx(n.code,{children:"QueryOptions"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pagination"})," – pass ",e.jsx(n.code,{children:"rowCount"})," alongside ",e.jsx(n.code,{children:"manualPagination"}),", ",e.jsx(n.code,{children:"pageSizes"}),", and ",e.jsx(n.code,{children:"pageCount"})," to keep the footer totals accurate."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Removed helpers"})," – the built-in drag-and-drop container is gone; wrap ",e.jsx(n.code,{children:"<Table />"})," with your own drag-and-drop solution if you still need that behaviour."]}),`
`]}),`
`,e.jsx(n.h3,{id:"column-diff-example",children:"Column diff example"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-diff",children:`- import { Column } from "react-table";
+ import { ColumnDef } from "@tanstack/react-table";

- const columns: Column<User>[] = [
-   { Header: "Email", accessor: "email" }
- ];
+ const columns: ColumnDef<User>[] = [
+   {
+     header: "Email",
+     accessorKey: "email",
+     meta: {
+       filter: { type: "text" },
+       cellProps: { className: "text-blue-500" }
+     }
+   }
+ ];
`})}),`
`,e.jsx(n.h3,{id:"table-migration-checklist",children:"Table migration checklist"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Import the new component/hook paths: ",e.jsx(n.code,{children:"@tsed/react-formio/molecules/table/Table"}),", ",e.jsx(n.code,{children:"ColumnDef"})," from ",e.jsx(n.code,{children:"@tanstack/react-table"}),"."]}),`
`,e.jsxs(n.li,{children:["Rewrite columns using ",e.jsx(n.code,{children:"accessorKey"}),"/",e.jsx(n.code,{children:"accessorFn"})," and move filter/cell props to ",e.jsx(n.code,{children:"meta"}),"."]}),`
`,e.jsxs(n.li,{children:["Provide ",e.jsx(n.code,{children:"operations"}),", ",e.jsx(n.code,{children:"pageSizes"}),", and ",e.jsx(n.code,{children:"rowCount"})," (set ",e.jsx(n.code,{children:"operations: []"})," if you have no actions)."]}),`
`,e.jsxs(n.li,{children:["Update ",e.jsx(n.code,{children:"onChange"})," handlers to expect ",e.jsx(n.code,{children:"TableState"}),"."]}),`
`,e.jsxs(n.li,{children:["Remove any usage of ",e.jsx(n.code,{children:"enableDragNDrop"}),"/",e.jsx(n.code,{children:"onDrag"}),"/",e.jsx(n.code,{children:"onDrop"}),"."]}),`
`,e.jsxs(n.li,{children:["Refer to the ",e.jsxs(n.a,{href:"https://github.com/tsedio/tsed-formio/blob/rc/docs/migrations/v2-to-v3.md#table--usetable-specifics",rel:"nofollow",children:["Table & ",e.jsx(n.code,{children:"useTable"})," specifics"]})," for detailed before/after snippets and additional context."]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"helpful-resources",children:"Helpful resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["📄 ",e.jsx(n.code,{children:"docs/migrations/v2-to-v3.md"})," – canonical migration note"]}),`
`,e.jsxs(n.li,{children:["📊 Table & ",e.jsx(n.code,{children:"useTable"})," specifics (section inside ",e.jsx(n.code,{children:"docs/migrations/v2-to-v3.md"}),")"]}),`
`,e.jsx(n.li,{children:"📘 README → “Migrate to v3”"}),`
`,e.jsxs(n.li,{children:["🤖 ",e.jsx(n.code,{children:"docs/llm-migrate-v2-to-v3.md"})," – guidelines for LLM copilots"]}),`
`]})]})}function j(s={}){const{wrapper:n}={...i(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{j as default};
