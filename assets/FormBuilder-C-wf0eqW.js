import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{u as t,M as s,C as n}from"./blocks-BsHuuCaw.js";import{WebForm as i,Wizard as c,Pdf as l}from"./FormBuilder.stories-BMUokLGy.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";import"./form.fixture-CPh0OpUn.js";import"./FormBuilder-U2d15M2Z.js";import"./components-B7KBuUpW.js";import"./cloneDeep-NQvD4-NC.js";function d(r){const o={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Documentation/Form Builder"}),`
`,e.jsx("style",{children:`
.sbdocs-wrapper {
  background: #f7f7f7;
}
.sbdocs-wrapper .sbdocs-wrapper  {
  background: #fff;
}
`}),`
`,e.jsx(o.h1,{id:"form-builder",children:"Form Builder"}),`
`,e.jsxs(o.p,{children:["The ",e.jsx(o.a,{href:"/story/reactformio-formbuilder--sandbox",children:"FormBuilder"})," class can be used to embed a form builder directly in your React application."]}),`
`,e.jsx(o.p,{children:"Please note that you'll need to include the CSS for the form builder from formio.js as well."}),`
`,e.jsxs(o.p,{children:["Please note that the ",e.jsx(o.a,{href:"/story/reactformio-formbuilder--sandbox",children:"FormBuilder"}),` component does not load and save from/to an url.
You must handle the form definition loading and saving yourself or use the `,e.jsx(o.a,{href:"/docs/documentation-formedit--docs",children:"FormEdit"})," component."]}),`
`,e.jsx(o.h2,{id:"props",children:"Props"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Name"}),e.jsx(o.th,{children:"Type"}),e.jsx(o.th,{children:"Default"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"form"})}),e.jsx(o.td,{children:"object"}),e.jsx(o.td,{}),e.jsxs(o.td,{children:["This is the form definition object. It should at least have a ",e.jsx(o.code,{children:"display"})," property set to form, wizard or pdf."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"options"})}),e.jsx(o.td,{children:"object"}),e.jsx(o.td,{}),e.jsxs(o.td,{children:["The form builder options. See ",e.jsx(o.a,{href:"https://help.form.io/developers/form-development/form-builder#form-builder-options",rel:"nofollow",children:"here"})," for more details."]})]})]})]}),`
`,e.jsx(o.h2,{id:"event-props",children:"Event Props"}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Name"}),e.jsx(o.th,{children:"Parameters"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"onChange"})}),e.jsxs(o.td,{children:[e.jsx(o.code,{children:"schema"}),": object"]}),e.jsx(o.td,{children:"Triggered any time the form definition changes"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"onEditComponent"})}),e.jsxs(o.td,{children:[e.jsx(o.code,{children:"component"}),": object"]}),e.jsx(o.td,{children:"Triggered when the component settings dialog is opened"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"onSaveComponent"})}),e.jsxs(o.td,{children:[e.jsx(o.code,{children:"component"}),": object"]}),e.jsx(o.td,{children:"Triggered when the component settings dialog is saved and closed"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"onCancelComponent"})}),e.jsxs(o.td,{children:[e.jsx(o.code,{children:"component"}),": object"]}),e.jsx(o.td,{children:"Triggered when the component settings dialog is cancelled"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"onDeleteComponent"})}),e.jsxs(o.td,{children:[e.jsx(o.code,{children:"component"}),": object"]}),e.jsx(o.td,{children:"Triggered when a component is removed from the form"})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:e.jsx(o.code,{children:"onUpdateComponent"})}),e.jsxs(o.td,{children:[e.jsx(o.code,{children:"component"}),": object"]}),e.jsx(o.td,{children:"Triggered when a component is added or moved in the form"})]})]})]}),`
`,e.jsx(o.h2,{id:"example",children:"Example"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import { FormBuilder } from "@tsed/react-formio";


ReactDOM.render(
  <FormBuilder components={[]} display={"form"} onChange={(schema) => console.log(schema)} />,
  document.getElementById("builder")
);
`})}),`
`,e.jsx(o.p,{children:"Will render the following:"}),`
`,e.jsx(n,{of:i}),`
`,e.jsx(o.h2,{id:"example-of-a-wizard-form",children:"Example of a wizard form"}),`
`,e.jsx(o.p,{children:`This form configuration allows users to progress through the form in bite-size sections instead of presenting the entire form to the user.
If you are creating a form containing many fields, this is a great option to improve the user experience.`}),`
`,e.jsx(n,{of:c}),`
`,e.jsx(o.h2,{id:"example-of-a-pdf-form",children:"Example of a pdf form"}),`
`,e.jsxs(o.p,{children:[`PDF-First forms allow users to upload a PDF form and add overlay fields to the form, modernizing the traditional old and clunky PDF form.
For a more in-depth guide on the PDF forms please navigate to the `,e.jsx(o.a,{href:"https://help.form.io/userguide/forms/pdf#introduction",rel:"nofollow",children:"following documentation"}),"."]}),`
`,e.jsx(n,{of:l})]})}function w(r={}){const{wrapper:o}={...t(),...r.components};return o?e.jsx(o,{...r,children:e.jsx(d,{...r})}):d(r)}export{w as default};
