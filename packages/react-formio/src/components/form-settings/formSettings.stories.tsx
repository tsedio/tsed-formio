import { FormSettings } from "./formSettings.component";

export default {
  title: "@tsed/react-formio/FormSettings",
  component: FormSettings,
  argTypes: {
    onSubmit: { action: "onSubmit" },
    actionInfo: {
      control: {
        type: "object"
      }
    },
    options: {
      control: {
        type: "object"
      }
    }
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
};

export const Sandbox = (args: any) => {
  // @ts-ignore
  return <FormSettings {...args} />;
};

Sandbox.args = {
  form: {
    _id: "6023f8fe4b1a2ab9a3aae096",
    type: "form",
    tags: [],
    owner: "5d0797a382461b6656d2c790",
    access: [
      {
        roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
        type: "read_all"
      }
    ],
    submissionAccess: [
      {
        roles: ["5d0797bc872fc747da559858"],
        type: "read_all"
      }
    ],
    controller: "",
    properties: {},
    settings: {},
    name: "textField",
    path: "textfield",
    machineName: "tcspjwhsevrzpcd:textField"
  },
  options: { template: "tailwind", iconset: "bx" }
};
