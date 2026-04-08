import"./Card-CnJYWz42.js";import"./Icon-DeTuR5t6.js";import{F as n}from"./FormExport-B_ZEaeae.js";import"./jsx-runtime-C-tXp4WL.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./iconClass-Dz4BhXbm.js";import"./useI18n-q6VcMDMG.js";const x={title:"form/export/FormExport",component:n,argTypes:{i18n:{description:"Internationalization function"},onClick:{action:"clicked",description:"Callback when an export button is clicked"}},parameters:{docs:{description:{component:"Component that displays options to export form schema as JSON and form submissions as JSON or CSV."}}}},s={args:{i18n:{},onClick:(o,r)=>console.log(`Action: ${o}, Format: ${r}`)}},t={args:{i18n:{},onClick:(o,r)=>console.log(`Action: ${o}, Format: ${r}`)}},e={args:{i18n:{"Export schema":"Exporter le schéma","Export the formIO schema:":"Exporter le schéma formIO :",Json:"Json",Csv:"Csv","Export form submissions":"Exporter les soumissions du formulaire"},onClick:(o,r)=>console.log(`Action: ${o}, Format: ${r}`)}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    i18n: {},
    onClick: (action: string, format: string) => console.log(\`Action: \${action}, Format: \${format}\`)
  }
}`,...s.parameters?.docs?.source},description:{story:'Default view with form type set to "form"',...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    i18n: {},
    onClick: (action: string, format: string) => console.log(\`Action: \${action}, Format: \${format}\`)
  }
}`,...t.parameters?.docs?.source},description:{story:'View with form type set to "resource"',...t.parameters?.docs?.description}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    i18n: {
      "Export schema": "Exporter le schéma",
      "Export the formIO schema:": "Exporter le schéma formIO :",
      Json: "Json",
      Csv: "Csv",
      "Export form submissions": "Exporter les soumissions du formulaire"
    },
    onClick: (action: string, format: string) => console.log(\`Action: \${action}, Format: \${format}\`)
  }
}`,...e.parameters?.docs?.source},description:{story:"View with custom i18n function",...e.parameters?.docs?.description}}};const h=["Usage","Resource","Translated"];export{t as Resource,e as Translated,s as Usage,h as __namedExportsOrder,x as default};
