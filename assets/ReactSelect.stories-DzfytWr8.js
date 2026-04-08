import{j as m}from"./jsx-runtime-C-tXp4WL.js";import"./FormControl-v5qmNvKW.js";import"./ReactSelect-B-8Oyi84.js";import"./HtmlSelect-CE98LSVS.js";import"./ChoicesSelect-BIUuqYj2.js";import{S as b}from"./Select-Cpfb-81q.js";import{i as g}from"./iconClass-Dz4BhXbm.js";import{u as S}from"./useValue.hook-BZJ1kvs2.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./react-select-animated.esm-DFrGAGWZ.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";import"./getEventValue-BcWrZMzo.js";import"./choices-DggMhpyp.js";const{fn:v}=__STORYBOOK_MODULE_TEST__,e=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],B={title:"forms/Select/React",component:b,parameters:{layout:"centered",backgrounds:{default:"pearl"},docs:{description:{component:`React select component.

\`\`\`tsx
import {Select} from "@tsed/react-formio/molecules/forms/select/all"; // import HTML5, ChoicesJS and React components

// or
import {Select} from "@tsed/react-formio/molecules/forms/select/Select";
import "@tsed/react-formio/molecules/forms/select/components/ReactSelect"; // register only React select component

\`\`\``}}},args:{layout:"react"},argTypes:{label:{control:"text"},name:{control:"text"},value:{control:"select",options:["option-1","option-2","option-3"]},size:{control:"radio",options:["small","normal"]},placeholder:{control:"text"},options:{control:"object"},onChange:{action:"onChange"}},tags:["autodocs"],render(d){const{value:h,onChange:O}=S(d);return m.jsx("div",{style:{width:"300px"},children:m.jsx(b,{...d,value:h,onChange:O})})}},o={args:{name:"name",label:"Label",value:"option-1",options:e,onChange:v()}},n={args:{name:"name",placeholder:"Select an option",options:e,onChange:v()}},a={args:{disabled:!0,options:e}},t={args:{options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2",disabled:!0},{label:"Option 3",value:"option-3"}]}},l={args:{multiple:!0,size:"small",value:["option-1"],options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2",disabled:!0},{label:"Option 3",value:"option-3"}]}},r={args:{before:m.jsx("i",{className:g(void 0,"calendar")}),label:"Label",value:"",size:"",placeholder:"Placeholder",options:e}},s={args:{after:m.jsx("i",{className:g(void 0,"calendar")}),label:"Label",value:"",size:"",placeholder:"Placeholder",options:e}},p={args:{label:"Label",name:"name",value:"",placeholder:"Placeholder",description:"Select multiple values",options:e}},i={args:{label:"Label",name:"name",value:[],size:"",description:"Select multiple values",options:[{label:"Group 1",options:[{label:"Option 1",value:"option-1"}]},{group:"group-1",label:"Option 1",value:"option-1"},{group:"group-1",label:"Option 2",value:"option-2"},{group:"group-2",label:"Option 3",value:"option-3"},{group:"group-2",label:"Option 4",value:"option-4"}]}},c={args:{label:"Label",name:"name",value:[],size:"",multiple:!0,placeholder:"Placeholder",description:"Select multiple values",options:e}},u={args:{label:"Label",name:"name",value:[],size:"",multiple:!0,description:"Select multiple values",options:[{label:"Option 1",group:"group-1",value:"option-1"},{group:"group-1",label:"Option 2",value:"option-2"},{label:"Option 3",group:"group-2",value:"option-3"},{group:"group-2",label:"Option 4",value:"option-4"}]}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: "option-1",
    options,
    onChange: fn()
  }
}`,...o.parameters?.docs?.source},description:{story:"Basic select component using HTML5 syntax.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    placeholder: "Select an option",
    options,
    onChange: fn()
  }
}`,...n.parameters?.docs?.source},description:{story:"Select component with a placeholder.",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...a.parameters?.docs?.source},description:{story:"Select component with a disabled prop.",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Option 1",
      value: "option-1"
    }, {
      label: "Option 2",
      value: "option-2",
      disabled: true
    }, {
      label: "Option 3",
      value: "option-3"
    }]
  }
}`,...t.parameters?.docs?.source},description:{story:"Select component with a disabled option.",...t.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    multiple: true,
    size: "small",
    value: ["option-1"],
    options: [{
      label: "Option 1",
      value: "option-1"
    }, {
      label: "Option 2",
      value: "option-2",
      disabled: true
    }, {
      label: "Option 3",
      value: "option-3"
    }]
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    before: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    after: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
}`,...s.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: "",
    placeholder: "Placeholder",
    description: "Select multiple values",
    options
  }
}`,...p.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    description: "Select multiple values",
    options: [{
      label: "Group 1",
      options: [{
        label: "Option 1",
        value: "option-1"
      }]
    }, {
      group: "group-1",
      label: "Option 1",
      value: "option-1"
    }, {
      group: "group-1",
      label: "Option 2",
      value: "option-2"
    }, {
      group: "group-2",
      label: "Option 3",
      value: "option-3"
    }, {
      group: "group-2",
      label: "Option 4",
      value: "option-4"
    }]
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    multiple: true,
    placeholder: "Placeholder",
    description: "Select multiple values",
    options
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    multiple: true,
    description: "Select multiple values",
    options: [{
      label: "Option 1",
      group: "group-1",
      value: "option-1"
    }, {
      group: "group-1",
      label: "Option 2",
      value: "option-2"
    }, {
      label: "Option 3",
      group: "group-2",
      value: "option-3"
    }, {
      group: "group-2",
      label: "Option 4",
      value: "option-4"
    }]
  }
}`,...u.parameters?.docs?.source}}};const E=["Usage","WithPlaceholder","WithDisabledProp","WithDisabledOption","WithSizeOption","AppendBefore","AppendAfter","WithDescription","WithGroups","WithMultiple","WithGroupsAndMultiple"];export{s as AppendAfter,r as AppendBefore,o as Usage,p as WithDescription,t as WithDisabledOption,a as WithDisabledProp,i as WithGroups,u as WithGroupsAndMultiple,c as WithMultiple,n as WithPlaceholder,l as WithSizeOption,E as __namedExportsOrder,B as default};
