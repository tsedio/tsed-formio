import{a as o,j as s}from"./jsx-runtime-91a467a5.js";import{i as F}from"./index.modern-f0a5489b.js";import{s as N,D as u,T as _}from"./table.component-374a8980.js";import{S as v}from"./selectColumnFilter.component-bc5dd5fe.js";import{c as l}from"./index-582f377c.js";import{h as Z}from"./FormBuilder-1c4b949e.js";import{i as c}from"./iconClass-7c019a4f.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./noop-1202c7f9.js";import"./index-462ab89b.js";import"./pagination.component-6c227df2.js";import"./select.component-b071a5d3.js";import"./choices-5b1be226.js";import"./index-1fc0ca9a.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";import"./inputText.component-213cf9d9.js";import"./_baseForOwn-522e9593.js";import"./cloneDeep-ce19361f.js";import"./isPlainObject-5f39871e.js";import"./debounce-83d9752c.js";import"./index-14b03c13.js";function I(e){const{icon:m="server",row:{original:t}}=e;return o("div",{className:"p-1",children:[o("h4",{className:"text-primary text-lg flex items-center",children:[s("i",{className:l(c(void 0,m),"mr-1")}),t.title]}),o("ul",{className:"reset-list text-gray-500",children:[o("li",{className:"text-sm",children:["Name: ",t.name||t.machineName]}),o("li",{className:"mt-5",children:[o("span",{className:"badge bg-light mr-1",children:[s("i",{className:l(c(void 0,"history"),"mr-1")}),o("span",{children:["Updated ",Z(t.modified).fromNow()]})]}),(t.tags||[]).map((i,d)=>o("button",{className:"badge badge-hover bg-secondary mr-1",onClick:N(()=>{e.setFilter("tags",i),e.gotoPage(0)}),children:[s("i",{className:l(c(void 0,"tags"),"mr-1")}),i]},d))]})]})]})}function p({Cell:e,...m}){const{i18n:t=r=>r,tags:i}=m,d=e||I,x=[{Header:t("Title"),accessor:"title",id:"title",Cell:r=>s(d,{...r,icon:r.icon,i18n:t}),Filter:u,colspan:2},{Header:t("Tags"),accessor:"tags",id:"tags",hidden:!0,Filter:r=>i&&i.length?s(v,{...r,column:{...r.columns,choices:i}}):s(u,{...r})}];return s(_,{...m,columns:x})}const V={title:"ReactFormio/FormsTable",component:p,argTypes:{icon:{control:{type:"select",options:Object.keys(F.templates.tailwind.ICONS)}},data:{control:{type:"object"}},operations:{control:{type:"object"}},isLoading:{control:{type:"boolean"}},isEmpty:{control:{type:"boolean"}},disableFilters:{control:{type:"boolean"}},disablePagination:{control:{type:"boolean"}},tags:{control:{type:"object"}}},parameters:{}},a=e=>s(p,{...e,data:e.isEmpty?[]:e.data});a.args={icon:"server",data:[{_id:"602967600685b24dbe24e999",type:"form",tags:["common","app"],title:"test-form",name:"testForm",path:"testform",modified:"2021-02-14T18:24:07.460Z"},{_id:"6023f8fe4b1a2ab9a3aae096",type:"form",tags:[],title:"text-field",name:"textField",path:"textfield",modified:"2021-02-10T21:38:52.325Z"},{_id:"5d0797bc872fc762a855985d",type:"form",tags:[],title:"User Login",name:"userLogin",path:"user/login",modified:"2020-03-06T13:37:33.032Z"},{_id:"5d64e89603679802b728dd0e",type:"form",tags:[],title:"test",name:"test",path:"test",modified:"2019-09-12T17:44:03.780Z"},{_id:"5d0797bc872fc7fb4b55985e",type:"form",tags:[],title:"User Register",name:"userRegister",path:"user/register",modified:"2019-06-17T13:38:04.747Z"}],operations:[{title:"Edit",action:"edit",alias:"row",path:"/resources/:resourceId/submissions/:submissionId",icon:"edit",permissionsResolver(){return!0}},{action:"delete",path:"/resources/:resourceId/submissions/:submissionId/delete",icon:"trash",buttonType:"danger",permissionsResolver(){return!0}}]};const n=e=>s(p,{...e,data:e.isEmpty?[]:e.data});n.args={icon:"server",data:[{_id:"602967600685b24dbe24e999",type:"form",tags:["common","app"],title:"test-form",name:"testForm",path:"testform",modified:"2021-02-14T18:24:07.460Z"},{_id:"6023f8fe4b1a2ab9a3aae096",type:"form",tags:[],title:"text-field",name:"textField",path:"textfield",modified:"2021-02-10T21:38:52.325Z"},{_id:"5d0797bc872fc762a855985d",type:"form",tags:[],title:"User Login",name:"userLogin",path:"user/login",modified:"2020-03-06T13:37:33.032Z"},{_id:"5d64e89603679802b728dd0e",type:"form",tags:[],title:"test",name:"test",path:"test",modified:"2019-09-12T17:44:03.780Z"},{_id:"5d0797bc872fc7fb4b55985e",type:"form",tags:[],title:"User Register",name:"userRegister",path:"user/register",modified:"2019-06-17T13:38:04.747Z"}],operations:[{title:"Edit",action:"edit",alias:"row",path:"/resources/:resourceId/submissions/:submissionId",icon:"edit",buttonOutline:!0,permissionsResolver(){return!0}},{action:"delete",path:"/resources/:resourceId/submissions/:submissionId/delete",icon:"trash",buttonType:"danger",buttonOutline:!0,permissionsResolver(){return!0}}]};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`(args: any) => {
  return <FormsTable {...args} data={args.isEmpty ? [] : args.data} />;
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,y,T;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`(args: any) => {
  return <FormsTable {...args} data={args.isEmpty ? [] : args.data} />;
}`,...(T=(y=n.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};const X=["Sandbox","ButtonsOutlined"];export{n as ButtonsOutlined,a as Sandbox,X as __namedExportsOrder,V as default};
//# sourceMappingURL=formsTable.stories-cd06aa86.js.map
