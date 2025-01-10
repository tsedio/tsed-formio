import { Meta, StoryObj } from "@storybook/react";

import { FormEdit } from "./FormEdit";
import { defaultDisplayChoices } from "./FormParameters";

/**
 *
 * ```tsx
 * import {FormEdit} from "@tsed/react-formio/organisms/form/builder/FormEdit";
 * ```
 */
export default {
  title: "form/builder/FormEdit",
  component: FormEdit,
  argTypes: {
    form: {
      control: {
        type: "object"
      }
    },
    typeChoices: {
      control: {
        type: "object"
      }
    },
    displayChoices: {
      control: {
        type: "object"
      }
    },
    options: {
      description:
        "The form builder options. See [here](https://help.form.io/developers/form-development/form-builder#form-builder-options) for more details.",
      control: {
        type: "object"
      }
    },
    enableTags: {
      control: {
        type: "boolean"
      }
    },
    onSubmit: { action: "onSubmit" },
    onCopy: { action: "onCopy" },
    onBuilderReady: {
      description:
        "A callback function that gets called when the form builder has rendered. It is useful for accessing the underlying @formio/js FormBuilder instance.",
      action: "onBuilderReady"
    },
    onChange: {
      description: "A callback function that gets called when the form being built has changed.",
      action: "onChange"
    },
    onSaveComponent: {
      description: "A callback function that gets called when a component is saved in the builder.",
      action: "onSaveComponent"
    },
    onEditComponent: {
      description: "A callback function that gets called when a component is edited in the builder.",
      action: "onEditComponent"
    },
    onUpdateComponent: {
      description: "A callback function that gets called when a component is updated in the builder.",
      action: "onUpdateComponent"
    },
    onDeleteComponent: {
      description: "A callback function that gets called when a component is deleted in the builder.",
      action: "onDeleteComponent"
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
} satisfies Meta<typeof FormEdit>;

type Story = StoryObj<typeof FormEdit>;

export const EditWebForm: Story = {
  args: {
    typeChoices: [
      { label: "Form", value: "form" },
      { label: "Resources", value: "resource" }
    ],
    displayChoices: defaultDisplayChoices,
    enableTags: true,
    options: { template: "tailwind", iconset: "bx" },
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
    } as any
  }
};

export const WithoutTypeChoices: Story = {
  args: {
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
    } as any,
    displayChoices: defaultDisplayChoices,
    enableTags: true,
    options: { template: "tailwind", iconset: "bx" }
  }
};

export const WithoutTags: Story = {
  args: {
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
    } as any,
    displayChoices: defaultDisplayChoices,
    enableTags: false,
    options: { template: "tailwind", iconset: "bx" }
  }
};
