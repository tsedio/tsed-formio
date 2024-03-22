import{j as s}from"./jsx-runtime-91a467a5.js";import{F as l,d as o}from"./formEdit.component-2e5fbd1d.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-1fc0ca9a.js";import"./FormBuilder-1c4b949e.js";import"./_baseForOwn-522e9593.js";import"./cloneDeep-ce19361f.js";import"./isPlainObject-5f39871e.js";import"./debounce-83d9752c.js";import"./choices-5b1be226.js";import"./noop-1202c7f9.js";import"./inputText.component-213cf9d9.js";import"./index-582f377c.js";import"./getEventValue-83016e15.js";import"./formControl.component-0c2def02.js";import"./iconClass-7c019a4f.js";import"./index-14b03c13.js";import"./inputTags.component-c15febb3.js";import"./uniq-9600944c.js";import"./_createSet-fe3242c1.js";import"./select.component-b071a5d3.js";const N={title:"ReactFormio/FormEdit",component:l,argTypes:{form:{control:{type:"object"}},typeChoices:{control:{type:"object"}},displayChoices:{control:{type:"object"}},options:{control:{type:"object"}},enableTags:{control:{type:"boolean"}},onSubmit:{action:"onSubmit"},onChange:{action:"onChange"},onCopy:{action:"onCopy"}},parameters:{docs:{source:{type:"code"}}}},t={render:({form:e,typeChoices:b,displayChoices:g,enableTags:y,options:x})=>s(l,{form:e,typeChoices:b,displayChoices:g,enableTags:y,options:x}),args:{typeChoices:[{label:"Form",value:"form"},{label:"Resources",value:"resource"}],displayChoices:o,enableTags:!0,options:{template:"tailwind",iconset:"bx"},form:{type:"form",tags:[],owner:"5d0797a382461b6656d2c790",components:[{label:"Text Field",labelPosition:"top",placeholder:"",description:"",tooltip:"",prefix:"",suffix:"",widget:{type:"input"},inputMask:"",allowMultipleMasks:!1,customClass:"",tabindex:"",autocomplete:"",hidden:!1,hideLabel:!1,showWordCount:!1,showCharCount:!1,mask:!1,autofocus:!1,spellcheck:!0,disabled:!1,tableView:!0,modalEdit:!1,multiple:!1,persistent:!0,inputFormat:"plain",protected:!1,dbIndex:!1,case:"",encrypted:!1,redrawOn:"",clearOnHide:!0,customDefaultValue:"",calculateValue:"",calculateServer:!1,allowCalculateOverride:!1,validateOn:"change",validate:{required:!0,pattern:"",customMessage:"",custom:"",customPrivate:!1,json:"",minLength:"",maxLength:"",strictDateValidation:!1,multiple:!1,unique:!1},unique:!1,errorLabel:"",key:"textField",tags:[],properties:{},conditional:{show:null,when:null,eq:"",json:""},customConditional:"",logic:[],attributes:{},overlay:{style:"",page:"",left:"",top:"",width:"",height:""},type:"textfield",input:!0,refreshOn:"",inputType:"text",id:"eqb1o4r",defaultValue:""}],title:"text-field",display:"form",access:[{roles:["5d0797bc872fc747da559858","5d0797bc872fc71d05559859","5d0797bc872fc7da3b55985a"],type:"read_all"}],submissionAccess:[],controller:"",properties:{},settings:{},name:"textField",path:"textfield",machineName:"tcspjwhsevrzpcd:textField"}}},n={render:e=>s(l,{...e}),args:{form:{type:"form",tags:[],owner:"5d0797a382461b6656d2c790",components:[{label:"Text Field",labelPosition:"top",placeholder:"",description:"",tooltip:"",prefix:"",suffix:"",widget:{type:"input"},inputMask:"",allowMultipleMasks:!1,customClass:"",tabindex:"",autocomplete:"",hidden:!1,hideLabel:!1,showWordCount:!1,showCharCount:!1,mask:!1,autofocus:!1,spellcheck:!0,disabled:!1,tableView:!0,modalEdit:!1,multiple:!1,persistent:!0,inputFormat:"plain",protected:!1,dbIndex:!1,case:"",encrypted:!1,redrawOn:"",clearOnHide:!0,customDefaultValue:"",calculateValue:"",calculateServer:!1,allowCalculateOverride:!1,validateOn:"change",validate:{required:!0,pattern:"",customMessage:"",custom:"",customPrivate:!1,json:"",minLength:"",maxLength:"",strictDateValidation:!1,multiple:!1,unique:!1},unique:!1,errorLabel:"",key:"textField",tags:[],properties:{},conditional:{show:null,when:null,eq:"",json:""},customConditional:"",logic:[],attributes:{},overlay:{style:"",page:"",left:"",top:"",width:"",height:""},type:"textfield",input:!0,refreshOn:"",inputType:"text",id:"eqb1o4r",defaultValue:""}],title:"text-field",display:"form",access:[{roles:["5d0797bc872fc747da559858","5d0797bc872fc71d05559859","5d0797bc872fc7da3b55985a"],type:"read_all"}],submissionAccess:[],controller:"",properties:{},settings:{},name:"textField",path:"textfield",machineName:"tcspjwhsevrzpcd:textField"},displayChoices:o,enableTags:!0,options:{template:"tailwind",iconset:"bx"}}},a={render:e=>s(l,{...e}),args:{form:{type:"form",tags:[],owner:"5d0797a382461b6656d2c790",components:[{label:"Text Field",labelPosition:"top",placeholder:"",description:"",tooltip:"",prefix:"",suffix:"",widget:{type:"input"},inputMask:"",allowMultipleMasks:!1,customClass:"",tabindex:"",autocomplete:"",hidden:!1,hideLabel:!1,showWordCount:!1,showCharCount:!1,mask:!1,autofocus:!1,spellcheck:!0,disabled:!1,tableView:!0,modalEdit:!1,multiple:!1,persistent:!0,inputFormat:"plain",protected:!1,dbIndex:!1,case:"",encrypted:!1,redrawOn:"",clearOnHide:!0,customDefaultValue:"",calculateValue:"",calculateServer:!1,allowCalculateOverride:!1,validateOn:"change",validate:{required:!0,pattern:"",customMessage:"",custom:"",customPrivate:!1,json:"",minLength:"",maxLength:"",strictDateValidation:!1,multiple:!1,unique:!1},unique:!1,errorLabel:"",key:"textField",tags:[],properties:{},conditional:{show:null,when:null,eq:"",json:""},customConditional:"",logic:[],attributes:{},overlay:{style:"",page:"",left:"",top:"",width:"",height:""},type:"textfield",input:!0,refreshOn:"",inputType:"text",id:"eqb1o4r",defaultValue:""}],title:"text-field",display:"form",access:[{roles:["5d0797bc872fc747da559858","5d0797bc872fc71d05559859","5d0797bc872fc7da3b55985a"],type:"read_all"}],submissionAccess:[],controller:"",properties:{},settings:{},name:"textField",path:"textfield",machineName:"tcspjwhsevrzpcd:textField"},displayChoices:o,enableTags:!1,options:{template:"tailwind",iconset:"bx"}}};var i,r,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: ({
    form,
    typeChoices,
    displayChoices,
    enableTags,
    options
  }: any) => {
    return <FormEdit form={form} typeChoices={typeChoices} displayChoices={displayChoices} enableTags={enableTags} options={options} />;
  },
  args: {
    typeChoices: [{
      label: "Form",
      value: "form"
    }, {
      label: "Resources",
      value: "resource"
    }],
    displayChoices: defaultDisplayChoices,
    enableTags: true,
    options: {
      template: "tailwind",
      iconset: "bx"
    },
    form: {
      type: "form",
      tags: [],
      owner: "5d0797a382461b6656d2c790",
      components: [{
        label: "Text Field",
        labelPosition: "top",
        placeholder: "",
        description: "",
        tooltip: "",
        prefix: "",
        suffix: "",
        widget: {
          type: "input"
        },
        inputMask: "",
        allowMultipleMasks: false,
        customClass: "",
        tabindex: "",
        autocomplete: "",
        hidden: false,
        hideLabel: false,
        showWordCount: false,
        showCharCount: false,
        mask: false,
        autofocus: false,
        spellcheck: true,
        disabled: false,
        tableView: true,
        modalEdit: false,
        multiple: false,
        persistent: true,
        inputFormat: "plain",
        protected: false,
        dbIndex: false,
        case: "",
        encrypted: false,
        redrawOn: "",
        clearOnHide: true,
        customDefaultValue: "",
        calculateValue: "",
        calculateServer: false,
        allowCalculateOverride: false,
        validateOn: "change",
        validate: {
          required: true,
          pattern: "",
          customMessage: "",
          custom: "",
          customPrivate: false,
          json: "",
          minLength: "",
          maxLength: "",
          strictDateValidation: false,
          multiple: false,
          unique: false
        },
        unique: false,
        errorLabel: "",
        key: "textField",
        tags: [],
        properties: {},
        conditional: {
          show: null,
          when: null,
          eq: "",
          json: ""
        },
        customConditional: "",
        logic: [],
        attributes: {},
        overlay: {
          style: "",
          page: "",
          left: "",
          top: "",
          width: "",
          height: ""
        },
        type: "textfield",
        input: true,
        refreshOn: "",
        inputType: "text",
        id: "eqb1o4r",
        defaultValue: ""
      }],
      title: "text-field",
      display: "form",
      access: [{
        roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
        type: "read_all"
      }],
      submissionAccess: [],
      controller: "",
      properties: {},
      settings: {},
      name: "textField",
      path: "textfield",
      machineName: "tcspjwhsevrzpcd:textField"
    }
  }
}`,...(d=(r=t.parameters)==null?void 0:r.docs)==null?void 0:d.source}}};var c,p,u;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: (args: any) => {
    return <FormEdit {...args} />;
  },
  args: {
    form: {
      type: "form",
      tags: [],
      owner: "5d0797a382461b6656d2c790",
      components: [{
        label: "Text Field",
        labelPosition: "top",
        placeholder: "",
        description: "",
        tooltip: "",
        prefix: "",
        suffix: "",
        widget: {
          type: "input"
        },
        inputMask: "",
        allowMultipleMasks: false,
        customClass: "",
        tabindex: "",
        autocomplete: "",
        hidden: false,
        hideLabel: false,
        showWordCount: false,
        showCharCount: false,
        mask: false,
        autofocus: false,
        spellcheck: true,
        disabled: false,
        tableView: true,
        modalEdit: false,
        multiple: false,
        persistent: true,
        inputFormat: "plain",
        protected: false,
        dbIndex: false,
        case: "",
        encrypted: false,
        redrawOn: "",
        clearOnHide: true,
        customDefaultValue: "",
        calculateValue: "",
        calculateServer: false,
        allowCalculateOverride: false,
        validateOn: "change",
        validate: {
          required: true,
          pattern: "",
          customMessage: "",
          custom: "",
          customPrivate: false,
          json: "",
          minLength: "",
          maxLength: "",
          strictDateValidation: false,
          multiple: false,
          unique: false
        },
        unique: false,
        errorLabel: "",
        key: "textField",
        tags: [],
        properties: {},
        conditional: {
          show: null,
          when: null,
          eq: "",
          json: ""
        },
        customConditional: "",
        logic: [],
        attributes: {},
        overlay: {
          style: "",
          page: "",
          left: "",
          top: "",
          width: "",
          height: ""
        },
        type: "textfield",
        input: true,
        refreshOn: "",
        inputType: "text",
        id: "eqb1o4r",
        defaultValue: ""
      }],
      title: "text-field",
      display: "form",
      access: [{
        roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
        type: "read_all"
      }],
      submissionAccess: [],
      controller: "",
      properties: {},
      settings: {},
      name: "textField",
      path: "textfield",
      machineName: "tcspjwhsevrzpcd:textField"
    },
    displayChoices: defaultDisplayChoices,
    enableTags: true,
    options: {
      template: "tailwind",
      iconset: "bx"
    }
  }
}`,...(u=(p=n.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,m,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: any) => {
    return <FormEdit {...args} />;
  },
  args: {
    form: {
      type: "form",
      tags: [],
      owner: "5d0797a382461b6656d2c790",
      components: [{
        label: "Text Field",
        labelPosition: "top",
        placeholder: "",
        description: "",
        tooltip: "",
        prefix: "",
        suffix: "",
        widget: {
          type: "input"
        },
        inputMask: "",
        allowMultipleMasks: false,
        customClass: "",
        tabindex: "",
        autocomplete: "",
        hidden: false,
        hideLabel: false,
        showWordCount: false,
        showCharCount: false,
        mask: false,
        autofocus: false,
        spellcheck: true,
        disabled: false,
        tableView: true,
        modalEdit: false,
        multiple: false,
        persistent: true,
        inputFormat: "plain",
        protected: false,
        dbIndex: false,
        case: "",
        encrypted: false,
        redrawOn: "",
        clearOnHide: true,
        customDefaultValue: "",
        calculateValue: "",
        calculateServer: false,
        allowCalculateOverride: false,
        validateOn: "change",
        validate: {
          required: true,
          pattern: "",
          customMessage: "",
          custom: "",
          customPrivate: false,
          json: "",
          minLength: "",
          maxLength: "",
          strictDateValidation: false,
          multiple: false,
          unique: false
        },
        unique: false,
        errorLabel: "",
        key: "textField",
        tags: [],
        properties: {},
        conditional: {
          show: null,
          when: null,
          eq: "",
          json: ""
        },
        customConditional: "",
        logic: [],
        attributes: {},
        overlay: {
          style: "",
          page: "",
          left: "",
          top: "",
          width: "",
          height: ""
        },
        type: "textfield",
        input: true,
        refreshOn: "",
        inputType: "text",
        id: "eqb1o4r",
        defaultValue: ""
      }],
      title: "text-field",
      display: "form",
      access: [{
        roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
        type: "read_all"
      }],
      submissionAccess: [],
      controller: "",
      properties: {},
      settings: {},
      name: "textField",
      path: "textfield",
      machineName: "tcspjwhsevrzpcd:textField"
    },
    displayChoices: defaultDisplayChoices,
    enableTags: false,
    options: {
      template: "tailwind",
      iconset: "bx"
    }
  }
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const R=["Sandbox","WithoutTypeChoices","WithoutTags"];export{t as Sandbox,a as WithoutTags,n as WithoutTypeChoices,R as __namedExportsOrder,N as default};
//# sourceMappingURL=formEdit.stories-9d144a76.js.map
