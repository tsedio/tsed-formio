import React from "react";
import { FormAccess } from "./formAccess.component";

export default {
  title: "ReactFormio/FormAccess",
  component: FormAccess,
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

export const Sandbox = (args) => {
  return <FormAccess {...args} />;
};

Sandbox.args = {
  form: {
    _id: "6023f8fe4b1a2ab9a3aae096",
    type: "form",
    tags: [],
    owner: "5d0797a382461b6656d2c790",
    access: [
      {
        roles: [
          "5d0797bc872fc747da559858",
          "5d0797bc872fc71d05559859",
          "5d0797bc872fc7da3b55985a"
        ],
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
  },
  roles: [
    {
      title: "Administrator",
      _id: "5d0797bc872fc747da559858"
    },
    { title: "Authenticated", _id: "5d0797bc872fc71d05559859" },
    { title: "Anonymous", _id: "5d0797bc872fc7da3b55985a" }
  ],
  options: { template: "tailwind", iconset: "bx" }
};
