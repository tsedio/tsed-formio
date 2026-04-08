import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{u as n,M as s}from"./blocks-BsHuuCaw.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";function r(t){const o={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Optimize your bundle size"}),`
`,e.jsx(o.h1,{id:"optimize-your-bundle-size",children:"Optimize your bundle size"}),`
`,e.jsx(o.p,{children:`Because @tsed/react-formio provides multiple exports and a mechanism to register your own components, you can reduce
the bundle size by importing only the components you need.`}),`
`,e.jsx(o.p,{children:"But you have to create your own imports file to import only the components you need."}),`
`,e.jsxs(o.p,{children:["The first step is to create a ",e.jsx(o.code,{children:"registers.ts"})," file:"]}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import "@tsed/react-formio/atoms/icon/Icon";
import "@tsed/react-formio/molecules/tabs/Tab";
import "@tsed/react-formio/molecules/tabs/TabList";
import "@tsed/react-formio/molecules/tabs/TabPanel";
import "@tsed/react-formio/molecules/tabs/Tabs";
import "@tsed/react-formio/molecules/tabs/TabsBody";
import "@tsed/react-formio/molecules/button/Button";
import "@tsed/react-formio/molecules/forms/input-text/InputText";
import "@tsed/react-formio/molecules/forms/select/Select";
import "@tsed/react-formio/molecules/forms/select/components/HtmlSelect";
import "@tsed/react-formio/molecules/forms/select/components/ChoicesSelect";
import "@tsed/react-formio/molecules/forms/select/components/ReactSelect";
import "@tsed/react-formio/molecules/forms/input-tags/InputTags";
import "@tsed/react-formio/molecules/forms/input-tags/components/ReactTags";
import "@tsed/react-formio/molecules/forms/input-tags/components/ChoicesTags";
import "@tsed/react-formio/molecules/pagination/Pagination";
import "@tsed/react-formio/molecules/pagination/PaginationButton";
import "@tsed/react-formio/organisms/form/builder/FormBuilder";
import "@tsed/react-formio/organisms/form/builder/FormEdit";
import "@tsed/react-formio/organisms/form/builder/FormEditCtas";
import "@tsed/react-formio/organisms/form/builder/FormParameters";
import "@tsed/react-formio/organisms/form/builder/useFormBuilder";
import "@tsed/react-formio/organisms/form/builder/useFormEdit";
import "@tsed/react-formio/molecules/forms/input-tags/InputTags.interface";
import "@tsed/react-formio/molecules/table/components/DefaultFilter";
import "@tsed/react-formio/molecules/table/components/DefaultArrowSort";
import "@tsed/react-formio/molecules/table/components/DefaultCell";
import "@tsed/react-formio/molecules/table/components/DefaultCellOperations";
import "@tsed/react-formio/molecules/table/components/DefaultOperationButton";
import "@tsed/react-formio/molecules/table/components/DefaultCellHeader";
import "@tsed/react-formio/molecules/table/components/DefaultCellFooter";
import "@tsed/react-formio/molecules/table/filters/TextFieldFilter";
import "@tsed/react-formio/molecules/table/filters/SelectFilter";
import "@tsed/react-formio/molecules/table/filters/RangeFilter";
`})}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsx(o.p,{children:"Comment lines you don't need and add your own component if necessary."}),`
`]}),`
`,e.jsx(o.p,{children:`This file references all the components used by the library, you can remove the components you don't need or replace
them by your own component.`}),`
`,e.jsx(o.p,{children:"Then you can import only the components you need in your application:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import React from "react";
// import "@tsed/react-formio/all"; // remove or comment this line
import "./registers.ts"; // import your own registers file
import { FormBuilder } from "@tsed/react-formio/organisms/form/builder/FormBuilder";

function App() {
  return (
    <div className='App'>
      <FormBuilder display={"form"} components={[/**/]} />
    </div>
  );
}

export default App;
`})})]})}function u(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{u as default};
