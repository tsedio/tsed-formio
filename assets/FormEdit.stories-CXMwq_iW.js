import"./Icon-DeTuR5t6.js";import"./Button-DZgHB-e5.js";import"./InputText-BSo90KnD.js";import"./Select-Cpfb-81q.js";import"./HtmlSelect-CE98LSVS.js";import"./ChoicesSelect-BIUuqYj2.js";import"./ReactSelect-B-8Oyi84.js";import"./ChoicesTags-D_Yrr9v9.js";import"./FormBuilder-U2d15M2Z.js";import{F as l,d as a}from"./FormParameters-BAl4zwFo.js";import"./iframe-ADnK4W05.js";import"./cloneDeep-NQvD4-NC.js";import"./isEqual-BA4GAVCi.js";import"./jsx-runtime-C-tXp4WL.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./iconClass-Dz4BhXbm.js";import"./getEventValue-BcWrZMzo.js";import"./FormControl-v5qmNvKW.js";import"./choices-DggMhpyp.js";import"./react-select-animated.esm-DFrGAGWZ.js";import"./index-BKG2T7rz.js";import"./index-Dba2zZrR.js";import"./useI18n-q6VcMDMG.js";import"./preload-helper-D9Z9MdNV.js";const E={title:"form/builder/FormEdit",component:l,argTypes:{form:{control:"object"},typeChoices:{control:"object"},displayChoices:{control:"object"},options:{description:"The form builder options. See [here](https://help.form.io/developers/form-development/form-builder#form-builder-options) for more details.",control:"object"},enableTags:{control:"boolean"},onSubmit:{action:"onSubmit"},onCopy:{action:"onCopy"},onBuilderReady:{description:"A callback function that gets called when the form builder has rendered. It is useful for accessing the underlying @formio/js FormBuilder instance.",action:"onBuilderReady"},onChange:{description:"A callback function that gets called when the form being built has changed.",action:"onChange"},onSaveComponent:{description:"A callback function that gets called when a component is saved in the builder.",action:"onSaveComponent"},onEditComponent:{description:"A callback function that gets called when a component is edited in the builder.",action:"onEditComponent"},onUpdateComponent:{description:"A callback function that gets called when a component is updated in the builder.",action:"onUpdateComponent"},onDeleteComponent:{description:"A callback function that gets called when a component is deleted in the builder.",action:"onDeleteComponent"},layout:{control:"radio",options:["choicesjs","react"]}},parameters:{docs:{description:{component:`Form Edit component to edit form schema using the form builder.

## Usage

\`\`\`tsx
import {FormEdit} from "@tsed/react-formio/organisms/form/builder/all";

or

// register needed components
import "@tsed/react-formio/atoms/icon/Icon";
import "@tsed/react-formio/molecules/button/Button";
import "@tsed/react-formio/molecules/forms/input-text/InputText";
import "@tsed/react-formio/molecules/forms/select/Select";
import "@tsed/react-formio/molecules/forms/select/components/HtmlSelect";
import "@tsed/react-formio/molecules/forms/input-tags/InputTags";
import "@tsed/react-formio/organisms/form/builder/FormParameters";
import "@tsed/react-formio/organisms/form/builder/FormBuilder";
import "@tsed/react-formio/organisms/form/builder/FormEditCtas";

// use FormEdit component
import {FormEdit} from "@tsed/react-formio/organisms/form/builder/FormEdit";
\`\`\`

## Override FormEdit

This component is registered with the name \`FormEdit\` and can be overridden with the following code:

\`\`\`ts
registerComponent("FormEdit", MyFormEditComponent);
registerComponent("FormEditCtas", MyFormEditCtasComponent);
registerComponent("FormBuilder", MyFormBuilderComponent);
registerComponent("FormParameters", MyFormParametersComponent);
\`\`\``}}},args:{options:{template:"tailwind",iconset:"lu",noDefaultSubmitButton:!0}}},e={args:{layout:"react",typeChoices:[{label:"Form",value:"form"},{label:"Resources",value:"resource"}],displayChoices:a,enableTags:!0,form:{type:"form",tags:[],owner:"5d0797a382461b6656d2c790",components:[{label:"Text Field",labelPosition:"top",placeholder:"",description:"",tooltip:"",prefix:"",suffix:"",widget:{type:"input"},inputMask:"",allowMultipleMasks:!1,customClass:"",tabindex:"",autocomplete:"",hidden:!1,hideLabel:!1,showWordCount:!1,showCharCount:!1,mask:!1,autofocus:!1,spellcheck:!0,disabled:!1,tableView:!0,modalEdit:!1,multiple:!1,persistent:!0,inputFormat:"plain",protected:!1,dbIndex:!1,case:"",encrypted:!1,redrawOn:"",clearOnHide:!0,customDefaultValue:"",calculateValue:"",calculateServer:!1,allowCalculateOverride:!1,validateOn:"change",validate:{required:!0,pattern:"",customMessage:"",custom:"",customPrivate:!1,json:"",minLength:"",maxLength:"",strictDateValidation:!1,multiple:!1,unique:!1},unique:!1,errorLabel:"",key:"textField",tags:[],properties:{},conditional:{show:null,when:null,eq:"",json:""},customConditional:"",logic:[],attributes:{},overlay:{style:"",page:"",left:"",top:"",width:"",height:""},type:"textfield",input:!0,refreshOn:"",inputType:"text",id:"eqb1o4r",defaultValue:""}],title:"text-field",display:"form",access:[{roles:["5d0797bc872fc747da559858","5d0797bc872fc71d05559859","5d0797bc872fc7da3b55985a"],type:"read_all"}],submissionAccess:[],controller:"",properties:{},settings:{},name:"textField",path:"textfield",machineName:"tcspjwhsevrzpcd:textField"}}},t={args:{form:{type:"form",tags:[],owner:"5d0797a382461b6656d2c790",components:[{label:"Text Field",labelPosition:"top",placeholder:"",description:"",tooltip:"",prefix:"",suffix:"",widget:{type:"input"},inputMask:"",allowMultipleMasks:!1,customClass:"",tabindex:"",autocomplete:"",hidden:!1,hideLabel:!1,showWordCount:!1,showCharCount:!1,mask:!1,autofocus:!1,spellcheck:!0,disabled:!1,tableView:!0,modalEdit:!1,multiple:!1,persistent:!0,inputFormat:"plain",protected:!1,dbIndex:!1,case:"",encrypted:!1,redrawOn:"",clearOnHide:!0,customDefaultValue:"",calculateValue:"",calculateServer:!1,allowCalculateOverride:!1,validateOn:"change",validate:{required:!0,pattern:"",customMessage:"",custom:"",customPrivate:!1,json:"",minLength:"",maxLength:"",strictDateValidation:!1,multiple:!1,unique:!1},unique:!1,errorLabel:"",key:"textField",tags:[],properties:{},conditional:{show:null,when:null,eq:"",json:""},customConditional:"",logic:[],attributes:{},overlay:{style:"",page:"",left:"",top:"",width:"",height:""},type:"textfield",input:!0,refreshOn:"",inputType:"text",id:"eqb1o4r",defaultValue:""}],title:"text-field",display:"form",access:[{roles:["5d0797bc872fc747da559858","5d0797bc872fc71d05559859","5d0797bc872fc7da3b55985a"],type:"read_all"}],submissionAccess:[],controller:"",properties:{},settings:{},name:"textField",path:"textfield",machineName:"tcspjwhsevrzpcd:textField"},displayChoices:a,enableTags:!0}},n={args:{form:{type:"form",tags:[],owner:"5d0797a382461b6656d2c790",components:[{label:"Text Field",labelPosition:"top",placeholder:"",description:"",tooltip:"",prefix:"",suffix:"",widget:{type:"input"},inputMask:"",allowMultipleMasks:!1,customClass:"",tabindex:"",autocomplete:"",hidden:!1,hideLabel:!1,showWordCount:!1,showCharCount:!1,mask:!1,autofocus:!1,spellcheck:!0,disabled:!1,tableView:!0,modalEdit:!1,multiple:!1,persistent:!0,inputFormat:"plain",protected:!1,dbIndex:!1,case:"",encrypted:!1,redrawOn:"",clearOnHide:!0,customDefaultValue:"",calculateValue:"",calculateServer:!1,allowCalculateOverride:!1,validateOn:"change",validate:{required:!0,pattern:"",customMessage:"",custom:"",customPrivate:!1,json:"",minLength:"",maxLength:"",strictDateValidation:!1,multiple:!1,unique:!1},unique:!1,errorLabel:"",key:"textField",tags:[],properties:{},conditional:{show:null,when:null,eq:"",json:""},customConditional:"",logic:[],attributes:{},overlay:{style:"",page:"",left:"",top:"",width:"",height:""},type:"textfield",input:!0,refreshOn:"",inputType:"text",id:"eqb1o4r",defaultValue:""}],title:"text-field",display:"form",access:[{roles:["5d0797bc872fc747da559858","5d0797bc872fc71d05559859","5d0797bc872fc7da3b55985a"],type:"read_all"}],submissionAccess:[],controller:"",properties:{},settings:{},name:"textField",path:"textfield",machineName:"tcspjwhsevrzpcd:textField"},displayChoices:a,enableTags:!1}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "react",
    typeChoices: [{
      label: "Form",
      value: "form"
    }, {
      label: "Resources",
      value: "resource"
    }],
    displayChoices: defaultDisplayChoices,
    enableTags: true,
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
    } as any
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
    } as any,
    displayChoices: defaultDisplayChoices,
    enableTags: true
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    } as any,
    displayChoices: defaultDisplayChoices,
    enableTags: false
  }
}`,...n.parameters?.docs?.source}}};const j=["EditWebForm","WithoutTypeChoices","WithoutTags"];export{e as EditWebForm,n as WithoutTags,t as WithoutTypeChoices,j as __namedExportsOrder,E as default};
