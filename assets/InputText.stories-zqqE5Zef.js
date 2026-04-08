import{j as n}from"./jsx-runtime-C-tXp4WL.js";import{i as u}from"./iconClass-Dz4BhXbm.js";import{u as p}from"./useValue.hook-BZJ1kvs2.js";import{I as s}from"./InputText-BSo90KnD.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./components-B7KBuUpW.js";import"./getEventValue-BcWrZMzo.js";import"./FormControl-v5qmNvKW.js";import"./clsx-B-dksMZM.js";const{expect:m,userEvent:x,within:h}=__STORYBOOK_MODULE_TEST__,v=a=>new Promise(e=>setTimeout(e,a)),V={title:"forms/InputText",component:s,argTypes:{label:{control:"text"},type:{control:"text"},name:{control:"text"},value:{control:"text"},required:{control:"boolean"},size:{control:"select",options:["small","normal"]},placeholder:{control:"text"},description:{control:"text"},onChange:{action:"onChange"},onBlur:{action:"onBlur"},onFocus:{action:"onFocus"}},parameters:{docs:{description:{component:'Text Fields let users enter and edit text.\n\n```tsx\nimport {InputTags} from "@tsed/react-formio/molecules/forms/input-text/InputText";\n```'}}},tags:["autodocs"]},t={args:{name:"name",label:"Label",value:"",size:"",placeholder:"Placeholder"},play:async({canvasElement:a})=>{const d=await h(a).getByPlaceholderText("Placeholder");await x.type(d,"Test input",{delay:100}),await m(d).toHaveValue("Test input")}},r={render(a){const e=p(a);return n.jsxs("div",{children:[n.jsx(s,{...e}),n.jsxs("div",{"data-testid":"debounced-value",children:["Value: ",e.value]})]})},args:{name:"name",label:"Label",value:"",size:"",placeholder:"Placeholder"},play:async({canvasElement:a})=>{const e=h(a),d=await e.getByPlaceholderText("Placeholder");await x.type(d,"Test input",{delay:100}),m(e.getByTestId("debounced-value")).toHaveTextContent("Value:"),await v(500),m(e.getByTestId("debounced-value")).toHaveTextContent("Value: Test input")}},o={render(a){const e=p(a);return n.jsx(s,{prefix:n.jsx("i",{className:u(void 0,"calendar")}),...e})},args:{label:"Label",value:"",size:"",placeholder:"Placeholder"}},l={render(a){const e=p(a);return n.jsx(s,{suffix:n.jsx("i",{className:u(void 0,"calendar")}),...e})},args:{label:"Label",value:"",size:"",placeholder:"Placeholder"}},c={render(a){const e=p(a);return n.jsx(s,{suffix:n.jsx("i",{className:u(void 0,"dollar")}),...e})},args:{label:"Label",type:"number",value:"",size:"",placeholder:"Placeholder",description:"Use dollars!"}},i={render(a){const e=p(a);return n.jsx(s,{suffix:n.jsx("i",{className:u(void 0,"dollar")}),...e})},args:{label:"Label",type:"number",value:"",size:"small",placeholder:"Placeholder",description:"Use dollars!"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "name",
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("Placeholder");
    await userEvent.type(input, "Test input", {
      delay: 100
    });
    await expect(input).toHaveValue("Test input");
  }
}`,...t.parameters?.docs?.source},description:{story:"Basic usage of the InputText.",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <div>
        <InputText {...props} />
        <div data-testid={"debounced-value"}>Value: {props.value}</div>
      </div>;
  },
  args: {
    name: "name",
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("Placeholder");
    await userEvent.type(input, "Test input", {
      delay: 100
    });
    expect(canvas.getByTestId("debounced-value")).toHaveTextContent("Value:");
    await delay(500);
    expect(canvas.getByTestId("debounced-value")).toHaveTextContent("Value: Test input");
  }
}`,...r.parameters?.docs?.source},description:{story:"Debounce the value when the user types.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <InputText prefix={<i className={iconClass(undefined, "calendar")} />} {...props} />;
  },
  args: {
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  }
}`,...o.parameters?.docs?.source},description:{story:"Add a prefix to the input text.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <InputText suffix={<i className={iconClass(undefined, "calendar")} />} {...props} />;
  },
  args: {
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  }
}`,...l.parameters?.docs?.source},description:{story:"Add a suffix to the input text.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render(args: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <InputText suffix={<i className={iconClass(undefined, "dollar")} />} {...props} />;
  },
  args: {
    label: "Label",
    type: "number",
    value: "",
    size: "",
    placeholder: "Placeholder",
    description: "Use dollars!"
  }
}`,...c.parameters?.docs?.source},description:{story:"Change the type of the input text.",...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render(args: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <InputText suffix={<i className={iconClass(undefined, "dollar")} />} {...props} />;
  },
  args: {
    label: "Label",
    type: "number",
    value: "",
    size: "small",
    placeholder: "Placeholder",
    description: "Use dollars!"
  }
}`,...i.parameters?.docs?.source},description:{story:"Change the size of the input text.",...i.parameters?.docs?.description}}};const j=["Usage","Debounced","AppendBefore","AppendAfter","TypeNumber","Sizing"];export{l as AppendAfter,o as AppendBefore,r as Debounced,i as Sizing,c as TypeNumber,t as Usage,j as __namedExportsOrder,V as default};
