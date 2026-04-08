import"./Card-CnJYWz42.js";import{F as c}from"./Form-QIPqDFqI.js";import{j as l}from"./jsx-runtime-C-tXp4WL.js";import{g as y,m as f}from"./iframe-ADnK4W05.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./preload-helper-D9Z9MdNV.js";var b=f();const h=y(b);function g(a,t){return{...t,...a}}function k({action:a,...t}){return h.eachComponent(t.components,e=>{e.type==="resourcefields"&&(e.type="select",e.label=e.title,e.dataSrc="url",e.data={url:`${e.basePath}?type=resource`},e.valueProperty="_id",e.template="<span>{{ item.title }}</span>",e.persistent=!0)}),t}function s({actionInfo:a,children:t,onSubmit:e,options:r,...m}){const{form:p,submission:u}=(()=>{const d=g(m.submission||{},a.defaults);return{form:k(a.settingsForm),submission:{data:d}}})();return l.jsxs("div",{children:[t,l.jsx(c,{form:p,submission:u,onSubmit:e,options:r}),t]})}s.__docgenInfo={description:"",methods:[],displayName:"FormAction",props:{actionInfo:{required:!0,tsType:{name:"Partial",elements:[{name:"ActionType"}],raw:"Partial<ActionType>"},description:""},submission:{required:!1,tsType:{name:"Partial",elements:[{name:"intersection",raw:`Omit<Partial<Submission>, "data"> & {
  data: Data;
}`,elements:[{name:"Omit",elements:[{name:"Partial",elements:[{name:"Submission"}],raw:"Partial<Submission>"},{name:"literal",value:'"data"'}],raw:'Omit<Partial<Submission>, "data">'},{name:"signature",type:"object",raw:`{
  data: Data;
}`,signature:{properties:[{key:"data",value:{name:"Data",required:!0}}]}}]}],raw:"Partial<SubmissionType>"},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(submission: SubmissionType<ActionType>) => void",signature:{arguments:[{type:{name:"intersection",raw:`Omit<Partial<Submission>, "data"> & {
  data: Data;
}`,elements:[{name:"Omit",elements:[{name:"Partial",elements:[{name:"Submission"}],raw:"Partial<Submission>"},{name:"literal",value:'"data"'}],raw:'Omit<Partial<Submission>, "data">'},{name:"signature",type:"object",raw:`{
  data: Data;
}`,signature:{properties:[{key:"data",value:{name:"ActionType",required:!0}}]}}]},name:"submission"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"intersection",raw:`Form["options"] & {
  events?: EventEmitter;
  currentForm?: FormType;
}`,elements:[{name:'Form["options"]',raw:'Form["options"]'},{name:"signature",type:"object",raw:`{
  events?: EventEmitter;
  currentForm?: FormType;
}`,signature:{properties:[{key:"events",value:{name:"EventEmitter",required:!1}},{key:"currentForm",value:{name:"intersection",raw:`Omit<Form, "components"> & {
  components: ComponentType[];
} & Record<string, unknown>`,elements:[{name:"Omit",elements:[{name:"Form"},{name:"literal",value:'"components"'}],raw:'Omit<Form, "components">'},{name:"signature",type:"object",raw:`{
  components: ComponentType[];
}`,signature:{properties:[{key:"components",value:{name:"Array",elements:[{name:"intersection",raw:'Omit<Component, "components"> & { components?: ComponentType[] } & { title?: string } & Record<string, unknown>',elements:[{name:"Omit",elements:[{name:"Component"},{name:"literal",value:'"components"'}],raw:'Omit<Component, "components">'},{name:"signature",type:"object",raw:"{ components?: ComponentType[] }",signature:{properties:[{key:"components",value:{name:"Array",elements:[{name:"ComponentType"}],raw:"ComponentType[]",required:!1}}]}},{name:"signature",type:"object",raw:"{ title?: string }",signature:{properties:[{key:"title",value:{name:"string",required:!1}}]}},{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}]}],raw:"ComponentType[]",required:!0}}]}},{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"}],required:!1}}]}}]},description:""}}};const F={title:"form/action/FormAction",component:s,argTypes:{actionInfo:{description:"Information about the action including defaults and settings form",control:"object"},submission:{description:"Submission data to fill the form",control:"object"},onSubmit:{action:"onSubmit",description:"Callback when the form is submitted"},options:{description:"Form options",control:"object"}},parameters:{docs:{description:{component:"Component that displays a form for configuring form actions such as save, email, webhook, etc."}}}},n={args:{actionInfo:{name:"save",title:"Save Submission",description:"Saves the submission into the database.",priority:10,defaults:{handler:["before"],method:["create","update"],priority:10,name:"save",title:"Save Submission"},access:{handler:!1,method:!1},settingsForm:{components:[{type:"hidden",input:!0,key:"priority"},{type:"hidden",input:!0,key:"name"},{type:"textfield",input:!0,label:"Title",key:"title"},{type:"fieldset",input:!1,tree:!0,legend:"Action Settings",key:"settings",components:[{input:!1,type:"container",key:"settings",components:[{type:"resourcefields",key:"resource",title:"Save submission to",placeholder:"This form",basePath:"/project/5d0797bc872fc7d140559857/form",form:"62b18b10fbbba513555c6c5e",required:!1,input:!0}]}]},{type:"fieldset",input:!1,tree:!1,key:"conditions",legend:"Action Execution",components:[{type:"select",input:!0,key:"handler",label:"Handler",placeholder:"Select which handler(s) you would like to trigger",dataSrc:"json",data:{json:'[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0},{type:"select",input:!0,label:"Methods",key:"method",placeholder:"Trigger action on method(s)",dataSrc:"json",data:{json:'[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0}]},{type:"button",input:!0,label:"Save Action",key:"submit",size:"md",action:"submit",disableOnInvalid:!0,theme:"primary"}]}},options:{template:"tailwind",iconset:"lu"}}},i={args:{actionInfo:{name:"email",title:"Email",description:"Sends an email when a form is submitted.",priority:0,defaults:{handler:["after"],method:["create"],priority:0,name:"email",title:"Email"},access:{handler:!1,method:!1},settingsForm:{components:[{type:"hidden",input:!0,key:"priority"},{type:"hidden",input:!0,key:"name"},{type:"textfield",input:!0,label:"Title",key:"title"},{type:"fieldset",input:!1,tree:!0,legend:"Email Settings",key:"settings",components:[{type:"textfield",input:!0,label:"From",key:"from",placeholder:"no-reply@example.com",defaultValue:"no-reply@example.com",multiple:!1},{type:"textfield",input:!0,label:"To",key:"to",placeholder:"user@example.com",multiple:!0},{type:"textfield",input:!0,label:"Subject",key:"subject",placeholder:"New submission for {{ form.title }}",defaultValue:"New submission for {{ form.title }}"},{type:"textarea",input:!0,label:"Message",key:"message",placeholder:"{{ submission.data }}",defaultValue:"{{ submission.data }}",rows:5}]},{type:"fieldset",input:!1,tree:!1,key:"conditions",legend:"Action Execution",components:[{type:"select",input:!0,key:"handler",label:"Handler",placeholder:"Select which handler(s) you would like to trigger",dataSrc:"json",data:{json:'[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0},{type:"select",input:!0,label:"Methods",key:"method",placeholder:"Trigger action on method(s)",dataSrc:"json",data:{json:'[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0}]},{type:"button",input:!0,label:"Save Action",key:"submit",size:"md",action:"submit",disableOnInvalid:!0,theme:"primary"}]}},options:{template:"tailwind",iconset:"lu"}}},o={args:{actionInfo:{name:"webhook",title:"Webhook",description:"Sends a submission to a URL.",priority:0,defaults:{handler:["after"],method:["create","update"],priority:0,name:"webhook",title:"Webhook"},access:{handler:!1,method:!1},settingsForm:{components:[{type:"hidden",input:!0,key:"priority"},{type:"hidden",input:!0,key:"name"},{type:"textfield",input:!0,label:"Title",key:"title"},{type:"fieldset",input:!1,tree:!0,legend:"Webhook Settings",key:"settings",components:[{type:"textfield",input:!0,label:"URL",key:"url",placeholder:"https://example.com/webhook",multiple:!1},{type:"select",input:!0,label:"Method",key:"webhookMethod",placeholder:"Select HTTP method",dataSrc:"values",data:{values:[{label:"POST",value:"post"},{label:"PUT",value:"put"},{label:"PATCH",value:"patch"}]},defaultValue:"post"}]},{type:"fieldset",input:!1,tree:!1,key:"conditions",legend:"Action Execution",components:[{type:"select",input:!0,key:"handler",label:"Handler",placeholder:"Select which handler(s) you would like to trigger",dataSrc:"json",data:{json:'[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0},{type:"select",input:!0,label:"Methods",key:"method",placeholder:"Trigger action on method(s)",dataSrc:"json",data:{json:'[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'},template:"<span>{{ item.title }}</span>",valueProperty:"name",multiple:!0}]},{type:"button",input:!0,label:"Save Action",key:"submit",size:"md",action:"submit",disableOnInvalid:!0,theme:"primary"}]}},options:{template:"tailwind",iconset:"lu"}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    actionInfo: {
      name: "save",
      title: "Save Submission",
      description: "Saves the submission into the database.",
      priority: 10,
      defaults: {
        handler: ["before"],
        method: ["create", "update"],
        priority: 10,
        name: "save",
        title: "Save Submission"
      },
      access: {
        handler: false,
        method: false
      },
      settingsForm: {
        components: [{
          type: "hidden",
          input: true,
          key: "priority"
        }, {
          type: "hidden",
          input: true,
          key: "name"
        }, {
          type: "textfield",
          input: true,
          label: "Title",
          key: "title"
        }, {
          type: "fieldset",
          input: false,
          tree: true,
          legend: "Action Settings",
          key: "settings",
          components: [{
            input: false,
            type: "container",
            key: "settings",
            components: [{
              type: "resourcefields",
              key: "resource",
              title: "Save submission to",
              placeholder: "This form",
              basePath: "/project/5d0797bc872fc7d140559857/form",
              form: "62b18b10fbbba513555c6c5e",
              required: false,
              input: true
            }]
          }]
        }, {
          type: "fieldset",
          input: false,
          tree: false,
          key: "conditions",
          legend: "Action Execution",
          components: [{
            type: "select",
            input: true,
            key: "handler",
            label: "Handler",
            placeholder: "Select which handler(s) you would like to trigger",
            dataSrc: "json",
            data: {
              json: '[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'
            },
            template: "<span>{{ item.title }}</span>",
            valueProperty: "name",
            multiple: true
          }, {
            type: "select",
            input: true,
            label: "Methods",
            key: "method",
            placeholder: "Trigger action on method(s)",
            dataSrc: "json",
            data: {
              json: '[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'
            },
            template: "<span>{{ item.title }}</span>",
            valueProperty: "name",
            multiple: true
          }]
        }, {
          type: "button",
          input: true,
          label: "Save Action",
          key: "submit",
          size: "md",
          action: "submit",
          disableOnInvalid: true,
          theme: "primary"
        }]
      }
    },
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"Basic save action configuration",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    actionInfo: {
      name: "email",
      title: "Email",
      description: "Sends an email when a form is submitted.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create"],
        priority: 0,
        name: "email",
        title: "Email"
      },
      access: {
        handler: false,
        method: false
      },
      settingsForm: {
        components: [{
          type: "hidden",
          input: true,
          key: "priority"
        }, {
          type: "hidden",
          input: true,
          key: "name"
        }, {
          type: "textfield",
          input: true,
          label: "Title",
          key: "title"
        }, {
          type: "fieldset",
          input: false,
          tree: true,
          legend: "Email Settings",
          key: "settings",
          components: [{
            type: "textfield",
            input: true,
            label: "From",
            key: "from",
            placeholder: "no-reply@example.com",
            defaultValue: "no-reply@example.com",
            multiple: false
          }, {
            type: "textfield",
            input: true,
            label: "To",
            key: "to",
            placeholder: "user@example.com",
            multiple: true
          }, {
            type: "textfield",
            input: true,
            label: "Subject",
            key: "subject",
            placeholder: "New submission for {{ form.title }}",
            defaultValue: "New submission for {{ form.title }}"
          }, {
            type: "textarea",
            input: true,
            label: "Message",
            key: "message",
            placeholder: "{{ submission.data }}",
            defaultValue: "{{ submission.data }}",
            rows: 5
          }]
        }, {
          type: "fieldset",
          input: false,
          tree: false,
          key: "conditions",
          legend: "Action Execution",
          components: [{
            type: "select",
            input: true,
            key: "handler",
            label: "Handler",
            placeholder: "Select which handler(s) you would like to trigger",
            dataSrc: "json",
            data: {
              json: '[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'
            },
            template: "<span>{{ item.title }}</span>",
            valueProperty: "name",
            multiple: true
          }, {
            type: "select",
            input: true,
            label: "Methods",
            key: "method",
            placeholder: "Trigger action on method(s)",
            dataSrc: "json",
            data: {
              json: '[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'
            },
            template: "<span>{{ item.title }}</span>",
            valueProperty: "name",
            multiple: true
          }]
        }, {
          type: "button",
          input: true,
          label: "Save Action",
          key: "submit",
          size: "md",
          action: "submit",
          disableOnInvalid: true,
          theme: "primary"
        }]
      }
    },
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  }
}`,...i.parameters?.docs?.source},description:{story:"Email action configuration",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    actionInfo: {
      name: "webhook",
      title: "Webhook",
      description: "Sends a submission to a URL.",
      priority: 0,
      defaults: {
        handler: ["after"],
        method: ["create", "update"],
        priority: 0,
        name: "webhook",
        title: "Webhook"
      },
      access: {
        handler: false,
        method: false
      },
      settingsForm: {
        components: [{
          type: "hidden",
          input: true,
          key: "priority"
        }, {
          type: "hidden",
          input: true,
          key: "name"
        }, {
          type: "textfield",
          input: true,
          label: "Title",
          key: "title"
        }, {
          type: "fieldset",
          input: false,
          tree: true,
          legend: "Webhook Settings",
          key: "settings",
          components: [{
            type: "textfield",
            input: true,
            label: "URL",
            key: "url",
            placeholder: "https://example.com/webhook",
            multiple: false
          }, {
            type: "select",
            input: true,
            label: "Method",
            key: "webhookMethod",
            placeholder: "Select HTTP method",
            dataSrc: "values",
            data: {
              values: [{
                label: "POST",
                value: "post"
              }, {
                label: "PUT",
                value: "put"
              }, {
                label: "PATCH",
                value: "patch"
              }]
            },
            defaultValue: "post"
          }]
        }, {
          type: "fieldset",
          input: false,
          tree: false,
          key: "conditions",
          legend: "Action Execution",
          components: [{
            type: "select",
            input: true,
            key: "handler",
            label: "Handler",
            placeholder: "Select which handler(s) you would like to trigger",
            dataSrc: "json",
            data: {
              json: '[{"name":"before","title":"Before"},{"name":"after","title":"After"}]'
            },
            template: "<span>{{ item.title }}</span>",
            valueProperty: "name",
            multiple: true
          }, {
            type: "select",
            input: true,
            label: "Methods",
            key: "method",
            placeholder: "Trigger action on method(s)",
            dataSrc: "json",
            data: {
              json: '[{"name":"create","title":"Create"},{"name":"update","title":"Update"},{"name":"read","title":"Read"},{"name":"delete","title":"Delete"},{"name":"index","title":"Index"}]'
            },
            template: "<span>{{ item.title }}</span>",
            valueProperty: "name",
            multiple: true
          }]
        }, {
          type: "button",
          input: true,
          label: "Save Action",
          key: "submit",
          size: "md",
          action: "submit",
          disableOnInvalid: true,
          theme: "primary"
        }]
      }
    },
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Webhook action configuration",...o.parameters?.docs?.description}}};const E=["SaveAction","EmailAction","WebhookAction"];export{i as EmailAction,n as SaveAction,o as WebhookAction,E as __namedExportsOrder,F as default};
