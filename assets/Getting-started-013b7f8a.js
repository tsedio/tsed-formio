import{j as e,a as o,F as s}from"./jsx-runtime-91a467a5.js";import{M as c,C as a}from"./index-5c479025.js";import{Sandbox as l}from"./formBuilder.stories-dfbef8e9.js";import{u as n}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-d4f771ef.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./cloneDeep-ce19361f.js";import"./_baseForOwn-522e9593.js";import"./index-8ce4a492.js";import"./index-d37d4223.js";import"./index-abb76105.js";import"./uniq-9600944c.js";import"./_createSet-fe3242c1.js";import"./noop-1202c7f9.js";import"./index-356e4a49.js";import"./FormBuilder-1c4b949e.js";import"./isPlainObject-5f39871e.js";import"./debounce-83d9752c.js";import"./choices-5b1be226.js";import"./index-582f377c.js";import"./index-14b03c13.js";import"./select.component-b071a5d3.js";import"./index-1fc0ca9a.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";import"./index-462ab89b.js";import"./inputText.component-213cf9d9.js";import"./form.component-93145808.js";import"./formAccess.component-f80ea610.js";import"./card.component-8e9238ca.js";import"./formEdit.component-2e5fbd1d.js";import"./iconClass-7c019a4f.js";import"./inputTags.component-c15febb3.js";import"./loader.component-36172b30.js";function i(t){const r=Object.assign({p:"p",a:"a",h2:"h2",ul:"ul",li:"li",code:"code",pre:"pre"},n(),t.components);return o(s,{children:[e(c,{title:"Getting started"}),`
`,e("style",{children:`
  .sbdocs-wrapper {
    background: #f7f7f7;
  }
  .sbdocs-wrapper .sbdocs-wrapper  {
    background: #fff;
  }
  `}),`
`,e("div",{className:"flex items-center justify-center pb-5",children:e("a",{href:"https://tsed.io",target:"_blank",children:e("img",{className:"rounded-full overflow-hidden block",src:"https://tsed.io/tsed-og.png",width:"150",alt:"Ts.ED logo"})})}),`
`,o("div",{className:"text-center pb-5",children:[e("h1",{children:"Ts.ED - React Formio"}),o("div",{className:"flex items-center justify-center gap-3",children:[e("a",{href:"https://github.com/tsedio/tsed-formio/actions/workflows/build.yml",children:e("img",{src:"https://github.com/tsedio/tsed-formio/actions/workflows/build.yml/badge.svg",alt:"Build & Release"})}),e("a",{href:"https://github.com/semantic-release/semantic-release",children:e("img",{src:"https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg",alt:"semantic-release"})}),e("a",{href:"https://github.com/prettier/prettier",children:e("img",{src:"https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square",alt:"code style: prettier"})}),e("a",{href:"https://opencollective.com/tsed",children:e("img",{src:"https://opencollective.com/tsed/tiers/badge.svg",alt:"backers"})})]})]}),`
`,o("div",{className:"text-center pb-5",children:[e("a",{href:"https://tsed.io/",children:"Website"}),e("span",{children:"  •  "}),e("a",{href:"https://tsed.io/tutorials/prisma.html",children:"Tutorial"}),e("span",{children:"  •  "}),e("a",{href:"https://api.tsed.io/rest/slack/tsedio/tsed",children:"Slack"}),e("span",{children:"  •  "}),e("a",{href:"https://twitter.com/TsED_io",children:"Twitter"})]}),`
`,e("hr",{}),`
`,o(r.p,{children:["A ",e(r.a,{href:"http://facebook.github.io/react/",target:"_blank",rel:"nofollow noopener noreferrer",children:"React"})," library for rendering out forms based on the ",e(r.a,{href:"https://www.form.io",target:"_blank",rel:"nofollow noopener noreferrer",children:"Form.io"}),`
platform.`]}),`
`,o(r.p,{children:["This module is based on the original ",e(r.a,{href:"https://github.com/formio/react-formio",target:"_blank",rel:"nofollow noopener noreferrer",children:"react-formio"}),` and add extra features
listed above.`]}),`
`,o(r.p,{children:["See our ",e(r.a,{href:"https://formio.tsed.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"storybook"})," to see all available components."]}),`
`,e(r.h2,{id:"features",children:"Features"}),`
`,e(r.p,{children:"Many components are provided to build your own backoffice based on Formio.js API:"}),`
`,o(r.ul,{children:[`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-actionstable--sandbox",children:"ActionsTable"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-formaccess--sandbox",children:"FormAccess"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-formaction--sandbox",children:"FormAction"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/docs/documentation-form--docs",children:"Form"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/docs/documentation-formbuilder--docs",children:"FormBuilder"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/docs/documentation-formedit--docs",children:"FormEdit"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/docs/documentation-formstable--docs",children:"FormsTable"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-inputtags--sandbox",children:"InputTags"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-inputtext--sandbox",children:"InputText"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-pagination--sandbox",children:"Pagination"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-select--sandbox",children:"Select"}),","]}),`
`,o(r.li,{children:[e(r.a,{href:"/docs/documentation-submissionstable--docs",children:"SubmissionsTable"}),"."]}),`
`,o(r.li,{children:[e(r.a,{href:"/story/reactformio-table--sandbox",children:"Table"}),","]}),`
`,e(r.li,{children:"Predefined Reducers for Actions, Action, Form, Forms, Submission, Submissions, etc...,"}),`
`,e(r.li,{children:"TypeScript support."}),`
`,e(r.li,{children:"Tailwind support."}),`
`]}),`
`,e(r.h2,{id:"migrate-from-v1",children:"Migrate from v1"}),`
`,o(r.p,{children:["If you use redux actions from v1, you have to install ",e(r.code,{children:"@tsed/redux-formio-stores"})," and remplace your imports:"]}),`
`,e(r.pre,{children:e(r.code,{className:"language-diff",children:`- import { defaultFormioReducer, formsReducer } from "@tsed/react-formio";
+ import { defaultFormioReducer, formsReducer } from "@tsed/react-formio-stores";
`})}),`
`,e(r.h2,{id:"install",children:"Install"}),`
`,o(r.p,{children:[e(r.code,{children:"@tsed/react-formio"}),` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as `,e(r.a,{href:"http://browserify.org/",target:"_blank",rel:"nofollow noopener noreferrer",children:"Browserify"}),` or
`,e(r.a,{href:"http://webpack.github.io/",target:"_blank",rel:"nofollow noopener noreferrer",children:"webpack"}),"."]}),`
`,e(r.pre,{children:e(r.code,{children:`npm install @tsed/react-formio react-table --save
npm install formiojs choices.js --save // Install formiojs since it is a peerDependency
`})}),`
`,e(r.h2,{id:"usage",children:"Usage"}),`
`,e(r.pre,{children:e(r.code,{className:"language-tsx",children:`import React from "react";
import { FormBuilder } from "@tsed/react-formio";

