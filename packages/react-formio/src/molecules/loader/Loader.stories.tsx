import type { Meta, StoryObj } from "@storybook/react-vite";
import tailwind from "@tsed/tailwind-formio";

import { Loader } from "./Loader";

/**
 * Component to display loader
 *
 * ```tsx
 * import {Loader} from "@tsed/react-formio/molecules/loader/Loader";
 * ```
 */
export default {
  title: "Loader",
  component: Loader,
  argTypes: {
    isActive: {
      control: "boolean"
    },
    color: {
      control: "text"
    },
    icon: {
      control: "select",
      options: Object.keys(tailwind.templates.tailwind.ICONS)
    },
    className: {
      control: "text"
    }
  },
  parameters: {},
  tags: ["autodocs"]
} satisfies Meta<typeof Loader>;

type Story = StoryObj<typeof Loader>;

export const Usage: Story = {
  args: {
    icon: "radio-circle",
    color: "text-blue",
    isActive: true
  }
};
