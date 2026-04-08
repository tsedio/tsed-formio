import{j as t}from"./jsx-runtime-C-tXp4WL.js";import"./ChoicesSelect-BIUuqYj2.js";import{i as E}from"./iconClass-Dz4BhXbm.js";import{u as q}from"./useValue.hook-BZJ1kvs2.js";import{S as P}from"./Select-Cpfb-81q.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./choices-DggMhpyp.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./FormControl-v5qmNvKW.js";const{expect:a,fn:L,userEvent:W,waitFor:s,within:B}=__STORYBOOK_MODULE_TEST__,n=[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"},{label:"Option 3",value:"option-3"}],T=({label:e,data:o})=>t.jsxs("span",{style:{display:"flex",justifyContent:"space-between",width:"100%"},children:[t.jsx("span",{children:e}),t.jsx("small",{style:{opacity:.7},children:o?.hint})]});async function H(e){await s(()=>{a(e.querySelector(".choices")).toBeInTheDocument()});const o=e.querySelector(".choices"),i=o.querySelector(".choices__inner");return await W.click(i),await s(()=>{a(o.classList.contains("is-open")).toBe(!0)}),o}function l(e=300){return new Promise(o=>setTimeout(o,e))}const N={title:"forms/Select/ChoiceJs",component:P,parameters:{layout:"centered",backgrounds:{default:"pearl"},docs:{description:{component:"Choices.js layout using the v11 template callback API. Custom option renderers should be passed with `customProperties.template` on each option to keep Choices `data-*` and ARIA attributes intact."}}},args:{layout:"choicesjs"},argTypes:{label:{control:"text"},name:{control:"text"},value:{control:"text"},size:{control:"radio",options:["small","normal"]},placeholder:{control:"text"},options:{control:"object"},onChange:{action:"onChange"}},tags:["autodocs"],render(e){const{value:o,onChange:i}=q(e);return t.jsx("div",{style:{width:"300px"},children:t.jsx(P,{...e,value:o,onChange:i})})}},p={args:{name:"name",label:"Label",value:"option-1",options:n,onChange:L()},parameters:{docs:{description:{story:"Baseline story for default Choices rendering (no custom option template)."}}},play:async({canvasElement:e,args:o})=>{const h=B(e).getByTestId("select_name");await s(()=>{a(h).toHaveValue("option-1")}),await l();const b=await H(e);await l();const r=b.querySelector('[data-choice-selectable][data-value="option-2"]');await W.click(r),await l(),await s(()=>{a(h).toHaveValue("option-2"),a(o.onChange).toHaveBeenCalledWith("name","option-2")})}},c={args:{name:"name",placeholder:"Select an option",options:n,onChange:L()}},u={args:{name:"name",placeholder:"Select an option",options:n,required:!0,onChange:L()}},m={args:{disabled:!0,options:n}},d={args:{options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2",disabled:!0},{label:"Option 3",value:"option-3"}]}},v={args:{label:"Label",size:"small",options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2",disabled:!0},{label:"Option 3",value:"option-3"}]}},g={args:{before:t.jsx("i",{className:E(void 0,"calendar")}),label:"Label",value:"",size:"",placeholder:"Placeholder",options:n}},O={args:{after:t.jsx("i",{className:E(void 0,"calendar")}),label:"Label",value:"",size:"",placeholder:"Placeholder",options:n}},w={args:{label:"Label",name:"name",value:"",placeholder:"Placeholder",description:"Select multiple values",options:n}},S={args:{label:"Label",name:"name",value:[],size:"",description:"Select multiple values",options:[{label:"Group 1",options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"}]},{label:"Group 2",options:[{label:"Option 3",value:"option-3"},{label:"Option 4",value:"option-4"}]}]}},y={args:{label:"Label",name:"name",value:[],size:"",description:"Select multiple values",options:[{label:"Option 1",group:"group-1",value:"option-1"},{group:"group-1",label:"Option 2",value:"option-2"},{label:"Option 3",group:"group-2",value:"option-3"},{group:"group-2",label:"Option 4",value:"option-4"}]}},C={args:{label:"Label",name:"name",value:[],size:"",multiple:!0,placeholder:"Placeholder",description:"Select multiple values",options:n}},f={args:{label:"Label",name:"name",value:[],size:"",multiple:!0,description:"Select multiple values",options:[{label:"Group 1",options:[{label:"Option 1",value:"option-1"},{label:"Option 2",value:"option-2"}]},{label:"Group 2",options:[{label:"Option 3",value:"option-3"},{label:"Option 4",value:"option-4"}]}]}},x={args:{label:"Label",name:"name",value:"",placeholder:"Select an option",onChange:L(),options:[{label:"Option 1",value:"option-1",customProperties:{hint:"alpha",template:T}},{label:"Option 2",value:"option-2",customProperties:{hint:"beta",template:T}},{label:"Option 3",value:"option-3",customProperties:{hint:"gamma",template:T}}]},parameters:{docs:{description:{story:"Demonstrates the v11-compatible custom option renderer via `option.customProperties.template`. The callback keeps required Choices attributes (`data-choice`, `data-id`, `data-value`, roles)."}}},play:async({canvasElement:e,args:o})=>{const h=B(e).getByTestId("select_name"),b=await H(e);await l();const r=b.querySelector('[data-choice][data-value="option-1"]');await s(()=>{a(r).toBeInTheDocument(),a(r).toHaveAttribute("role","option"),a(r).toHaveTextContent("alpha")}),await l();const z=b.querySelector('[data-choice-selectable][data-value="option-3"]');await W.click(z),await l(),await s(()=>{a(h).toHaveValue("option-3"),a(o.onChange).toHaveBeenCalledWith("name","option-3")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("select_name");
    await waitFor(() => {
      expect(select).toHaveValue("option-1");
    });
    await sleep();
    const choicesElement = await openChoicesDropdown(canvasElement);
    await sleep();
    const option = choicesElement.querySelector('[data-choice-selectable][data-value="option-2"]') as HTMLElement;
    await userEvent.click(option);
    await sleep();
    await waitFor(() => {
      expect(select).toHaveValue("option-2");
      expect(args.onChange).toHaveBeenCalledWith("name", "option-2");
    });
  }
}`,...p.parameters?.docs?.source},description:{story:"Basic select component using HTML5 syntax.",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    placeholder: "Select an option",
    options,
    onChange: fn()
  }
}`,...c.parameters?.docs?.source},description:{story:"Select component with a placeholder.",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    placeholder: "Select an option",
    options,
    required: true,
    onChange: fn()
  }
}`,...u.parameters?.docs?.source},description:{story:"Select component with a placeholder.",...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    options
  }
}`,...m.parameters?.docs?.source},description:{story:"Select component with a disabled prop.",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Select component with a disabled option.",...d.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    before: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
}`,...g.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    after: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
}`,...O.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: "",
    placeholder: "Placeholder",
    description: "Select multiple values",
    options
  }
}`,...w.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
      }, {
        label: "Option 2",
        value: "option-2"
      }]
    }, {
      label: "Group 2",
      options: [{
        label: "Option 3",
        value: "option-3"
      }, {
        label: "Option 4",
        value: "option-4"
      }]
    }]
  }
}`,...S.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
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
}`,...y.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    multiple: true,
    description: "Select multiple values",
    options: [{
      label: "Group 1",
      options: [{
        label: "Option 1",
        value: "option-1"
      }, {
        label: "Option 2",
        value: "option-2"
      }]
    }, {
      label: "Group 2",
      options: [{
        label: "Option 3",
        value: "option-3"
      }, {
        label: "Option 4",
        value: "option-4"
      }]
    }]
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    name: "name",
    value: "",
    placeholder: "Select an option",
    onChange: fn(),
    options: [{
      label: "Option 1",
      value: "option-1",
      customProperties: {
        hint: "alpha",
        template: OptionTemplate
      }
    }, {
      label: "Option 2",
      value: "option-2",
      customProperties: {
        hint: "beta",
        template: OptionTemplate
      }
    }, {
      label: "Option 3",
      value: "option-3",
      customProperties: {
        hint: "gamma",
        template: OptionTemplate
      }
    }]
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates the v11-compatible custom option renderer via \`option.customProperties.template\`. The callback keeps required Choices attributes (\`data-choice\`, \`data-id\`, \`data-value\`, roles)."
      }
    }
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("select_name");
    const choicesElement = await openChoicesDropdown(canvasElement);
    await sleep();
    const customOption = choicesElement.querySelector('[data-choice][data-value="option-1"]') as HTMLElement;
    await waitFor(() => {
      expect(customOption).toBeInTheDocument();
      expect(customOption).toHaveAttribute("role", "option");
      expect(customOption).toHaveTextContent("alpha");
    });
    await sleep();
    const option = choicesElement.querySelector('[data-choice-selectable][data-value="option-3"]') as HTMLElement;
    await userEvent.click(option);
    await sleep();
    await waitFor(() => {
      expect(select).toHaveValue("option-3");
      expect(args.onChange).toHaveBeenCalledWith("name", "option-3");
    });
  }
}`,...x.parameters?.docs?.source}}};const U=["Usage","WithPlaceholder","WithPlaceholderAndRequired","WithDisabledProp","WithDisabledOption","WithSizeOption","AppendBefore","AppendAfter","WithDescription","WithGroups","WithGroupsLegacy","WithMultiple","WithGroupsAndMultiple","WithCustomOptionTemplate"];export{O as AppendAfter,g as AppendBefore,p as Usage,x as WithCustomOptionTemplate,w as WithDescription,d as WithDisabledOption,m as WithDisabledProp,S as WithGroups,f as WithGroupsAndMultiple,y as WithGroupsLegacy,C as WithMultiple,c as WithPlaceholder,u as WithPlaceholderAndRequired,v as WithSizeOption,U as __namedExportsOrder,N as default};
