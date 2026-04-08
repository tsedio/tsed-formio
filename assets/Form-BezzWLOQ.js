import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{u as t,M as i,C as r}from"./blocks-BsHuuCaw.js";import{BasicUsageWithForm as c,BasicUsageWithSrc as a,CustomValidation as l}from"./Form.stories-CkB-lUQb.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";import"./InputText-BSo90KnD.js";import"./components-B7KBuUpW.js";import"./getEventValue-BcWrZMzo.js";import"./FormControl-v5qmNvKW.js";import"./clsx-B-dksMZM.js";import"./form.fixture-CPh0OpUn.js";import"./form-firstname.fixture-C79VtWUc.js";import"./Form-QIPqDFqI.js";function s(o){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Documentation/Form"}),`
`,e.jsx("style",{children:`
.sbdocs-wrapper {
  background: #f7f7f7;
}
.sbdocs-wrapper .sbdocs-wrapper  {
  background: #fff;
}
`}),`
`,e.jsx(n.h1,{id:"form",children:"Form"}),`
`,e.jsxs(n.p,{children:[`The form component is the primary component of the system. It is what takes the form definition (json) and renders the
form into html. There are multiple ways to send the form to the Form component. The two main ways are to pass the `,e.jsx(n.code,{children:"src"}),`
prop with an url to the form definition, usually a form.io server. The other is to pass the `,e.jsx(n.code,{children:"form"}),` prop with the json
definition and optionally a `,e.jsx(n.code,{children:"url"})," prop with the location of the form."]}),`
`,e.jsx(n.h2,{id:"props",children:"Props"}),`
`,e.jsxs(n.table,{children:[e.jsx(n.thead,{children:e.jsxs(n.tr,{children:[e.jsx(n.th,{children:"Name"}),e.jsx(n.th,{children:"Type"}),e.jsx(n.th,{children:"Description"})]})}),e.jsxs(n.tbody,{children:[e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"src"})}),e.jsx(n.td,{children:"url"}),e.jsx(n.td,{children:"The src of the form definition. This is commonly from a form.io server. When using src, the form will automatically submit the data to that url as well."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"url"})}),e.jsx(n.td,{children:"url"}),e.jsxs(n.td,{children:["The url of the form definition. The form will not be loaded from this url and the submission will not be saved here either. This is used for file upload, oauth and other components or actions that need to know where the server is. Use this in connection with ",e.jsx(n.code,{children:"form"})]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"form"})}),e.jsx(n.td,{children:"object"}),e.jsxs(n.td,{children:["Instead of loading a form from the ",e.jsx(n.code,{children:"src"})," url, you can preload the form definition and pass it in with the ",e.jsx(n.code,{children:"form"})," prop. You should also set ",e.jsx(n.code,{children:"url"})," if you are using any advanced components like file upload or oauth."]})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"submission"})}),e.jsx(n.td,{children:"object"}),e.jsx(n.td,{children:"Submission data to fill the form. You can either load a previous submission or create a submission with some pre-filled data. If you do not provide a submissions the form will initialize an empty submission using default values from the form."})]}),e.jsxs(n.tr,{children:[e.jsx(n.td,{children:e.jsx(n.code,{children:"options"})}),e.jsx(n.td,{children:"object"}),e.jsxs(n.td,{children:["an options object that can pass options to the formio.js Form that is rendered. You can set options such as ",e.jsx(n.code,{children:"readOnly"}),", ",e.jsx(n.code,{children:"noAlerts"})," or ",e.jsx(n.code,{children:"hide"}),". There are ",e.jsx(n.a,{href:"https://github.com/formio/formio.js/wiki/Form-Renderer#options",rel:"nofollow",children:"many options to be found in the formio.js library"}),"."]})]})]})]}),`
`,e.jsx(n.h2,{id:"examples",children:"Examples"}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import { Form } from "@tsed/react-formio";

ReactDOM.render(
   <Form form={{ display: "form", components: [/**/] }} onChange={(schema) => console.log(schema)} />,
   document.getElementById("builder")
);
`})}),`
`,e.jsx(n.p,{children:"Will render:"}),`
`,e.jsx(r,{of:c}),`
`,e.jsx(n.h3,{id:"with-src",children:"With src"}),`
`,e.jsx(n.p,{children:"Render a simple form from the Form.io SaaS:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import { Form } from "@tsed/react-formio";

ReactDOM.render(
  <Form src="https://example.form.io/example" onSubmit={console.log} />,
  document.getElementById("example")
);
`})}),`
`,e.jsx(n.p,{children:"Will render:"}),`
`,e.jsx(r,{of:a}),`
`,e.jsx(n.h3,{id:"custom-validation",children:"Custom Validation"}),`
`,e.jsxs(n.p,{children:["Give ",e.jsx(n.code,{children:"Form"})," a ",e.jsx(n.code,{children:"src"})," property and render:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import React from "react";
import ReactDOM from "react-dom";
import {Form, SubmissionType} from "@tsed/react-formio";
import httpClient from "./httpClient";

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
    options={{
      hooks: {
        customValidation(submission: SubmissionType<MyFormData>, cb: (err: null | Error) => void) {
          return httpClient
            .post("/path/to/external/service", { data: submission.data })
            .then(() => cb(null))
            .catch((err) => {
              cb([
                {
                  message: "My custom message about this field",
                  type: "custom",
                  path: ["title"],
                  level: "error"
                }
              ]);
            });
        }
      }
    }}
  />,
  document.getElementById("example")
);
`})}),`
`,e.jsx(n.p,{children:"Will render:"}),`
`,e.jsx(r,{of:l}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:"Clic on the Submit button to see the error."}),`
`]}),`
`,e.jsx(n.h2,{id:"events",children:"Events"}),`
`,e.jsx(n.h3,{id:"onformready",children:"onFormReady"}),`
`,e.jsx(n.p,{children:"A callback function that gets called when the form has rendered. It is useful for accessing the underlying @formio/js Webform instance."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Webform, Form} from "@tsed/react-formio";

<Form onFormReady={(instance: Webform) => console.log(instance)} />
`})}),`
`,e.jsx(n.h3,{id:"onsubmit",children:"onSubmit"}),`
`,e.jsxs(n.p,{children:["A callback function that gets called when the submission has started. If ",e.jsx(n.code,{children:"src"})," is not a Form.io server URL, this will be the final submit event."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form, SubmissionType} from "@tsed/react-formio";

<Form onSubmit={(submission: SubmissionType, saved?: boolean) => console.log(submission)} />;
`})}),`
`,e.jsx(n.h3,{id:"oncancelsubmit",children:"onCancelSubmit"}),`
`,e.jsx(n.p,{children:"A callback function that gets called when the submission has been canceled."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form} from "@tsed/react-formio";

<Form onCancelSubmit={() => console.log("Submission canceled")} />
`})}),`
`,e.jsx(n.h3,{id:"onsubmitdone",children:"onSubmitDone"}),`
`,e.jsxs(n.p,{children:["A callback function that gets called when the submission has successfully been made to the server. This will only fire if ",e.jsx(n.code,{children:"src"})," is set to a Form.io server URL."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form} from "@tsed/react-formio";

<Form onSubmitDone={() => console.log("Submission done")} />
`})}),`
`,e.jsx(n.h3,{id:"onchange",children:"onChange"}),`
`,e.jsx(n.p,{children:"A callback function that gets called when a value in the submission has changed."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form,ChangedSubmission} from "@tsed/react-formio";

<Form onChange={(value: ChangedSubmission, flags: any, modified: any) => console.log(value)} />
`})}),`
`,e.jsx(n.h3,{id:"oncomponentchange",children:"onComponentChange"}),`
`,e.jsx(n.p,{children:"A callback function that gets called when a specific component changes."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {ComponentType, Webform, Form} from "@tsed/react-formio";

<Form onComponentChange={(changed: { instance: Webform; component: ComponentType; value: any; flags: any}) => console.log(changed)} />
`})}),`
`,e.jsx(n.h3,{id:"onerror",children:"onError"}),`
`,e.jsx(n.p,{children:"A callback function that gets called when an error occurs during submission (e.g. a validation error)."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form, EventError} from "@tsed/react-formio";

<Form onError={(error: EventError | false) => console.log(error)} />
`})}),`
`,e.jsx(n.h3,{id:"onrender",children:"onRender"}),`
`,e.jsxs(n.p,{children:["A callback function that gets called when the form is finished rendering. ",e.jsx(n.code,{children:"param"})," will depend on the form and display type."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form} from "@tsed/react-formio";

<Form onRender={(param: any) => console.log(param)} />
`})}),`
`,e.jsx(n.h3,{id:"oncustomevent",children:"onCustomEvent"}),`
`,e.jsx(n.p,{children:"A callback function that gets called when a custom event is triggered."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {ComponentType, Form} from "@tsed/react-formio";

<Form onCustomEvent={(event: { type: string; component: ComponentType; data: JSON; event?: Event; }) => console.log(event)} />;
`})}),`
`,e.jsx(n.h3,{id:"onprevpage",children:"onPrevPage"}),`
`,e.jsx(n.p,{children:'A callback function for Wizard forms that gets called when the "Previous" button is pressed.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form, SubmissionType} from "@tsed/react-formio";

<Form onPrevPage={(page: number, submission: SubmissionType) => console.log(page)} />
`})}),`
`,e.jsx(n.h3,{id:"onnextpage",children:"onNextPage"}),`
`,e.jsx(n.p,{children:'A callback function for Wizard forms that gets called when the "Next" button is pressed.'}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form, SubmissionType} from "@tsed/react-formio";

<Form onNextPage={(page: number, submission: SubmissionType) => console.log(page)} />
`})}),`
`,e.jsx(n.h3,{id:"otherevents",children:"otherEvents"}),`
`,e.jsxs(n.p,{children:['A "catch-all" prop for subscribing to other events (for a complete list, see ',e.jsx(n.a,{href:"https://help.form.io/developers/form-development/form-renderer#form-events",rel:"nofollow",children:"our documentation"}),")."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {Form, ComponentType} from "@tsed/react-formio";

<Form onCustomEvent={(event: { type: string; component: ComponentType; data: JSON; event?: Event; }) => console.log(event)} />;
`})})]})}function S(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{S as default};
