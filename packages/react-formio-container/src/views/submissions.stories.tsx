import React from "react";
import { SubmissionsComponent } from "./submissions.view";
import formSchema from "../__fixtures__/form-schema.json";
import formSubmissions from "../__fixtures__/form-submissions.json";

export default {
  title: "ReactFormioContainer/Submisssions",
  component: SubmissionsComponent,
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
  return <SubmissionsComponent {...args} i18n={(t) => t} />;
};

Sandbox.args = {
  form: formSchema,
  data: formSubmissions
};
