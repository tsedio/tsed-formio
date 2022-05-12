import React, { useState } from "react";
import { iconClass } from "../../utils/iconClass";
import { Select } from "./select.component";

const choices = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" }
];

const useValue = (args: any) => {
  const [value, setValue] = useState(args.value);

  return {
    ...args,
    value,
    onChange(name: string, value: any) {
      setValue(value);
      args.onChange(name, value);
    }
  };
};

export default {
  title: "ReactFormio/Select",
  component: Select,
  argTypes: {
    label: {
      control: {
        type: "text"
      }
    },
    name: {
      control: {
        type: "text"
      }
    },
    value: {
      control: {
        type: "select",
        options: choices
      }
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "normal"]
      }
    },
    layout: {
      control: {
        type: "select",
        options: ["html5", "choicesjs"]
      }
    },
    placeholder: {
      control: {
        type: "text"
      }
    },
    choices: {
      control: {
        type: "object"
      }
    }
  },
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <Select {...useValue(args)} />;
};

Sandbox.args = {
  label: "Label",
  value: "",
  size: "",
  placeholder: "Placeholder",
  choices
};

export const Choicesjs = (args: any) => {
  return <Select {...useValue(args)} />;
};

Choicesjs.args = {
  label: "Label",
  value: "",
  size: "",
  layout: "choicesjs",
  placeholder: "Placeholder",
  choices
};

export const ChoicesjsPrefix = (args: any) => {
  return <Select prefix={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
};

ChoicesjsPrefix.args = {
  label: "Label",
  name: "name",
  value: "",
  size: "",
  layout: "choicesjs",
  placeholder: "Placeholder",
  choices
};

export const WithPrefix = (args: any) => {
  return <Select prefix={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
};

WithPrefix.args = {
  label: "Label",
  value: "",
  size: "",
  placeholder: "Placeholder",
  choices
};

export const WithSuffix = (args: any) => {
  return <Select suffix={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
};

WithSuffix.args = {
  label: "Label",
  value: "",
  size: "",
  placeholder: "Placeholder",
  choices
};

export const TypeMultiple = (args: any) => {
  return <Select {...useValue(args)} />;
};

TypeMultiple.args = {
  label: "Label",
  name: "name",
  value: [],
  size: "",
  multiple: true,
  placeholder: "Placeholder",
  description: "Select multiple values",
  choices
};

export const ChoicesjsMultiple = (args: any) => {
  return <Select {...useValue(args)} />;
};

ChoicesjsMultiple.args = {
  label: "Label",
  value: [],
  size: "",
  multiple: true,
  layout: "choicesjs",
  placeholder: "Placeholder",
  choices
};

export const Sizing = (args: any) => {
  return <Select suffix={<i className={iconClass(undefined, "dollar")} />} {...useValue(args)} />;
};

Sizing.args = {
  label: "Label",
  value: "",
  size: "sm",
  placeholder: "Placeholder",
  description: "Use dollars!",
  choices
};
