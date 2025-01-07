import { Meta, StoryObj } from "@storybook/react";

import { iconClass } from "../../../utils/iconClass";
import { FormControl } from "./FormControl";
/**
 * ```tsx
 * import {FormControl} from "@tsed/react-formio/molecules/forms/form-control/FormControl";
 * ```
 */
export default {
  title: "forms/FormControl",
  component: FormControl,
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
    children: {
      control: {
        type: "object"
      }
    }
  },
  parameters: {},
  tags: ["autodocs"]
} satisfies Meta<typeof FormControl>;

type Story = StoryObj<typeof FormControl>;

export const Sandbox: Story = {
  args: {
    label: "Label",
    children: "[TEXTFIELD]"
  }
};

export const Usage: Story = {
  args: {
    label: "Label",
    children: "[TEXTFIELD]",
    prefix: <i className={iconClass(undefined, "calendar")} />
  }
};

export const WithSuffix: Story = {
  args: {
    label: "Label",
    children: "[TEXTFIELD]",
    suffix: <i className={iconClass(undefined, "calendar")} />
  }
};

export const WithDescription: Story = {
  args: {
    label: "Label",
    children: "[TEXTFIELD]"
  }
};
