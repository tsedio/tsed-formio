import { defaultDisplayChoices, FormEdit } from "@tsed/react-formio";

const opts: any = {
  typeChoices: [
    { label: "Form", value: "form" },
    { label: "Resources", value: "resource" }
  ],
  displayChoices: defaultDisplayChoices,
  enableTags: true,
  // options: { template: "tailwind", iconset: "bx" },
  form: {
    type: "form",
    tags: [],
    owner: "5d0797a382461b6656d2c790",
    components: [
      {
        label: "Text Field",
        labelPosition: "top",
        placeholder: "",
        description: "",
        tooltip: "",
        prefix: "",
        suffix: "",
        widget: { type: "input" },
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
        conditional: { show: null, when: null, eq: "", json: "" },
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
      }
    ],
    title: "text-field",
    display: "form",
    access: [
      {
        roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
        type: "read_all"
      }
    ],
    submissionAccess: [],
    controller: "",
    properties: {},
    settings: {},
    name: "textField",
    path: "textfield",
    machineName: "tcspjwhsevrzpcd:textField"
  }
};

function App() {
  return (
    <div className='p-8'>
      <FormEdit {...opts} />
    </div>
  );
}

export default App;
