import React from "react";
import { Form } from "./form.component";
import form from "../__fixtures__/form.fixture.json";

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
      options={{ template: "tailwind", iconset: "bx" }}
    />
  );
};

Sandbox.args = {
  form
};
