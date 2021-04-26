import { FormSchema } from "../../interfaces";

export function getFormSettingsSchema(): FormSchema {
  return {
    type: "form",
    tags: [],
    components: [
      {
        input: true,
        key: "action",
        placeholder: "Enter the custom submission URL",
        label: "Custom Action Url",
        labelPosition: "top",
        widget: { type: "input" },
        type: "url",
        mask: false,
        inputType: "url",
        inputFormat: "plain",
        spellcheck: true,
        id: "efyrzea",
        attributes: {
          "data-testid": "action"
        }
      },
      {
        input: true,
        key: "tags",
        placeholder: "Add tags",
        label: "Form tags",
        widget: { type: "input" },
        type: "tags",
        delimeter: ",",
        storeas: "array",
        maxTags: 0,
        id: "erxcyw"
      },
      {
        input: true,
        key: "properties",
        label: "Custom Properties",
        labelPosition: "top",
        type: "datamap",
        addAnother: "Add Another",
        disableAddingRemovingRows: false,
        keyBeforeValue: true,
        valueComponent: {
          type: "textfield",
          key: "value",
          label: "Value",
          input: true,
          hideLabel: true
        },
        id: "ezne35"
      }
    ],
    display: "form"
  };
}
