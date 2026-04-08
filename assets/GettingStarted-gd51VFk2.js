import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{u as n,M as i,C as t}from"./blocks-BsHuuCaw.js";import{WebForm as c}from"./FormBuilder.stories-BMUokLGy.js";import{S as l}from"./StoryBanner-CioOQPBo.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";import"./form.fixture-CPh0OpUn.js";import"./FormBuilder-U2d15M2Z.js";import"./components-B7KBuUpW.js";import"./cloneDeep-NQvD4-NC.js";function r(o){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...n(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Getting started"}),`
`,e.jsx(l,{}),`
`,e.jsxs(s.blockquote,{children:[`
`,e.jsxs(s.p,{children:["This module is based on the original ",e.jsx(s.a,{href:"https://github.com/formio/react-formio",rel:"nofollow",children:"react-formio"}),` and add extra features
listed above.`]}),`
`]}),`
`,e.jsx(s.h2,{id:"features",children:"Features"}),`
`,e.jsx(s.p,{children:"Many components are provided to build your own backoffice based on Formio.js API:"}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-table-actions-actionstable--docs",children:"ActionsTable"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-form-access-formaccess--docs",children:"FormAccess"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-form-action-formaction--docs",children:"FormAction"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-form-form--docs",children:"Form"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-form-builder-formbuilder--docs",children:"FormBuilder"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-form-builder-formedit--docs",children:"FormEdit"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-table-forms-formstable--docs",children:"FormsTable"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/molecules-forms-inputtags--docs",children:"InputTags"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/molecules-forms-inputtext--docs",children:"InputText"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/molecules-pagination--docs",children:"Pagination"}),","]}),`
`,e.jsxs(s.li,{children:["Select: ",e.jsx(s.a,{href:"?path=/docs/molecules-forms-select-choicejs--docs",children:"Choicejs"}),", ",e.jsx(s.a,{href:"?path=/docs/molecules-forms-select-html5--docs",children:"HTML5"})," or ",e.jsx(s.a,{href:"?path=/docs/molecules-forms-select-react--docs",children:"ReactSelect"}),","]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/organisms-table-submissions-submissionstable--docs",children:"SubmissionsTable"}),"."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.a,{href:"?path=/docs/molecules-table--docs",children:"Table"}),","]}),`
`,e.jsx(s.li,{children:"Predefined Reducers for Actions, Action, Form, Forms, Submission, Submissions, etc...,"}),`
`,e.jsx(s.li,{children:"TypeScript support."}),`
`,e.jsx(s.li,{children:"Tailwind support."}),`
`]}),`
`,e.jsx(s.h2,{id:"install",children:"Install"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"@tsed/react-formio"}),` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as `,e.jsx(s.a,{href:"https://vite.dev/",rel:"nofollow",children:"Vite"}),", ",e.jsx(s.a,{href:"http://webpack.github.io/",rel:"nofollow",children:"webpack"})," or ",e.jsx(s.a,{href:"https://rollupjs.org/",rel:"nofollow",children:"Rollup"}),"."]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-sh",children:`npm install @formio/js --save // Install formiojs since it is a peerDependency
npm install @tsed/react-formio react-table --save
`})}),`
`,e.jsx(s.h2,{id:"migrate-to-v2",children:"Migrate to v2"}),`
`,e.jsxs(s.p,{children:["If you use redux actions with v2, you have to install ",e.jsx(s.code,{children:"@tsed/redux-formio-stores"})," and replace your imports:"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-diff",children:`- import { defaultFormioReducer, formsReducer } from "@tsed/react-formio";
+ import { defaultFormioReducer, formsReducer } from "@tsed/react-formio-stores";
`})}),`
`,e.jsx(s.h2,{id:"migrate-to-v3",children:"Migrate to v3"}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"https://github.com/tsedio/tsed-formio/blob/rc/docs/migrations/v2-to-v3.md",rel:"nofollow",children:e.jsx(s.code,{children:"docs/migrations/v2-to-v3.md"})})," for the full upgrade path. Highlights:"]}),`
`,e.jsxs(s.ul,{children:[`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"ESM-only outputs"})," – the package now ships ESM bundles exclusively. Update bundlers/tests and import components from their atomic paths (e.g. ",e.jsx(s.code,{children:"@tsed/react-formio/organisms/form/Form"}),"). Use ",e.jsx(s.code,{children:'import "@tsed/react-formio/all"'})," only when you need legacy side-effects."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tailwind 3 baseline"})," – upgrade to Tailwind ≥3.3 and install ",e.jsx(s.code,{children:"@tsed/tailwind-formio@^3"}),"; v2 tokens are removed."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Store packages removed"})," – uninstall ",e.jsx(s.code,{children:"@tsed/react-formio-stores"}),", ",e.jsx(s.code,{children:"@tsed/redux-utils"}),", and ",e.jsx(s.code,{children:"@tsed/react-formio-container"}),". Replace them with the provided hooks (",e.jsx(s.code,{children:"useForm"}),", ",e.jsx(s.code,{children:"useFormioContext"}),", ",e.jsx(s.code,{children:"useFormBuilder"}),") or your own state layer."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"Tables migrated to TanStack"})," – if you rely on the Table component or ",e.jsx(s.code,{children:"UseTableProps"}),", read the ",e.jsxs(s.a,{href:"https://github.com/tsedio/tsed-formio/blob/rc/docs/migrations/v2-to-v3.md#table--usetable-specifics",rel:"nofollow",children:["Table & ",e.jsx(s.code,{children:"useTable"})," specifics"]})," for column definitions, prop mapping, and TanStack-only requirements."]}),`
`,e.jsxs(s.li,{children:[e.jsx(s.strong,{children:"New peer dependencies"})," – install ",e.jsx(s.code,{children:"@formio/choices.js"}),", ",e.jsx(s.code,{children:"@tanstack/react-table"}),", ",e.jsx(s.code,{children:"react-select"}),", ",e.jsx(s.code,{children:"react-table"}),", and ",e.jsx(s.code,{children:"use-debounce"}),"."]}),`
`]}),`
`,e.jsx(s.p,{children:"Example import change:"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-diff",children:`- import { Form } from "@tsed/react-formio";
+ import { Form } from "@tsed/react-formio/organisms/form/Form";
`})}),`
`,e.jsx(s.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`import React from "react";
import "@tsed/react-formio/all"; // load all library components
import { FormBuilder } from "@tsed/react-formio/organisms/form/builder/FormBuilder";

function App() {
  return (
    <div className='App'>
      <FormBuilder display={"form"} components={[/**/]} />
    </div>
  );
}

export default App;
`})}),`
`,e.jsx(t,{of:c}),`
`,e.jsx(s.h2,{id:"registering-react-components",children:"Registering react components"}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"?path=/docs/register-react-component--docs",children:"Register react component"})," documentation."]}),`
`,e.jsx(s.h2,{id:"optimize-your-bundle-size",children:"Optimize your bundle size"}),`
`,e.jsxs(s.p,{children:["See ",e.jsx(s.a,{href:"?path=/docs/optimize-your-bundle-size--docs",children:"Optimize your bundle size"})," documentation."]}),`
`,e.jsx(s.h2,{id:"contributors",children:"Contributors"}),`
`,e.jsxs(s.p,{children:["Please read ",e.jsx(s.a,{href:"./CONTRIBUTING.md",children:"contributing guidelines here"}),"."]}),`
`,e.jsx("a",{href:"https://github.com/TypedProject/tsed/graphs/contributors",children:e.jsx("img",{src:"https://opencollective.com/tsed/contributors.svg?width=890"})}),`
`,e.jsx(s.h2,{id:"backers",children:"Backers"}),`
`,e.jsxs(s.p,{children:["Thank you to all our backers! 🙏 [",e.jsx(s.a,{href:"https://opencollective.com/tsed#backer",rel:"nofollow",children:"Become a backer"}),"]"]}),`
`,e.jsx("a",{href:"https://opencollective.com/tsed#backers",target:"_blank",children:e.jsx("img",{src:"https://opencollective.com/tsed/tiers/backer.svg?width=890"})}),`
`,e.jsx(s.h2,{id:"sponsors",children:"Sponsors"}),`
`,e.jsxs(s.p,{children:[`Support this project by becoming a sponsor. Your logo will show up here with a link to your
website. [`,e.jsx(s.a,{href:"https://github.com/sponsors/Romakita",rel:"nofollow",children:"Become a sponsor"}),"]"]}),`
`,e.jsx(s.h2,{id:"license",children:"License"}),`
`,e.jsx(s.p,{children:"The MIT License (MIT)"}),`
`,e.jsx(s.p,{children:"Copyright (c) 2016 - Today Romain Lenzotti"}),`
`,e.jsx(s.p,{children:`Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:`}),`
`,e.jsx(s.p,{children:`The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.`}),`
`,e.jsx(s.p,{children:`THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`})]})}function R(o={}){const{wrapper:s}={...n(),...o.components};return s?e.jsx(s,{...o,children:e.jsx(r,{...o})}):r(o)}export{R as default};
