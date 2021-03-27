import React from "react";
import { FormsComponent } from "./forms.view";

export default {
  title: "ReactFormioContainer/Forms",
  component: FormsComponent,
  argTypes: {
    data: {
      control: {
        type: "object"
      }
    },
    setParameters: { action: "setParameters" },
    dispatchOperation: { action: "dispatchOperation" }
  },
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <FormsComponent {...args} i18n={(t) => t} />;
};

Sandbox.args = {
  icon: "server",
  className: "border-1 border-gray-light bg-white shadow-lg rounded-sm",
  data: [
    {
      _id: "602967600685b24dbe24e999",
      type: "form",
      tags: ["common", "app"],
      title: "test-form",
      name: "testForm",
      path: "testform",
      modified: "2021-02-14T18:24:07.460Z"
    },
    {
      _id: "6023f8fe4b1a2ab9a3aae096",
      type: "form",
      tags: [],
      title: "text-field",
      name: "textField",
      path: "textfield",
      modified: "2021-02-10T21:38:52.325Z"
    },
    {
      _id: "5d0797bc872fc762a855985d",
      type: "form",
      tags: [],
      title: "User Login",
      name: "userLogin",
      path: "user/login",
      modified: "2020-03-06T13:37:33.032Z"
    },
    {
      _id: "5d64e89603679802b728dd0e",
      type: "form",
      tags: [],
      title: "test",
      name: "test",
      path: "test",
      modified: "2019-09-12T17:44:03.780Z"
    },
    {
      _id: "5d0797bc872fc7fb4b55985e",
      type: "form",
      tags: [],
      title: "User Register",
      name: "userRegister",
      path: "user/register",
      modified: "2019-06-17T13:38:04.747Z"
    }
  ],
  operationsSettings: {
    edit: true,
    submissions: true,
    preview: true,
    delete: true
  }
};
