import{j as e}from"./jsx-runtime-87cr0LyS.js";import{u as n,M as s}from"./blocks-D-EEfTZD.js";import"./FormBuilder.stories-HNj5hsPa.js";import"./iframe-aTk9OttX.js";import"./preload-helper-D9Z9MdNV.js";import"./index-Tkgu9iqC.js";import"./index-dhIDgrRw.js";import"./form.fixture-CPh0OpUn.js";import"./FormBuilder-CQkdo29_.js";import"./components-B7KBuUpW.js";import"./cloneDeep-C8-0Pn5Z.js";function r(t){const o={blockquote:"blockquote",code:"code",h1:"h1",p:"p",pre:"pre",...n(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"Register react component"}),`
`,e.jsx(o.h1,{id:"registering-react-components",children:"Registering react components"}),`
`,e.jsxs(o.p,{children:["You can register your own components to be used within the ",e.jsx(o.code,{children:"@tsed/react-formio"}),` library. This is useful if you want to
customize `,e.jsx(o.code,{children:"FormEdit"})," or ",e.jsx(o.code,{children:"Table"})," components."]}),`
`,e.jsx(o.p,{children:"For example FormEdit component use the followings components:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-ts",children:`import "@tsed/react-formio/atoms/icon/Icon";
import "@tsed/react-formio/molecules/button/Button";
import "@tsed/react-formio/molecules/forms/input-text/InputText";
import "@tsed/react-formio/molecules/forms/select/Select";
import "@tsed/react-formio/molecules/forms/select/components/HtmlSelect";
import "@tsed/react-formio/molecules/forms/input-tags/InputTags";
import "@tsed/react-formio/organisms/form/builder/FormParameters";
import "@tsed/react-formio/organisms/form/builder/FormBuilder";
import "@tsed/react-formio/organisms/form/builder/FormEditCtas";
`})}),`
`,e.jsx(o.p,{children:"You can replace for example replace the default React Button component provided by the library by your own Button:"}),`
`,e.jsx(o.pre,{children:e.jsx(o.code,{className:"language-tsx",children:`import {registerComponent} from "@tsed/react-formio/registries/components";
import type {ButtonProps} from "@tsed/react-formio/molecules/button/Button";

registerComponent("button", (props: ButtonProps) => {
  return <button {...props}>{props.label}</button>;
});
`})}),`
`,e.jsx(o.p,{children:"A large part of the provided component from the library can be replaced by your own component."}),`
`,e.jsxs(o.blockquote,{children:[`
`,e.jsxs(o.p,{children:[`Note: Override Button react component doesn't affect the button design and implementation used by formio.js.
To styling the original button component formio, you have to redefine the `,e.jsx(o.code,{children:".btn"})," class in your CSS."]}),`
`]})]})}function b(t={}){const{wrapper:o}={...n(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(r,{...t})}):r(t)}export{b as default};
