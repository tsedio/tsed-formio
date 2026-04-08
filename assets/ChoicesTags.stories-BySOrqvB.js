import{j as s}from"./jsx-runtime-C-tXp4WL.js";import"./FormControl-v5qmNvKW.js";import{I as t}from"./ChoicesTags-D_Yrr9v9.js";import"./InputText-BSo90KnD.js";import{i as l}from"./iconClass-Dz4BhXbm.js";import{u as c}from"./useValue.hook-BZJ1kvs2.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./react-select-animated.esm-DFrGAGWZ.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";import"./choices-DggMhpyp.js";import"./getEventValue-BcWrZMzo.js";const C={title:"forms/InputTags/ChoicesJs",component:t,argTypes:{label:{control:"text"},name:{control:"text"},value:{control:"object"},size:{control:"select",options:["small","normal"]},placeholder:{control:"text"},description:{control:"text"},layout:{control:"select",options:["choicesjs","react"]},onChange:{action:"onChange"}},parameters:{docs:{description:{component:`The InputTags component enables users to create new options in the text field.

\`\`\`tsx
import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/all";

or

import "@tsed/react-formio/molecules/forms/input-tags/components/ChoicesTags";
import "@tsed/react-formio/molecules/forms/input-tags/components/ReactTags";
import "@tsed/react-formio/molecules/forms/input-text/InputText";
import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/InputTags";

\`\`\``}}},args:{layout:"choicesjs"},tags:["autodocs"]},e={args:{name:"name",label:"Label",value:["test"],size:"",placeholder:"Placeholder"}},a={args:{name:"name",label:"Label",value:["test"],size:"small",placeholder:"Placeholder"}},r={render(n){return s.jsx(t,{before:s.jsx("i",{className:l(void 0,"calendar")}),...c(n)})},args:{label:"Label",value:[],name:"name",size:"",placeholder:"Placeholder"}},o={render(n){return s.jsx(t,{after:s.jsx("i",{className:l(void 0,"calendar")}),...c(n)})},args:{label:"Label",value:[],name:"name",size:"",placeholder:"Placeholder"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: ["test"],
    size: "",
    placeholder: "Placeholder"
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: ["test"],
    size: "small",
    placeholder: "Placeholder"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const L=["Usage","WithSizeOption","AppendBefore","AppendAfter"];export{o as AppendAfter,r as AppendBefore,e as Usage,a as WithSizeOption,L as __namedExportsOrder,C as default};
