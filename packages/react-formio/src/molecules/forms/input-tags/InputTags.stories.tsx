import type { Meta, StoryObj } from "@storybook/react";

import { iconClass } from "../../../utils/iconClass";
import { useValue } from "../../__fixtures__/useValue.hook";
import { InputTags } from "./InputTags";

/**
 * ```tsx
 * import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/InputTags";
 * ```
 */
export default {
  title: "forms/InputTags",
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
  parameters: {},
  tags: ["autodocs"]
} satisfies Meta<typeof InputTags>;

type Story = StoryObj<typeof InputTags>;

export const Usage: Story = {
  args: {
    name: "name",
    label: "Label",
    value: ["test"],
    size: "",
    placeholder: "Placeholder"
  }
};

export const WithPrefix: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <InputTags prefix={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
  },
  args: {
    label: "Label",
    value: [],
    name: "name",
    size: "",
    placeholder: "Placeholder"
  }
};

export const WithSuffix: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <InputTags suffix={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
  },
  args: {
    label: "Label",
    value: [],
    name: "name",
    size: "",
    placeholder: "Placeholder"
  }
};
