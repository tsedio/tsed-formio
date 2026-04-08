import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{u as r,M as i}from"./blocks-BsHuuCaw.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";function n(t){const o={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Hooks"}),`
`,e.jsx(o.h1,{id:"hooks",children:"Hooks"}),`
`,e.jsx("br",{}),`
`,e.jsx(o.h2,{id:"useformiocontext",children:"useFormioContext"}),`
`,e.jsxs(o.p,{children:["A hook to supply global Formio contextual values to your React components. ",e.jsxs(o.strong,{children:["Components that call ",e.jsx(o.code,{children:"useFormioContext"})," must be children of a ",e.jsx(o.code,{children:"<FormioProvider />"})," component."]})]}),`
`,e.jsx(o.h3,{id:"return-value",children:"Return Value"}),`
`,e.jsxs(o.p,{children:[e.jsx(o.code,{children:"useFormioContext"})," returns an object with the following parameters:"]}),`
`,e.jsxs(o.table,{children:[e.jsx(o.thead,{children:e.jsxs(o.tr,{children:[e.jsx(o.th,{children:"Name"}),e.jsx(o.th,{children:"Type"}),e.jsx(o.th,{children:"Description"})]})}),e.jsxs(o.tbody,{children:[e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"Formio"}),e.jsx(o.td,{children:e.jsx(o.code,{children:"typeof Formio"})}),e.jsxs(o.td,{children:["The global Formio object. Useful for various static methods as well as SDK functions that are exposed when the ",e.jsx(o.code,{children:"new"})," operator is used."]})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"baseUrl"}),e.jsx(o.td,{children:e.jsx(o.code,{children:"string"})}),e.jsx(o.td,{children:"The base url for a Form.io server."})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"projectUrl"}),e.jsx(o.td,{children:e.jsx(o.code,{children:"string"})}),e.jsx(o.td,{children:"The base url for a Form.io enterprise project."})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"logout"}),e.jsx(o.td,{children:e.jsx(o.code,{children:"() => void"})}),e.jsx(o.td,{children:"A convenience method to logout of a Form.io session by invalidating the token and removing it from local storage."})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"token"}),e.jsx(o.td,{children:e.jsx(o.code,{children:"string"})}),e.jsx(o.td,{children:"The Form.io JWT-token (if the user is authenticated)."})]}),e.jsxs(o.tr,{children:[e.jsx(o.td,{children:"isAuthenticated"}),e.jsx(o.td,{children:e.jsx(o.code,{children:"boolean"})}),e.jsx(o.td,{children:"A convenience value that is toggled when logging in or out of a Form.io session."})]})]})]}),`
`,e.jsx(o.h3,{id:"examples",children:"Examples"}),`
`,e.jsxs(o.p,{children:["Use the authentication context provided by ",e.jsx(o.code,{children:"useFormioContext"})," to evaluate the Form.io authentication of a user:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {createRoot} from 'react-dom/client';
import {useFormioContext} from '@tsed/react-formio/hooks/useFormioContext';
import {FormioProvider} from '@tsed/react-formio/contexts/FormioProvider';
import {FormListView} from './forms/FormListView';
import {ResourceListView} from './ressources/FormListView';

const App = () => {
  const { isAuthenticated } = useFormioContext();

  return isAuthenticated ? (
  	<Router>
  	  <Route path="/form">
        <FormListView />
  	  </Route>
  	  <Route path="/resource">
        <ResourceListView />
  	  </Route>
  	</Router>
  ) : (
  	<Redirect to="/login" />
  );
};

const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
  <FormioProvider projectUrl="https://examples.form.io">
    <App />
  </FormioProvider>,
);
`})}),`
`,e.jsx(o.p,{children:"Example of FormListView implementation:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React, {useEffect, useState} from 'react';
import {Formio} from '@formio/js';
import type {FormType, Operation} from "@tsed/react-formio";
import {useFormioContext} from '@tsed/react-formio/hooks/useFormioContext';
import {FormsTable} from "@tsed/react-formio/organisms/table/forms/FormsTable";

export const FormListView = () => {
  const {projectUrl, token, Formio} = useFormioContext();
  const [forms, setForms] = useState<any[]>([]);
  const operations = [
    {
      title: 'Edit',
      action: 'edit',
      alias: 'row',
      icon: 'edit',
      // permissionsResolver: () => {},
    },
    {
      action: 'delete',
      buttonType: 'danger',
      icon: 'trash',
      // permissionsResolver: () => {}
    }
  ];

  const onClick = (form: FormType, operation: Operation) => {
    // Handle click event
    console.log(\`Operation: \${operation.action} on form: \${form.title}\`);
    switch (operation.action) {
      case 'row': // when clicking on the row
      case 'edit':
        // Navigate to edit page
        setLocation("/forms/" + form._id);
      break;
      case 'delete':
        // Handle delete action
    }
  };

  useEffect(() => {
    const formio = new Formio(projectUrl, { token });
    formio.loadForms({ params: { type: 'form' } }).then(setForms);
  }, [projectUrl, token, Formio]);

  return (
    <div>
      <FormsTable data={forms} operations={operations} onClick={onClick} />
    </div>
  );
};
`})})]})}function h(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(n,{...t})}):n(t)}export{h as default};
