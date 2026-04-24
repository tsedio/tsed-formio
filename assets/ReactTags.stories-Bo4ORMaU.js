import{j as r}from"./jsx-runtime-87cr0LyS.js";import"./FormControl-C2njYF__.js";import{I as l}from"./ChoicesTags-bZiNB4XU.js";import"./InputText-D9bC-ZE3.js";import{i}from"./iconClass-B5O_e6PJ.js";import{u as c}from"./useValue.hook-pm2sw3Gc.js";import"./iframe-aTk9OttX.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./react-select-animated.esm-CEW2ldqt.js";import"./index-Tkgu9iqC.js";import"./index-dhIDgrRw.js";import"./choices-DggMhpyp.js";import"./getEventValue-BcWrZMzo.js";const L={title:"forms/InputTags/React",component:l,argTypes:{label:{control:"text"},name:{control:"text"},value:{control:"object"},size:{control:"select",options:["small","normal"]},placeholder:{control:"text"},description:{control:"text"},layout:{control:"select",options:["choicesjs","react"]},onChange:{action:"onChange"}},parameters:{docs:{description:{component:`The InputTags component enables users to create new options in the text field.

\`\`\`tsx
import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/all";

or

import "@tsed/react-formio/molecules/forms/input-tags/components/ReactTags";
import "@tsed/react-formio/molecules/forms/input-text/InputText";
import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/InputTags";

\`\`\``}}},args:{layout:"react"},tags:["autodocs"],render(e){const{value:m,onChange:p}=c(e);return r.jsx(l,{...e,value:m,onChange:p})}},o={args:{name:"name",label:"Label",value:["test"],size:"",placeholder:"Placeholder"}},t={args:{name:"name",label:"Label",value:["test"],size:"small",placeholder:"Placeholder"}},n={render(e){return r.jsx(l,{before:r.jsx("i",{className:i(void 0,"calendar")}),...c(e)})},args:{label:"Label",value:[],name:"name",size:"",placeholder:"Placeholder"}},s={render(e){return r.jsx(l,{after:r.jsx("i",{className:i(void 0,"calendar")}),...c(e)})},args:{label:"Label",value:[],name:"name",size:"",placeholder:"Placeholder"}},a={args:{value:[],name:"name",label:"Label",placeholder:"Select or Create...",customProperties:{options:[{value:"chocolate",label:"Chocolate"},{value:"strawberry",label:"Strawberry"},{value:"vanilla",label:"Vanilla"}]}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: ["test"],
    size: "",
    placeholder: "Placeholder"
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: ["test"],
    size: "small",
    placeholder: "Placeholder"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <InputTags before={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
  },
  args: {
    label: "Label",
    value: [],
    name: "name",
    size: "",
    placeholder: "Placeholder"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <InputTags after={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
  },
  args: {
    label: "Label",
    value: [],
    name: "name",
    size: "",
    placeholder: "Placeholder"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    value: [],
    name: "name",
    label: "Label",
    placeholder: "Select or Create...",
    customProperties: {
      options: [{
        value: "chocolate",
        label: "Chocolate"
      }, {
        value: "strawberry",
        label: "Strawberry"
      }, {
        value: "vanilla",
        label: "Vanilla"
      }]
    } satisfies CreatableProps<unknown, true, any>
  }
}`,...a.parameters?.docs?.source},description:{story:`InputTags using the [react-select](https://react-select.com/) library can
be customized using the \`customProperties\` prop.

For example, you can use the \`customProperties\` prop to add a list of options.

See the [react-select documentation](https://react-select.com/creatable) for more information.`,...a.parameters?.docs?.description}}};const j=["Usage","WithSizeOption","AppendBefore","AppendAfter","CustomProperties"];export{s as AppendAfter,n as AppendBefore,a as CustomProperties,o as Usage,t as WithSizeOption,j as __namedExportsOrder,L as default};
