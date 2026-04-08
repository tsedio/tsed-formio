import{F as c}from"./FormAccess-Dt5u6FR2.js";import"./jsx-runtime-C-tXp4WL.js";import"./iframe-ADnK4W05.js";import"./preload-helper-D9Z9MdNV.js";import"./Card-CnJYWz42.js";import"./clsx-B-dksMZM.js";import"./components-B7KBuUpW.js";import"./Form-QIPqDFqI.js";import"./cloneDeep-NQvD4-NC.js";import"./isEqual-BA4GAVCi.js";import"./noop-Bp4XPVft.js";const{expect:a,fn:i,userEvent:n,within:r}=__STORYBOOK_MODULE_TEST__,h={title:"form/access/FormAccess",component:c,argTypes:{onSubmit:{action:"onSubmit"}},parameters:{docs:{source:{type:"code"},description:{component:'```tsx\nimport {FormAccess} from "@tsed/react-formio/organisms/form-access/FormAccess";\n```'}}}},e={play:async({canvasElement:s,args:o})=>{const t=(await r(s).getAllByRole("button",{name:/Save access/i}))[0];a(t).toBeInTheDocument(),await n.click(t),a(o.onSubmit).toHaveBeenCalled()},args:{onSubmit:i(),form:{_id:"6023f8fe4b1a2ab9a3aae096",type:"form",tags:[],owner:"5d0797a382461b6656d2c790",access:[{roles:["5d0797bc872fc747da559858","5d0797bc872fc71d05559859","5d0797bc872fc7da3b55985a"],type:"read_all"}],submissionAccess:[{roles:["5d0797bc872fc747da559858"],type:"read_all"}],controller:"",properties:{},settings:{hideTitle:!1},name:"textField",path:"textfield",machineName:"tcspjwhsevrzpcd:textField"},roles:[{title:"Administrator",_id:"5d0797bc872fc747da559858"},{title:"Authenticated",_id:"5d0797bc872fc71d05559859"},{title:"Anonymous",_id:"5d0797bc872fc7da3b55985a"}],options:{template:"tailwind",iconset:"lu"}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);

    // Vérifiez que le bouton "Save access" est présent
    const saveButtons = await canvas.getAllByRole("button", {
      name: /Save access/i
    });
    const saveButton = saveButtons[0];
    expect(saveButton).toBeInTheDocument();

    // Simulez un clic sur le bouton "Save access"
    await userEvent.click(saveButton);

    // Vérifiez que l'action onSubmit a été appelée
    expect(args.onSubmit).toHaveBeenCalled();
  },
  args: {
    onSubmit: fn(),
    form: {
      _id: "6023f8fe4b1a2ab9a3aae096",
      type: "form",
      tags: [],
      owner: "5d0797a382461b6656d2c790",
      access: [{
        roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
        type: "read_all"
      }],
      submissionAccess: [{
        roles: ["5d0797bc872fc747da559858"],
        type: "read_all"
      }],
      controller: "",
      properties: {},
      settings: {
        hideTitle: false
      },
      name: "textField",
      path: "textfield",
      machineName: "tcspjwhsevrzpcd:textField"
    },
    roles: [{
      title: "Administrator",
      _id: "5d0797bc872fc747da559858"
    }, {
      title: "Authenticated",
      _id: "5d0797bc872fc71d05559859"
    }, {
      title: "Anonymous",
      _id: "5d0797bc872fc7da3b55985a"
    }],
    options: {
      template: "tailwind",
      iconset: "lu"
    }
  }
}`,...e.parameters?.docs?.source}}};const x=["Sandbox"];export{e as Sandbox,x as __namedExportsOrder,h as default};
