import { Meta, StoryObj } from "@storybook/react";

import { iconClass } from "../../../utils/iconClass";
import { useValue } from "../../__fixtures__/useValue.hook";
import { Select } from "./Select";

const choices = [
  { label: "label1", value: "value1" },
  { label: "label2", value: "value2" }
];

/**
 * Select components are used for collecting user provided information from a list of options.
 *
 * ```tsx
 * import {Select} from "@tsed/react-formio/molecules/forms/select/Select";
 * ```
 */
export default {
  title: "forms/Select",
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
  parameters: {},
  render(args: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <Select {...useValue(args)} />;
  },
  tags: ["autodocs"]
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;
/**
 * Basic select component using HTML5 syntax.
 */
export const Usage: Story = {
  args: {
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    choices
  }
};
/**
 * Use Choice.js to render the Select component.
 */
export const Choicesjs: Story = {
  args: {
    label: "Label",
    value: "",
    size: "",
    layout: "choicesjs",
    placeholder: "Placeholder",
    choices
  }
};

export const ChoicesjsPrefix: Story = {
  args: {
    prefix: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    name: "name",
    value: "",
    size: "",
    layout: "choicesjs",
    placeholder: "Placeholder",
    choices
  }
};

export const WithPrefix: Story = {
  args: {
    prefix: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    choices
  }
};

export const WithSuffix: Story = {
  args: {
    suffix: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    choices
  }
};

export const TypeMultiple: Story = {
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    multiple: true,
    placeholder: "Placeholder",
    description: "Select multiple values",
    choices
  }
};

export const ChoicesjsMultiple: Story = {
  args: {
    label: "Label",
    value: [],
    size: "",
    multiple: true,
    layout: "choicesjs",
    placeholder: "Placeholder",
    choices
  }
};

export const Sizing: Story = {
  args: {
    suffix: <i className={iconClass(undefined, "dollar")} />,
    label: "Label",
    value: "",
    size: "sm",
    placeholder: "Placeholder",
    description: "Use dollars!",
    choices
  }
};
