import{j as r,a as o,F as c}from"./jsx-runtime-91a467a5.js";import{M as h,C as n}from"./index-5c479025.js";import{Sandbox as l,Wizard as m}from"./formBuilder.stories-dfbef8e9.js";import{u as i}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-d4f771ef.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./cloneDeep-ce19361f.js";import"./_baseForOwn-522e9593.js";import"./index-8ce4a492.js";import"./index-d37d4223.js";import"./index-abb76105.js";import"./uniq-9600944c.js";import"./_createSet-fe3242c1.js";import"./noop-1202c7f9.js";import"./index-356e4a49.js";import"./FormBuilder-1c4b949e.js";import"./isPlainObject-5f39871e.js";import"./debounce-83d9752c.js";import"./choices-5b1be226.js";import"./index-582f377c.js";import"./index-14b03c13.js";import"./select.component-b071a5d3.js";import"./index-1fc0ca9a.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";import"./index-462ab89b.js";import"./inputText.component-213cf9d9.js";import"./form.component-93145808.js";import"./formAccess.component-f80ea610.js";import"./card.component-8e9238ca.js";import"./formEdit.component-2e5fbd1d.js";import"./iconClass-7c019a4f.js";import"./inputTags.component-c15febb3.js";import"./loader.component-36172b30.js";function d(t){const e=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre"},i(),t.components);return o(c,{children:[r(h,{title:"Documentation/FormBuilder"}),`
`,r("style",{children:`
  .sbdocs-wrapper {
    background: #f7f7f7;
  }
  .sbdocs-wrapper .sbdocs-wrapper  {
    background: #fff;
  }
  `}),`
`,r(e.h1,{id:"form-builder",children:"Form Builder"}),`
`,o(e.p,{children:["The ",r(e.a,{href:"/story/reactformio-formbuilder--sandbox",children:"FormBuilder"})," class can be used to embed a form builder directly in your React application."]}),`
`,r(e.p,{children:"Please note that you'll need to include the CSS for the form builder from formio.js as well."}),`
`,o(e.p,{children:["Please note that the ",r(e.a,{href:"/story/reactformio-formbuilder--sandbox",children:"FormBuilder"}),` component does not load and save from/to an url.
You must handle the form definition loading and saving yourself or use the `,r(e.a,{href:"/docs/documentation-formedit--docs",children:"FormEdit"})," component."]}),`
`,r(e.h2,{id:"props",children:"Props"}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Name"}),r(e.th,{children:"Type"}),r(e.th,{children:"Default"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"form"})}),r(e.td,{children:"object"}),r(e.td,{}),o(e.td,{children:["This is the form definition object. It should at least have a ",r(e.code,{children:"display"})," property set to form, wizard or pdf."]})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"options"})}),r(e.td,{children:"object"}),r(e.td,{}),r(e.td,{children:"an options object that can pass options to the formio.js Form that is rendered. There are many options to be found in the formio.js library."})]})]})]}),`
`,r(e.h2,{id:"event-props",children:"Event Props"}),`
`,o(e.table,{children:[r(e.thead,{children:o(e.tr,{children:[r(e.th,{children:"Name"}),r(e.th,{children:"Parameters"}),r(e.th,{children:"Description"})]})}),o(e.tbody,{children:[o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"onChange"})}),o(e.td,{children:[r(e.code,{children:"schema"}),": object"]}),r(e.td,{children:"Triggered any time the form definition changes"})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"onEditComponent"})}),o(e.td,{children:[r(e.code,{children:"component"}),": object"]}),r(e.td,{children:"Triggered when the component settings dialog is opened"})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"onSaveComponent"})}),o(e.td,{children:[r(e.code,{children:"component"}),": object"]}),r(e.td,{children:"Triggered when the component settings dialog is saved and closed"})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"onCancelComponent"})}),o(e.td,{children:[r(e.code,{children:"component"}),": object"]}),r(e.td,{children:"Triggered when the component settings dialog is cancelled"})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"onDeleteComponent"})}),o(e.td,{children:[r(e.code,{children:"component"}),": object"]}),r(e.td,{children:"Triggered when a component is removed from the form"})]}),o(e.tr,{children:[r(e.td,{children:r(e.code,{children:"onUpdateComponent"})}),o(e.td,{children:[r(e.code,{children:"component"}),": object"]}),r(e.td,{children:"Triggered when a component is added or moved in the form"})]})]})]}),`
`,r(e.h2,{id:"example",children:"Example"}),`
`,r(e.pre,{children:r(e.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import { FormBuilder } from "@tsed/react-formio";


ReactDOM.render(
  <FormBuilder form={{ display: "form" }} onChange={(schema) => console.log(schema)} />,
  document.getElementById("builder")
);
`})}),`
`,r(e.p,{children:"Will render the following:"}),`
`,r(n,{of:l}),`
`,r(e.h2,{id:"example-of-a-wizard-form",children:"Example of a wizard form"}),`
`,r(n,{of:m})]})}function J(t={}){const{wrapper:e}=Object.assign({},i(),t.components);return e?r(e,Object.assign({},t,{children:r(d,t)})):d(t)}export{J as default};
//# sourceMappingURL=FormBuilder-aa940d60.js.map
