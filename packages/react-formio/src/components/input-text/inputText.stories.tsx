import React, { useState } from "react";

import { iconClass } from "../../utils/iconClass";
import { InputText } from "./inputText.component";

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
  title: "ReactFormio/InputText",
  component: InputText,
  argTypes: {
    label: {
      control: {
        type: "text"
      }
    },
    type: {
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
        type: "text"
      }
    },
    size: {
      control: {
        type: "select",
        options: ["sm", "normal"]
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
    },
    description: {
      control: {
        type: "text"
      }
    }
  },
  parameters: {}
};

export const Sandbox = (args: any) => {
  return <InputText {...args} />;
};

Sandbox.args = {
  name: "name",
  label: "Label",
  value: "",
  size: "",
  placeholder: "Placeholder"
};

export const WithPrefix = (args: any) => {
  return <InputText prefix={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
};

WithPrefix.args = {
  label: "Label",
  value: "",
  size: "",
  placeholder: "Placeholder"
};

export const WithSuffix = (args: any) => {
  return <InputText suffix={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
};

WithSuffix.args = {
  label: "Label",
  value: "",
  size: "",
  placeholder: "Placeholder"
};

export const TypeNumber = (args: any) => {
  return <InputText suffix={<i className={iconClass(undefined, "dollar")} />} {...useValue(args)} />;
};

TypeNumber.args = {
  label: "Label",
  type: "number",
  value: "",
  size: "",
  placeholder: "Placeholder",
  description: "Use dollars!"
};

export const Sizing = (args: any) => {
  return <InputText suffix={<i className={iconClass(undefined, "dollar")} />} {...useValue(args)} />;
};

Sizing.args = {
  label: "Label",
  type: "number",
  value: "",
  size: "sm",
  placeholder: "Placeholder",
  description: "Use dollars!"
};
