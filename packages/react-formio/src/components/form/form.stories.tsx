import React, { useState } from "react";

import { Submission } from "../../interfaces";
import form from "../__fixtures__/form.fixture.json";
import { Form } from "./form.component";

export default {
  title: "ReactFormio/Form",
  component: Form,
  argTypes: {
    form: {
      control: {
        type: "object"
      }
    },
    onPrevPage: { action: "onPrevPage" },
    onNextPage: { action: "onNextPage" },
    onCancel: { action: "onCancel" },
    onChange: { action: "onChange" },
    onCustomEvent: { action: "onCustomEvent" },
    onComponentChange: { action: "onComponentChange" },
    onSubmit: { action: "onSubmit" },
    onAsyncSubmit: { action: "onAsyncSubmit" },
    onSubmitDone: { action: "onSubmitDone" },
    onFormLoad: { action: "onFormLoad" },
    onError: { action: "onError" },
    onRender: { action: "onRender" },
    onAttach: { action: "onAttach" },
    onBuild: { action: "onBuild" },
    onFocus: { action: "onFocus" },
    onBlur: { action: "onBlur" },
    onInitialized: { action: "onInitialized" },
    onFormReady: { action: "onFormReady" }
  }
};

function filter(args: any[]) {
  return args.map((item) => {
    if (item && item._form) {
      return "FormioInstance";
    }

    if (item && item.component) {
      return ["Component", item.component.type, item.component.key].filter(Boolean).join(":");
    }

    if (item && item.changed) {
      return `${item.changed.component.key}(${item.changed.value})`;
    }

    return item;
  });
}

function wrap(args: any) {
  return {
    ...args,
    onPrevPage: (...list: any[]) => {
      return args.onPrevPage(...filter(list));
    },
    onNextPage: (...list: any[]) => {
      return args.onNextPage(...filter(list));
    },
    onCancel: (...list: any[]) => {
      return args.onCancel(...filter(list));
    },
    onChange: (...list: any[]) => {
      return args.onChange(...filter(list));
    },
    onCustomEvent: (...list: any[]) => {
      return args.onCustomEvent(...filter(list));
    },
    onComponentChange: (...list: any[]) => {
      return args.onComponentChange(...filter(list));
    },
    onSubmit: (...list: any[]) => {
      return args.onSubmit(...filter(list));
    },
    onAsyncSubmit: (...list: any[]) => {
      return args.onAsyncSubmit(...filter(list));
    },
    onSubmitDone: (...list: any[]) => {
      return args.onSubmitDone(...filter(list));
    },
    onFormLoad: (...list: any[]) => {
      return args.onFormLoad(...filter(list));
    },
    onError: (...list: any[]) => {
      return args.onError(...filter(list));
    },
    onRender: (...list: any[]) => {
      return args.onRender(...filter(list));
    },
    onAttach: (...list: any[]) => {
      return args.onAttach(...filter(list));
    },
    onBuild: (...list: any[]) => {
      return args.onBuild(...filter(list));
    },
    onFocus: (...list: any[]) => {
      return args.onFocus(...filter(list));
    },
    onBlur: (...list: any[]) => {
      return args.onBlur(...filter(list));
    },
    onInitialized: (...list: any[]) => {
      return args.onInitialized(...filter(list));
    },
    onFormReady: (...list: any[]) => {
      return args.onFormReady(...filter(list));
    }
  };
}

export const Sandbox = (args: any) => {
  return <Form {...wrap(args)} form={args.form} options={{ template: "tailwind", iconset: "bx" }} />;
};

Sandbox.args = {
  form
};

export const TriggerError = (args: any) => {
  const onAsyncSubmit = (submission: Submission) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(new Error("server error"));
      }, 500);
    }).catch((error) => {
      error.errors = {
        message: "My custom message about this field",
        type: "custom",
        path: ["firstName"],
        level: "error"
      };
      throw error;
    });
  };

  return <Form<any> {...wrap(args)} form={args.form} onAsyncSubmit={onAsyncSubmit} />;
};

TriggerError.args = {
  form: {
    type: "form",
    display: "form",
    tags: [],
    components: [
      {
        label: "First name",
        widget: {
          type: "input"
        },
        errorLabel: "",
        key: "firstName",
        inputType: "text",
        type: "textfield",
        id: "eqb1o4r",
        defaultValue: ""
      },
      {
        label: "Submit",
        showValidations: false,
        tableView: false,
        key: "submit",
        type: "button",
        input: true
      }
    ]
  }
};

export const ReadOnly = (args: any) => {
  return (
    <Form
      {...wrap(args)}
      options={{ template: "tailwind", iconset: "bx", readOnly: args.readOnly }}
      form={args.form}
      submission={{
        data: {
          editGrid: [{ currency: "EUR" }]
        }
      }}
    />
  );
};

ReadOnly.args = {
  readonly: true,
  form
};

export const OnChange = (args: any) => {
  const [data, setForm] = useState<any>(() => {});
  const props = wrap(args);

  return (
    <Form
      {...props}
      options={{ template: "tailwind", iconset: "bx", readOnly: args.readOnly }}
      form={args.form}
      submission={{ data }}
      onChange={(changedSubmission) => {
        setForm(changedSubmission.data);
      }}
    />
  );
};

OnChange.args = {
  form: {
    type: "form",
    display: "form",
    tags: [],
    components: [
      {
        label: "First name",
        widget: {
          type: "input"
        },
        errorLabel: "",
        key: "firstName",
        inputType: "text",
        type: "textfield",
        id: "eqb1o4r",
        defaultValue: "",
        validate: {
          required: true
        }
      },
      {
        label: "Last name",
        widget: {
          type: "input"
        },
        errorLabel: "",
        key: "lastName",
        inputType: "text",
        type: "textfield",
        id: "eqb1o4r",
        defaultValue: "",
        validate: {
          required: true
        }
      }
    ]
  }
};
