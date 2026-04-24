import"./Button-BSmYWFu4.js";import"./InputText-D9bC-ZE3.js";import"./FormControl-C2njYF__.js";import"./ReactSelect-C-itzEHU.js";import"./HtmlSelect-HPewC4EO.js";import"./ChoicesSelect-C2SL7ZTH.js";import"./Select-a21Kpltl.js";import"./PaginationButton-DCIGzsDo.js";import"./Table-BLksTxig.js";import"./TabsBody-CT1CtfYg.js";import"./Card-DKRftcPb.js";import"./Icon-DayE8q_y.js";import"./ChoicesTags-bZiNB4XU.js";import"./FormBuilder-CQkdo29_.js";import{F as h}from"./FormParameters-C9e1aDQo.js";import"./iframe-aTk9OttX.js";import"./cloneDeep-C8-0Pn5Z.js";import"./isEqual-CeUVDAZ9.js";import"./Form-CxiW75Na.js";import{A as S,a as l}from"./ActionsTable.stories-C-vAg-tl.js";import{S as j,a as m}from"./SubmissionsTable.stories-ej9xA9Yb.js";import{j as t}from"./jsx-runtime-87cr0LyS.js";import{u as v}from"./useI18n-q6VcMDMG.js";import{g as s}from"./components-B7KBuUpW.js";import{F}from"./FormAccess-F4EXzzhW.js";import{F as P}from"./FormExport-DxfeTOrw.js";import{F as _}from"./FormPreview-BffmeXUW.js";import{F as E}from"./FormSettings-Df9R925M.js";import"./clsx-B-dksMZM.js";import"./getEventValue-BcWrZMzo.js";import"./react-select-animated.esm-CEW2ldqt.js";import"./index-Tkgu9iqC.js";import"./index-dhIDgrRw.js";import"./choices-DggMhpyp.js";import"./iconClass-B5O_e6PJ.js";import"./preload-helper-D9Z9MdNV.js";import"./noop-Byf9I3SN.js";import"./mapFormToColumns-3Juuw0AR.js";function D(i){return[{title:"Edit",action:"submission:edit",alias:"row",icon:"edit",permissionsResolver:i},{action:"submission:delete",icon:"trash",buttonType:"danger",permissionsResolver:i}]}function N(i){return[{title:"Edit",action:"action:edit",alias:"row",icon:"edit",permissionsResolver:i},{action:"action:delete",icon:"trash",buttonType:"danger",permissionsResolver:i}]}function p({form:i,roles:u,availableActions:b,actions:g,permissionsResolver:d,submissions:A,...r}){const{t:e}=v(r.i18n),y=s("Tabs"),f=s("TabList"),o=s("Tab"),T=s("TabsBody"),n=s("TabPanel"),x=D(d),w=N(d);return t.jsxs(y,{children:[t.jsxs(f,{children:[t.jsx(o,{value:0,icon:"edit",children:e("Edit")}),t.jsx(o,{value:1,icon:"data",children:e("Data")}),t.jsx(o,{value:2,icon:"test-tube",children:e("Preview")}),t.jsx(o,{value:3,icon:"paper-plane",children:e("Actions")}),t.jsx(o,{value:4,icon:"lock",children:e("Access")}),t.jsx(o,{value:5,icon:"download",children:e("Export")}),t.jsx(o,{value:6,icon:"cog",children:e("Settings")})]}),t.jsxs(T,{children:[t.jsx(n,{value:0,className:"p-3 border-l-1 border-b-1 border-r-1 border-gray-300",children:t.jsx(h,{form:i})}),t.jsx(n,{value:1,children:t.jsx(j,{className:"border-top-0",form:i,data:A,i18n:r.i18n,operations:x})}),t.jsx(n,{value:2,children:t.jsx(_,{form:i,i18n:r.i18n})}),t.jsx(n,{value:3,children:t.jsx(S,{className:"border-top-0",availableActions:b,data:g,operations:w,i18n:r.i18n})}),t.jsx(n,{value:4,className:"pt-3",children:t.jsx(F,{form:i,roles:u,options:r})}),t.jsx(n,{value:5,className:"pt-3",children:t.jsx(P,{i18n:r.i18n})}),t.jsx(n,{value:6,className:"p-3 border-l-1 border-b-1 border-r-1 border-gray-300",children:t.jsx(E,{form:i,options:{}})})]})]})}p.__docgenInfo={description:"",methods:[],displayName:"FormViews",props:{form:{required:!0,tsType:{name:'FormEditProps["form"]',raw:'FormEditProps["form"]'},description:""},submissions:{required:!0,tsType:{name:'intersection["data"]',raw:'SubmissionsTableProps<Data>["data"]'},description:""},availableActions:{required:!0,tsType:{name:'intersection["availableActions"]',raw:'ActionsTableProps["availableActions"]'},description:""},actions:{required:!0,tsType:{name:'intersection["data"]',raw:'ActionsTableProps["data"]'},description:""},roles:{required:!1,tsType:{name:'FormAccessProps["roles"]',raw:'FormAccessProps["roles"]'},description:""},i18n:{required:!1,tsType:{name:'intersection["i18n"]',raw:'FormOptions["i18n"]'},description:""},onAction:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},permissionsResolver:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  data: Data,
  metadata: CellMetadata,
  operation: Operation<Data>
) => void`,signature:{arguments:[{type:{name:"Data"},name:"data"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"metadata"},{type:{name:"Operation",elements:[{name:"Data"}],raw:"Operation<Data>"},name:"operation"}],return:{name:"void"}}},description:""}}};const At={title:"views/FormViews",component:p,argTypes:{form:{description:"The form object to manage",control:"object"},submissions:{description:"Submission data to display in the Data tab",control:"object"},roles:{description:"Roles for access control",control:"object"},i18n:{description:"Internationalization function"},onAction:{action:"onAction",description:"Callback when an action is triggered"}},parameters:{docs:{description:{component:"Component that displays a tabbed interface for managing forms with tabs for editing, viewing submissions, previewing, managing actions, controlling access, exporting, and configuring settings."}}}},a={args:{form:m.args.form,submissions:m.args.data,actions:l.args.data,roles:[{_id:"1",title:"Administrator"},{_id:"2",title:"Authenticated"},{_id:"3",title:"Anonymous"}],i18n:{},onAction:()=>console.log("Action triggered")}},c={args:{form:m.args.form,submissions:m.args.data,actions:l.args.data,roles:[{_id:"1",title:"Administrator"},{_id:"2",title:"Authenticated"},{_id:"3",title:"Anonymous"}],i18n:{Edit:"Éditer",Data:"Données",Preview:"Aperçu",Actions:"Actions",Access:"Accès",Export:"Exporter",Settings:"Paramètres","Form with First Name":"Formulaire avec prénom","First name":"Prénom","Last name":"Nom de famille",Submit:"Soumettre"},onAction:()=>console.log("Action triggered")}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    form: SubmissionsTableStory.args.form as any,
    submissions: SubmissionsTableStory.args.data as any,
    // operations: SubmissionsTableStory.args.operations,
    actions: ActionsTableStory.args.data as any,
    roles: [{
      _id: "1",
      title: "Administrator"
    }, {
      _id: "2",
      title: "Authenticated"
    }, {
      _id: "3",
      title: "Anonymous"
    }],
    i18n: {},
    onAction: () => console.log("Action triggered")
  }
}`,...a.parameters?.docs?.source},description:{story:"Basic form view with a simple form",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    form: SubmissionsTableStory.args.form as any,
    submissions: SubmissionsTableStory.args.data as any,
    // operations: SubmissionsTableStory.args.operations,
    actions: ActionsTableStory.args.data as any,
    roles: [{
      _id: "1",
      title: "Administrator"
    }, {
      _id: "2",
      title: "Authenticated"
    }, {
      _id: "3",
      title: "Anonymous"
    }],
    i18n: {
      Edit: "Éditer",
      Data: "Données",
      Preview: "Aperçu",
      Actions: "Actions",
      Access: "Accès",
      Export: "Exporter",
      Settings: "Paramètres",
      "Form with First Name": "Formulaire avec prénom",
      "First name": "Prénom",
      "Last name": "Nom de famille",
      Submit: "Soumettre"
    },
    onAction: () => console.log("Action triggered")
  }
}`,...c.parameters?.docs?.source},description:{story:"Form view with translated labels",...c.parameters?.docs?.description}}};const yt=["Usage","Translated"];export{c as Translated,a as Usage,yt as __namedExportsOrder,At as default};
