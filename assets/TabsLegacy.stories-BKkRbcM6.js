import{j as e}from"./jsx-runtime-C-tXp4WL.js";import"./TabsBody-SDmFRyF_.js";import{u as N}from"./useI18n-q6VcMDMG.js";import{g as n}from"./components-B7KBuUpW.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./iconClass-Dz4BhXbm.js";function c({style:r,current:o,items:b=[],HeaderChildren:l,AddButton:d,className:u,onClick:p,reverse:x,after:T,...i}){const g=n("Tab"),h=n("TabsBody"),v=n("TabList"),y=n("TabPanel"),f=n("Tabs"),m=b.filter(a=>a.label||a.icon),{t:j}=N(i.i18n);return e.jsxs(f,{className:u,style:r,children:[e.jsxs("div",{children:[e.jsxs(v,{children:[m.map((a,s)=>e.jsx(g,{onClick:()=>{p&&p(a)},icon:a.icon,value:s,className:x?"-reverse":"",after:T,children:j(a.label||"")},s)),d&&e.jsx(d,{...i,current:o})]}),l&&e.jsx(l,{...i,current:o})]}),e.jsx(h,{children:m.map((a,s)=>e.jsx(y,{value:s,children:a.children||a.content},s))})]})}c.__docgenInfo={description:"",methods:[],displayName:"TabsLegacy",props:{AddButton:{required:!1,tsType:{name:"any"},description:""},current:{required:!1,tsType:{name:"TabsItemProps"},description:""},items:{required:!1,tsType:{name:"Array",elements:[{name:"TabsItemProps"}],raw:"TabsItemProps[]"},description:"",defaultValue:{value:"[]",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""},reverse:{required:!1,tsType:{name:"boolean"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: TabsItemProps) => void",signature:{arguments:[{type:{name:"TabsItemProps"},name:"item"}],return:{name:"void"}}},description:""},i18n:{required:!1,tsType:{name:'intersection["i18n"]',raw:'FormOptions["i18n"]'},description:""}},composes:["Record"]};const C={title:"TabsLegacy",component:c,argTypes:{},parameters:{docs:{description:{component:`TabsLegacy component.

You can import this component and use it like:

\`\`\`tsx
import {Tabs} from "@tsed/react-formio/molecules/tabs/TabsLegacy";
\`\`\`

TabsLegacy component support DI container and can be used with custom component. Here is the list of components that you can override:

- Tab
- TabList
- TabPanel
- Tabs
- TabsBody

\`\`\`tsx
function CustomTab() {

}

registerComponent("Tab", CustomTab);
\`\`\``}}},render:r=>e.jsx("div",{className:"border-gray-300 border-1 shadow",children:e.jsx(c,{...r})})},t={args:{items:[{action:"edit",exact:!0,icon:"edit",label:"Edit",children:e.jsx("div",{className:"bg-red-100 p-5",children:"Edit"})},{action:"submissions",exact:!1,icon:"data",label:"Data",children:e.jsx("div",{className:"bg-orange-100 p-5",children:"Data"})},{action:"preview",exact:!0,icon:"test-tube",label:"Preview",children:e.jsx("div",{className:"bg-yellow-100 p-5",children:"Preview"})},{action:"actions",exact:!1,icon:"paper-plane",label:"Actions",children:e.jsx("div",{className:"bg-green-100 p-5",children:"Actions"})},{action:"access",exact:!0,icon:"lock",label:"Access",children:e.jsx("div",{className:"bg-blue-100 p-5",children:"Access"})},{action:"export",exact:!0,icon:"download",label:"Export",children:e.jsx("div",{className:"bg-purple-100 p-5",children:"Export"})},{action:"delete",exact:!0,icon:"trash",label:"Delete",roles:["administrator","owner"],children:e.jsx("div",{className:"bg-gray-100 p-5",children:"Trash"})}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      action: "edit",
      exact: true,
      icon: "edit",
      label: "Edit",
      children: <div className='bg-red-100 p-5'>Edit</div>
    }, {
      action: "submissions",
      exact: false,
      icon: "data",
      label: "Data",
      children: <div className='bg-orange-100 p-5'>Data</div>
    }, {
      action: "preview",
      exact: true,
      icon: "test-tube",
      label: "Preview",
      children: <div className='bg-yellow-100 p-5'>Preview</div>
    }, {
      action: "actions",
      exact: false,
      icon: "paper-plane",
      label: "Actions",
      children: <div className='bg-green-100 p-5'>Actions</div>
    }, {
      action: "access",
      exact: true,
      icon: "lock",
      label: "Access",
      children: <div className='bg-blue-100 p-5'>Access</div>
    }, {
      action: "export",
      exact: true,
      icon: "download",
      label: "Export",
      children: <div className='bg-purple-100 p-5'>Export</div>
    }, {
      action: "delete",
      exact: true,
      icon: "trash",
      label: "Delete",
      roles: ["administrator", "owner"],
      children: <div className='bg-gray-100 p-5'>Trash</div>
    }]
  }
}`,...t.parameters?.docs?.source}}};const S=["Sandbox"];export{t as Sandbox,S as __namedExportsOrder,C as default};
