import React from "react";
import { Form } from "./form.component";
import form from "../__fixtures__/form.fixture.json";

export default {
  title: "ReactFormio/Form",
  component: Form,
  argTypes: {
    onSubmit: { action: "onSubmit" },
    form: {
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
  parameters: {}
};

export const Sandbox = (args: any) => {
  return (
    <Form
      {...args}
      form={args.form}
      options={{ template: "tailwind", iconset: "bx" }}
    />
  );
};

Sandbox.args = {
  form
};
