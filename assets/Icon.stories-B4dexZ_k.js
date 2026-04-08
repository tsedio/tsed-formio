import{j as e}from"./jsx-runtime-C-tXp4WL.js";import{a as o}from"./iframe-ADnK4W05.js";import{I as r}from"./Icon-DeTuR5t6.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./iconClass-Dz4BhXbm.js";const f={title:"Icon",component:r,argTypes:{name:{control:"text"},iconset:{control:"select",options:["bx","lu"]},spinning:{control:"boolean"}},parameters:{children:"Text",variant:"primary",docs:{description:{component:'Icon component to display icons based on [BxIcons](https://boxicons.com/).\n\n## Usage\n\n```ts\nimport {Icon} from "@tsed/react-formio/atoms/icon/Icon";\n```\n\n## Override Icon\n\nThis component is registered with the name `Icon` and can be overridden with the following code:\n\n```ts\nregisterComponent("Icon", MyIconComponent);\n```'}}}},n={args:{name:"save"}},i={args:{name:"save"},render(s){return e.jsx("div",{className:"flex flex-wrap gap-3",children:["text-sm","text-large","text-xl","text-3xl","text-8xl"].map(a=>e.jsx("div",{className:"flex gap-3 items-end",children:e.jsx(r,{name:s.name,className:a,iconset:s.iconset,spinning:s.spinning})},a))})}},c={args:{name:"save"},render(s){return e.jsx("div",{className:"flex flex-wrap gap-3",children:["text-sm text-red-600","text-large text-primary","text-xl text-secondary","text-3xl text-green-600"].map(a=>e.jsx("div",{className:"flex gap-3 items-end",children:e.jsx(r,{name:s.name,className:a,iconset:s.iconset,spinning:s.spinning})},a))})}},l={args:{name:"save"},render(s){return e.jsx("div",{className:"flex flex-wrap gap-3",children:["text-sm bg-red-600","text-large bg-primary","text-xl bg-secondary","text-3xl bg-green-600"].map(a=>e.jsx("div",{className:"flex gap-3 items-end",children:e.jsx(r,{name:s.name,className:a+" rounded-full text-white p-3",iconset:s.iconset,spinning:s.spinning})},a))})}},t={args:{name:"save"},render(){return e.jsxs("div",{className:"flex flex-col gap-10",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl",children:e.jsx("a",{href:"https://lucide.dev/icons/",children:"Lucide"})}),e.jsxs("span",{children:["See more"," ",e.jsx("a",{className:"text-blue-800 hover:text-blue-950",href:"https://lucide.dev/icons/",children:"here"})]})]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:Object.entries(o.templates.tailwind.ICONS.lu).map(([s])=>e.jsx("div",{className:"flex gap-3 flex-wrap",children:e.jsxs("div",{className:"flex flex-col justify-center items-center space-y-3 border-1 border-gray-300 rounded-md",style:{width:"100px",height:"100px"},children:[e.jsx("div",{children:e.jsx(r,{name:s,iconset:"lu"})}),e.jsx("span",{className:"text-sm",children:s})]})},s))}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-2xl",children:"BxIcons"}),e.jsxs("span",{children:["See more"," ",e.jsx("a",{className:"text-blue-800 hover:text-blue-950",href:"https://v2.boxicons.com/",children:"here"})]})]}),e.jsx("div",{className:"flex flex-wrap gap-3",children:Object.entries(o.templates.tailwind.ICONS.bx).map(([s])=>e.jsx("div",{className:"flex gap-3 flex-wrap",children:e.jsxs("div",{className:"flex flex-col justify-center items-center space-y-3 border-1 border-gray-300 rounded-md",style:{width:"100px",height:"100px"},children:[e.jsx("div",{children:e.jsx(r,{name:s,iconset:"bx"})}),e.jsx("span",{className:"text-sm",children:s})]})},s))})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    name: "save"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    name: "save"
  },
  render(args) {
    return <div className='flex flex-wrap gap-3'>
        {["text-sm", "text-large", "text-xl", "text-3xl", "text-8xl"].map(className => <div key={className} className={"flex gap-3 items-end"}>
            <Icon name={args.name} className={className} iconset={args.iconset} spinning={args.spinning} />
          </div>)}
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: "save"
  },
  render(args) {
    return <div className='flex flex-wrap gap-3'>
        {["text-sm text-red-600", "text-large text-primary", "text-xl text-secondary", "text-3xl text-green-600"].map(className => <div key={className} className={"flex gap-3 items-end"}>
            <Icon name={args.name} className={className} iconset={args.iconset} spinning={args.spinning} />
          </div>)}
      </div>;
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    name: "save"
  },
  render(args) {
    return <div className='flex flex-wrap gap-3'>
        {["text-sm bg-red-600", "text-large bg-primary", "text-xl bg-secondary", "text-3xl bg-green-600"].map(className => <div key={className} className={"flex gap-3 items-end"}>
            <Icon name={args.name} className={className + " rounded-full text-white p-3"} iconset={args.iconset} spinning={args.spinning} />
          </div>)}
      </div>;
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    name: "save"
  },
  render() {
    return <div className='flex flex-col gap-10'>
        <div>
          <h3 className='text-2xl'>
            <a href='https://lucide.dev/icons/'>Lucide</a>
          </h3>
          <span>
            See more{" "}
            <a className='text-blue-800 hover:text-blue-950' href='https://lucide.dev/icons/'>
              here
            </a>
          </span>
        </div>

        <div className='flex flex-wrap gap-3'>
          {Object.entries(Template.templates.tailwind.ICONS["lu"]).map(([icon]) => <div key={icon} className={"flex gap-3 flex-wrap"}>
              <div className={"flex flex-col justify-center items-center space-y-3 border-1 border-gray-300 rounded-md"} style={{
            width: "100px",
            height: "100px"
          }}>
                <div>
                  <Icon name={icon} iconset='lu' />
                </div>
                <span className='text-sm'>{icon}</span>
              </div>
            </div>)}
        </div>

        <div>
          <h3 className='text-2xl'>BxIcons</h3>
          <span>
            See more{" "}
            <a className='text-blue-800 hover:text-blue-950' href='https://v2.boxicons.com/'>
              here
            </a>
          </span>
        </div>
        <div className='flex flex-wrap gap-3'>
          {Object.entries(Template.templates.tailwind.ICONS["bx"]).map(([icon]) => <div key={icon} className={"flex gap-3 flex-wrap"}>
              <div className={"flex flex-col justify-center items-center space-y-3 border-1 border-gray-300 rounded-md"} style={{
            width: "100px",
            height: "100px"
          }}>
                <div>
                  <Icon name={icon} iconset='bx' />
                </div>
                <span className='text-sm'>{icon}</span>
              </div>
            </div>)}
        </div>
      </div>;
  }
}`,...t.parameters?.docs?.source},description:{story:"Formio needs theses icons to be displayed in the form builder and other places.",...t.parameters?.docs?.description}}};const u=["Usage","Size","Colors","Rounded","PresetsForFormio"];export{c as Colors,t as PresetsForFormio,l as Rounded,i as Size,n as Usage,u as __namedExportsOrder,f as default};
