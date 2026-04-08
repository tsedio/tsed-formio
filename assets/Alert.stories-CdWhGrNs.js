import{j as a}from"./jsx-runtime-C-tXp4WL.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";function o(e){return!e||Array.isArray(e)&&!e.length?"":typeof e=="string"?e:Array.isArray(e)?e.map(o):Object.prototype.hasOwnProperty.call(e,"errors")?Object.keys(e.errors).map((r,t)=>{const n=e.errors[r];return a.jsxs("div",{children:[a.jsxs("strong",{children:[n.name," (",n.path,")"]})," ","- ",n.message]},t)}):Object.prototype.hasOwnProperty.call(e,"message")?e.message:Object.prototype.hasOwnProperty.call(e,"name")&&e.name==="ValidationError"?e.details.map((r,t)=>a.jsx("div",{children:r.message},t)):Object.prototype.hasOwnProperty.call(e,"_id")&&Object.prototype.hasOwnProperty.call(e,"display")?"Another user has saved this form already. Please reload and re-apply your changes.":"An error occurred. See console logs for details."}function i({children:e,message:r,type:t="danger"}){return a.jsxs("div",{className:`alert alert-${t}`,role:"alert",children:[o(r),e]})}i.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{message:{required:!1,tsType:{name:"union",raw:"string | any | string[]",elements:[{name:"string"},{name:"any"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},type:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"danger"',computed:!1}}}};const d={title:"Alert",component:i,argTypes:{message:{control:"text"},type:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"]}},parameters:{docs:{source:{language:"tsx"},description:{component:`Alerts display brief messages for the user without interrupting their use of the app.

\`\`\`tsx
import {Alert} from "@tsed/react-formio/molecules/alert/Alert";

<Alert type="danger">
  Message
</Alert>
\`\`\``}}},tags:["autodocs"]},s={args:{type:"danger",message:"error placeholder"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    type: "danger",
    message: "error placeholder"
  }
}`,...s.parameters?.docs?.source}}};const m=["Sandbox"];export{s as Sandbox,m as __namedExportsOrder,d as default};
