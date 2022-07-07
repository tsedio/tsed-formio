import React from "react";
import {Form} from "./form.component";
import form from "../__fixtures__/form.fixture.json";
import {Submission} from "../../interfaces";

export default {
  title: "ReactFormio/Form",
  component: Form,
  argTypes: {
    form: {
      control: {
        type: "object"
      }
    }
  },
  parameters: {}
};

export const Sandbox = (args: any) => {
  delete args.onRender;
  delete args.onComponentChange;
  return (
    <Form
      {...args}
      form={args.form}
      onFormReady={(formio) => {
        console.log("ready", formio);
      }}
      options={{template: "tailwind", iconset: "bx"}}
    />
  );
};

Sandbox.args = {
  form
};

export const TriggerError = (args: any) => {
  delete args.onRender;
  delete args.onComponentChange;

  return (
    <Form
      {...args}
      form={args.form}
      onAsyncSubmit={(submission: Submission) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            reject(new Error("server error"));
          }, 500);
        }).catch((error) => {
          error.errors = {
            "message": "My custom message about this field",
            "type": "custom",
            "path": ["firstName"],
            "level": "error"
          }
          throw error
        });
      }}
      options={{
        hooks: {
          template: "tailwind",
          iconset: "bx"
        }
      }}
    />
  );
};

TriggerError.args = {
  form: {
    "type": "form",
    "display": "form",
    "tags": [],
    "components": [
      {
        "label": "First name",
        "widget": {
          "type": "input"
        },
        "errorLabel": "",
        "key": "firstName",
        "inputType": "text",
        "type": "textfield",
        "id": "eqb1o4r",
        "defaultValue": ""
      },
      {
        "label": "Submit",
        "showValidations": false,
        "tableView": false,
        "key": "submit",
        "type": "button",
        "input": true
      }
    ]
  }
};
