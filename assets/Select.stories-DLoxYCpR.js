import{j as o}from"./jsx-runtime-C-tXp4WL.js";import"./ChoicesSelect-BIUuqYj2.js";import"./HtmlSelect-CE98LSVS.js";import"./ReactSelect-B-8Oyi84.js";import{u as s}from"./useValue.hook-BZJ1kvs2.js";import{S as t}from"./Select-Cpfb-81q.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./choices-DggMhpyp.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./FormControl-v5qmNvKW.js";import"./getEventValue-BcWrZMzo.js";import"./react-select-animated.esm-DFrGAGWZ.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,l=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"},{label:"Option 4",value:"option-4"},{label:"Option 6",value:"option-6"}],S={title:"forms/Select/All",component:t,parameters:{layout:"centered",backgrounds:{default:"pearl"},docs:{description:{}}},args:{},argTypes:{label:{control:"text"},name:{control:"text"},value:{control:"text"},size:{control:"radio",options:["small","normal"]},placeholder:{control:"text"},options:{control:"object"},onChange:{action:"onChange"}},tags:["autodocs"],render(e){const{value:n,onChange:a}=s(e);return o.jsxs("div",{style:{width:"800px"},className:"grid grid-cols-3 gap-4",children:[o.jsx("div",{children:o.jsx(t,{...e,value:n,layout:"choicesjs",onChange:a})}),o.jsx("div",{children:o.jsx(t,{...e,value:n,layout:"react",onChange:a})}),o.jsx("div",{children:o.jsx(t,{...e,value:n,layout:"html5",onChange:a})}),o.jsx("div",{children:o.jsx(t,{...e,value:[n],layout:"choicesjs",multiple:!0})}),o.jsx("div",{children:o.jsx(t,{...e,value:[n],layout:"react",multiple:!0})})]})}},r={args:{name:"name",label:"Label",value:"option-1",options:l,onChange:i()},parameters:{docs:{description:{story:"Baseline story for default Choices rendering (no custom option template)."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: "option-1",
    options,
    onChange: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Baseline story for default Choices rendering (no custom option template)."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:"Basic select component using HTML5 syntax.",...r.parameters?.docs?.description}}};const T=["Usage"];export{r as Usage,T as __namedExportsOrder,S as default};