function App() {
  return (
    <div className='App'>
      <FormBuilder display={"form"} components={[/**/]} />
    </div>
  );
}

export default App;
`})}),`
`,e(a,{of:l}),`
`,e(r.h2,{id:"contributors",children:"Contributors"}),`
`,o(r.p,{children:["Please read ",e(r.a,{href:"./CONTRIBUTING.md",children:"contributing guidelines here"}),"."]}),`
`,e("a",{href:"https://github.com/TypedProject/tsed/graphs/contributors",children:e("img",{src:"https://opencollective.com/tsed/contributors.svg?width=890"})}),`
`,e(r.h2,{id:"backers",children:"Backers"}),`
`,o(r.p,{children:["Thank you to all our backers! 🙏 [",e(r.a,{href:"https://opencollective.com/tsed#backer",target:"_blank",rel:"nofollow noopener noreferrer",children:"Become a backer"}),"]"]}),`
`,e("a",{href:"https://opencollective.com/tsed#backers",target:"_blank",children:e("img",{src:"https://opencollective.com/tsed/tiers/backer.svg?width=890"})}),`
`,e(r.h2,{id:"sponsors",children:"Sponsors"}),`
`,o(r.p,{children:[`Support this project by becoming a sponsor. Your logo will show up here with a link to your
website. [`,e(r.a,{href:"https://opencollective.com/tsed#sponsor",target:"_blank",rel:"nofollow noopener noreferrer",children:"Become a sponsor"}),"]"]}),`
`,e(r.h2,{id:"license",children:"License"}),`
`,e(r.p,{children:"The MIT License (MIT)"}),`
`,e(r.p,{children:"Copyright (c) 2016 - 2021 Romain Lenzotti"}),`
`,e(r.p,{children:`Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:`}),`
`,e(r.p,{children:`The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.`}),`
`,e(r.p,{children:`THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`})]})}function q(t={}){const{wrapper:r}=Object.assign({},n(),t.components);return r?e(r,Object.assign({},t,{children:e(i,t)})):i(t)}export{q as default};
//# sourceMappingURL=Getting-started-013b7f8a.js.map
