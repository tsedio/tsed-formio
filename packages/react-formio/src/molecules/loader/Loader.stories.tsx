import type { Meta, StoryObj } from "@storybook/react";
import tailwind from "@tsed/tailwind-formio";

import { Loader } from "./Loader";
console.log(Object.keys(tailwind.templates.tailwind.ICONS));
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
      control: {
        type: "boolean"
      }
    },
    color: {
      control: {
        type: "text"
      }
    },
    icon: {
      control: {
        type: "select",
        options: Object.keys(tailwind.templates.tailwind.ICONS)
      }
    },
    className: {
      control: {
        type: "text"
      }
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
