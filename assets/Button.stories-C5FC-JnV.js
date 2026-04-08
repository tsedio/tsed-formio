import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{I as c}from"./Icon-DeTuR5t6.js";import{B as i,a as d}from"./Button-DZgHB-e5.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./iconClass-Dz4BhXbm.js";const T={title:"Button",component:d,argTypes:{onClick:{action:"clicked"},variant:{control:"select",options:i},disabled:{control:"boolean"}},parameters:{children:"Text",variant:"primary",docs:{description:{component:'Button component with a label and an onClick handler.\n\n```ts\nimport {Button} from "@tsed/react-formio/molecules/button/Button";\n```\n\n## Override Button\n\nThis component is registered with the name `Button` and can be overridden with the following code:\n\n```ts\nregisterComponent("Button", MyCustomButtonComponent);\n```'}}}},t={args:{children:"Text",variant:"primary"}},n={args:{children:"Text"},render(a){return e.jsx("div",{className:"flex flex-wrap gap-3",children:i.map(r=>e.jsx("div",{children:e.jsx(d,{...a,variant:r,children:r})},r))})}},s={args:{children:"Text",disabled:!0},render(a){return e.jsx("div",{className:"flex flex-wrap gap-3",children:i.map(r=>e.jsx("div",{children:e.jsx(d,{...a,variant:r,children:r})},r))})}},o={args:{children:"Text"},render(a){return e.jsx("div",{className:"flex flex-wrap gap-3",children:i.map(r=>e.jsx("div",{children:e.jsxs(d,{...a,variant:r,children:[e.jsx(c,{name:"save"}),r]})},r))})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Text",
    variant: "primary"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Text"
  },
  render(args) {
    return <div className='flex flex-wrap gap-3'>
        {BUTTON_VARIANTS.map(variant => <div key={variant}>
            <Button {...args} variant={variant as any}>
              {variant}
            </Button>
          </div>)}
      </div>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Text",
    disabled: true
  },
  render(args) {
    return <div className='flex flex-wrap gap-3'>
        {BUTTON_VARIANTS.map(variant => <div key={variant}>
            <Button {...args} variant={variant as any}>
              {variant}
            </Button>
          </div>)}
      </div>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: "Text"
  },
  render(args) {
    return <div className='flex flex-wrap gap-3'>
        {BUTTON_VARIANTS.map(variant => <div key={variant}>
            <Button {...args} variant={variant as any}>
              <Icon name='save' />
              {variant}
            </Button>
          </div>)}
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const B=["Usage","Variant","Disabled","WithIcon"];export{s as Disabled,t as Usage,n as Variant,o as WithIcon,B as __namedExportsOrder,T as default};
