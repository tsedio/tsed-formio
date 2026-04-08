import{j as h}from"./jsx-runtime-C-tXp4WL.js";import"./HtmlSelect-CE98LSVS.js";import{i as w}from"./iconClass-Dz4BhXbm.js";import{u as T}from"./useValue.hook-BZJ1kvs2.js";import{S as O}from"./Select-Cpfb-81q.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./getEventValue-BcWrZMzo.js";import"./FormControl-v5qmNvKW.js";const{expect:e,fn:f,userEvent:x,within:y}=__STORYBOOK_MODULE_TEST__,a=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],E={title:"forms/Select/Html5",component:O,parameters:{layout:"centered",backgrounds:{default:"pearl"},docs:{description:{component:`HTML5 select component.

\`\`\`tsx
import {Select} from "@tsed/react-formio/molecules/forms/select/all"; // import HTML5, ChoicesJS and React components

// or
import {Select} from "@tsed/react-formio/molecules/forms/select/Select";
import "@tsed/react-formio/molecules/forms/select/components/HtmlSelect"; // register only HTML5 component

\`\`\``}}},args:{},argTypes:{label:{control:"text"},name:{control:"text"},value:{control:"select",options:["option-1","option-2","option-3"]},size:{control:"radio",options:["small","normal"]},placeholder:{control:"text"},options:{control:"object"},onChange:{action:"onChange"}},tags:["autodocs"],render(n){const{value:t,onChange:l}=T(n);return h.jsx("div",{style:{width:"300px"},children:h.jsx(O,{...n,value:t,onChange:l})})}},s={args:{name:"name",label:"Label",value:"option-1",options:a,onChange:f()},play:async({canvasElement:n,args:t})=>{const l=y(n),o=l.getByTestId("select_name");await e(o).toBeInTheDocument(),await e(o).toHaveValue("option-1"),await x.selectOptions(o,"option-2"),await e(o).toHaveValue("option-2"),await e(t.onChange).toHaveBeenCalledWith("name","option-2");const S=l.getByTestId("form-group-name");await e(S).toBeInTheDocument(),await e(S).toHaveTextContent("Label")}},r={args:{name:"name",placeholder:"Select an option",options:a,onChange:f()},play:async({canvasElement:n,args:t})=>{const o=y(n).getByTestId("select_name");await e(o).toBeInTheDocument(),await e(o).toHaveValue(""),await x.selectOptions(o,"option-2"),await e(o).toHaveValue("option-2"),await e(t.onChange).toHaveBeenCalledWith("name","option-2")}},p={args:{disabled:!0,options:a}},i={args:{options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2",disabled:!0},{label:"Option 3",value:"option-3"}]}},c={args:{size:"small",options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2",disabled:!0},{label:"Option 3",value:"option-3"}]}},u={args:{before:h.jsx("i",{className:w(void 0,"calendar")}),label:"Label",value:"",size:"",placeholder:"Placeholder",options:a}},m={args:{after:h.jsx("i",{className:w(void 0,"calendar")}),label:"Label",value:"",size:"",placeholder:"Placeholder",options:a}},d={args:{label:"Label",name:"name",value:"",placeholder:"Placeholder",description:"Select multiple values",options:a}},g={args:{label:"Label",name:"name",value:[],size:"",description:"Select multiple values",options:[{label:"Group 1",group:"group-1",value:"option-1"},{group:"group-1",label:"Option 2",value:"option-2"},{label:"Group 2",group:"group-2",value:"option-3"},{group:"group-2",label:"Option 4",value:"option-4"}]}},v={args:{label:"Label",name:"name",value:[],size:"",multiple:!0,placeholder:"Placeholder",description:"Select multiple values",options:a}},b={args:{label:"Label",name:"name",value:[],size:"",multiple:!0,description:"Select multiple values",options:[{label:"Group 1",group:"group-1",value:"option-1"},{group:"group-1",label:"Option 2",value:"option-2"},{label:"Group 2",group:"group-2",value:"option-3"},{group:"group-2",label:"Option 4",value:"option-4"}]}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: "option-1",
    options,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("select_name");
    await expect(select).toBeInTheDocument();
    await expect(select).toHaveValue("option-1");
    await userEvent.selectOptions(select, "option-2");
    await expect(select).toHaveValue("option-2");
    await expect(args.onChange).toHaveBeenCalledWith("name", "option-2");
    const label = canvas.getByTestId("form-group-name");
    await expect(label).toBeInTheDocument();
    await expect(label).toHaveTextContent("Label");
  }
}`,...s.parameters?.docs?.source},description:{story:"Basic select component using HTML5 syntax.",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    placeholder: "Select an option",
    options,
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("select_name");
    await expect(select).toBeInTheDocument();
    await expect(select).toHaveValue("");
    await userEvent.selectOptions(select, "option-2");
    await expect(select).toHaveValue("option-2");
    await expect(args.onChange).toHaveBeenCalledWith("name", "option-2");
  }
}`,...r.parameters?.docs?.source},description:{story:"Select component with a placeholder.",...r.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...p.parameters?.docs?.source},description:{story:"Select component with a disabled prop.",...p.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"Select component with a disabled option.",...i.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    before: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    after: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: "",
    placeholder: "Placeholder",
    description: "Select multiple values",
    options
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    description: "Select multiple values",
    options: [{
      label: "Group 1",
      group: "group-1",
      value: "option-1"
    }, {
      group: "group-1",
      label: "Option 2",
      value: "option-2"
    }, {
      label: "Group 2",
      group: "group-2",
      value: "option-3"
    }, {
      group: "group-2",
      label: "Option 4",
      value: "option-4"
    }]
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    multiple: true,
    description: "Select multiple values",
    options: [{
      label: "Group 1",
      group: "group-1",
      value: "option-1"
    }, {
      group: "group-1",
      label: "Option 2",
      value: "option-2"
    }, {
      label: "Group 2",
      group: "group-2",
      value: "option-3"
    }, {
      group: "group-2",
      label: "Option 4",
      value: "option-4"
    }]
  }
}`,...b.parameters?.docs?.source}}};const M=["Usage","WithPlaceholder","WithDisabledProp","WithDisabledOption","WithSizeOption","AppendBefore","AppendAfter","WithDescription","WithGroups","WithMultiple","WithGroupsAndMultiple"];export{m as AppendAfter,u as AppendBefore,s as Usage,d as WithDescription,i as WithDisabledOption,p as WithDisabledProp,g as WithGroups,b as WithGroupsAndMultiple,v as WithMultiple,r as WithPlaceholder,c as WithSizeOption,M as __namedExportsOrder,E as default};
