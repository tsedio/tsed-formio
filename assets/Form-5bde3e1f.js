import{j as n,a as r,F as c}from"./jsx-runtime-91a467a5.js";import{M as h,C as t}from"./index-5c479025.js";import{Sandbox as l,TriggerError as a}from"./form.stories-d49313b5.js";import{u as d}from"./index-1d576ef5.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./iframe-d4f771ef.js";import"../sb-preview/runtime.js";import"./index-d475d2ea.js";import"./cloneDeep-ce19361f.js";import"./_baseForOwn-522e9593.js";import"./index-8ce4a492.js";import"./index-d37d4223.js";import"./index-abb76105.js";import"./uniq-9600944c.js";import"./_createSet-fe3242c1.js";import"./noop-1202c7f9.js";import"./index-356e4a49.js";import"./form.component-93145808.js";import"./index-14b03c13.js";import"./FormBuilder-1c4b949e.js";import"./isPlainObject-5f39871e.js";import"./debounce-83d9752c.js";import"./choices-5b1be226.js";import"./index-1fc0ca9a.js";function i(o){const e=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",h3:"h3",pre:"pre",blockquote:"blockquote"},d(),o.components);return r(c,{children:[n(h,{title:"Documentation/Form"}),`
`,n("style",{children:`
  .sbdocs-wrapper {
    background: #f7f7f7;
  }
  .sbdocs-wrapper .sbdocs-wrapper  {
    background: #fff;
  }
  `}),`
`,n(e.h1,{id:"form",children:"Form"}),`
`,r(e.p,{children:[`The form component is the primary component of the system. It is what takes the form definition (json) and renders the
form into html. There are multiple ways to send the form to the Form component. The two main ways are to pass the `,n(e.code,{children:"src"}),`
prop with an url to the form definition, usually a form.io server. The other is to pass the `,n(e.code,{children:"form"}),` prop with the json
definition and optionally a `,n(e.code,{children:"url"})," prop with the location of the form."]}),`
`,n(e.h2,{id:"props",children:"Props"}),`
`,r(e.table,{children:[n(e.thead,{children:r(e.tr,{children:[n(e.th,{children:"Name"}),n(e.th,{children:"Type"}),n(e.th,{children:"Default"}),n(e.th,{children:"Description"})]})}),r(e.tbody,{children:[r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"src"})}),n(e.td,{children:"url"}),n(e.td,{}),n(e.td,{children:"The url of the form definition. This is commonly from a form.io server. When using src, the form will automatically submit the data to that url as well."})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"url"})}),n(e.td,{children:"url"}),n(e.td,{}),r(e.td,{children:["The url of the form definition. The form will not be loaded from this url and the submission will not be saved here either. This is used for file upload, oauth and other components or actions that need to know where the server is. Use this in connection with ",n(e.code,{children:"form"})]})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"form"})}),n(e.td,{children:"object"}),n(e.td,{}),r(e.td,{children:["Instead of loading a form from the ",n(e.code,{children:"src"})," url, you can preload the form definition and pass it in with the ",n(e.code,{children:"form"})," prop. You should also set ",n(e.code,{children:"url"})," if you are using any advanced components like file upload or oauth."]})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"submission"})}),n(e.td,{children:"object"}),n(e.td,{}),n(e.td,{children:"Submission data to fill the form. You can either load a previous submission or create a submission with some pre-filled data. If you do not provide a submissions the form will initialize an empty submission using default values from the form."})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"options"})}),n(e.td,{children:"object"}),n(e.td,{}),r(e.td,{children:["an options object that can pass options to the formio.js Form that is rendered. You can set options such as ",n(e.code,{children:"readOnly"}),", ",n(e.code,{children:"noAlerts"})," or ",n(e.code,{children:"hide"}),". There are ",n(e.a,{href:"https://github.com/formio/formio.js/wiki/Form-Renderer#options",target:"_blank",rel:"nofollow noopener noreferrer",children:"many options to be found in the formio.js library"}),"."]})]})]})]}),`
`,n(e.h2,{id:"event-props",children:"Event Props"}),`
`,r(e.table,{children:[n(e.thead,{children:r(e.tr,{children:[n(e.th,{children:"Name"}),n(e.th,{children:"Parameters"}),n(e.th,{children:"Description"})]})}),r(e.tbody,{children:[r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"onChange"})}),r(e.td,{children:[n(e.code,{children:"schema"}),": object"]}),n(e.td,{children:"Triggered any time the form definition changes"})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"onEditComponent"})}),r(e.td,{children:[n(e.code,{children:"component"}),": object"]}),n(e.td,{children:"Triggered when the component settings dialog is opened"})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"onSaveComponent"})}),r(e.td,{children:[n(e.code,{children:"component"}),": object"]}),n(e.td,{children:"Triggered when the component settings dialog is saved and closed"})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"onCancelComponent"})}),r(e.td,{children:[n(e.code,{children:"component"}),": object"]}),n(e.td,{children:"Triggered when the component settings dialog is cancelled"})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"onDeleteComponent"})}),r(e.td,{children:[n(e.code,{children:"component"}),": object"]}),n(e.td,{children:"Triggered when a component is removed from the form"})]}),r(e.tr,{children:[n(e.td,{children:n(e.code,{children:"onUpdateComponent"})}),r(e.td,{children:[n(e.code,{children:"component"}),": object"]}),n(e.td,{children:"Triggered when a component is added or moved in the form"})]})]})]}),`
`,n(e.h2,{id:"example",children:"Example"}),`
`,n(e.h3,{id:"basic-usage",children:"Basic usage"}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import { Form } from "@tsed/react-formio";

ReactDOM.render(
   <Form form={{ display: "form", components: [/**/] }} onChange={(schema) => console.log(schema)} />,
   document.getElementById("builder")
);
`})}),`
`,n(e.p,{children:"Will render:"}),`
`,n(t,{of:l}),`
`,n(e.h3,{id:"with-srcurl",children:"With src/url"}),`
`,r(e.p,{children:["Give ",n(e.code,{children:"Form"})," a ",n(e.code,{children:"src"})," property and render:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import { Form } from "@tsed/react-formio";

ReactDOM.render(
  <Form src='https://example.form.io/example' onSubmit={console.log} />,
  document.getElementById("example")
);
`})}),`
`,n(e.h3,{id:"with-error-management",children:"With error management"}),`
`,r(e.p,{children:["Give ",n(e.code,{children:"Form"})," a ",n(e.code,{children:"src"})," property and render:"]}),`
`,n(e.pre,{children:n(e.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import { Form } from "@tsed/react-formio";

interface MyFormData {
  title: string;
}


const form = {
  display: "form",
  components: [
    {
      key: "title",
      type: "textfield"
    }
  ]
};

ReactDOM.render(
  <Form<MyFormData>
    form={form}
    onAsyncSubmit={(submission) => {
      return httpClient.post("/path/to/external/service", { data: submission }).catch((er) => {
        err.errors = [
          {
            message: "My custom message about this field",
            type: "custom",
            path: ["title"],
            level: "error"
          }
        ];
        throw error;
      });
    }}
  />,
  document.getElementById("example")
);
`})}),`
`,n(e.p,{children:"Will render:"}),`
`,n(t,{of:a}),`
`,r(e.blockquote,{children:[`
`,n(e.p,{children:"Clic on the Submit button to see the error."}),`
`]})]})}function B(o={}){const{wrapper:e}=Object.assign({},d(),o.components);return e?n(e,Object.assign({},o,{children:n(i,o)})):i(o)}export{B as default};
//# sourceMappingURL=Form-5bde3e1f.js.map
