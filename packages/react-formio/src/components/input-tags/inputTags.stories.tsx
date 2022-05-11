import { useState } from "react";
import { iconClass } from "../../utils/iconClass";
import { InputTags } from "./inputTags.component";

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
  title: "ReactFormio/InputTags",
  component: InputTags,
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
        type: "object"
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
  return <InputTags {...args} />;
};

Sandbox.args = {
  name: "name",
  label: "Label",
  value: ["test"],
  size: "",
  placeholder: "Placeholder"
};

export const WithPrefix = (args: any) => {
  return (
    <InputTags
      prefix={<i className={iconClass(undefined, "calendar")} />}
      {...useValue(args)}
    />
  );
};

WithPrefix.args = {
  label: "Label",
  value: [],
  name: "name",
  size: "",
  placeholder: "Placeholder"
};

export const WithSuffix = (args: any) => {
  return (
    <InputTags
      suffix={<i className={iconClass(undefined, "calendar")} />}
      {...useValue(args)}
    />
  );
};

WithSuffix.args = {
  label: "Label",
  value: [],
  name: "name",
  size: "",
  placeholder: "Placeholder"
};
