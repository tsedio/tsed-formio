import { Meta, StoryObj } from "@storybook/react-vite";

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
      control: "text"
    },
    name: {
      control: "text"
    },
    children: {
      control: "object"
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
    before: <i className={iconClass(undefined, "calendar")} />
  }
};

export const AppendAfter: Story = {
  args: {
    label: "Label",
    children: "[TEXTFIELD]",
    after: <i className={iconClass(undefined, "calendar")} />
  }
};

export const WithDescription: Story = {
  args: {
    label: "Label",
    children: "[TEXTFIELD]"
  }
};
