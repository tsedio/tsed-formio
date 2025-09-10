import { Meta, StoryObj } from "@storybook/react-vite";
import Template from "@tsed/tailwind-formio";

import { Icon } from "./Icon";

/**
 * Icon component to display icons based on [BxIcons](https://boxicons.com/).
 *
 * ## Usage
 *
 * ```ts
 * import {Icon} from "@tsed/react-formio/atoms/icon/Icon";
 * ```
 *
 * ## Override Icon
 *
 * This component is registered with the name `Icon` and can be overridden with the following code:
 *
 * ```ts
 * registerComponent("Icon", MyIconComponent);
 * ```
 */
export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    name: {
      control: "text"
    }
  },
  parameters: {
    children: "Text",
    variant: "primary"
  }
} satisfies Meta<typeof Icon>;

type Story = StoryObj<typeof Icon>;

export const Usage: Story = {
  args: {
    name: "save"
  }
};

export const Size: Story = {
  args: {
    name: "save"
  },
  render() {
    return (
      <div className='flex flex-wrap gap-3'>
        {["text-sm", "text-large", "text-xl", "text-3xl", "text-8xl"].map((className) => (
          <div key={className} className={"flex gap-3 items-end"}>
            <Icon name='save' className={className} />
          </div>
        ))}
      </div>
    );
  }
};

export const Colors: Story = {
  args: {
    name: "save"
  },
  render() {
    return (
      <div className='flex flex-wrap gap-3'>
        {["text-sm text-red-600", "text-large text-primary", "text-xl text-secondary", "text-3xl text-green-600"].map((className) => (
          <div key={className} className={"flex gap-3 items-end"}>
            <Icon name='save' className={className} />
          </div>
        ))}
      </div>
    );
  }
};

export const Rounded: Story = {
  args: {
    name: "save"
  },
  render() {
    return (
      <div className='flex flex-wrap gap-3'>
        {["text-sm bg-red-600", "text-large bg-primary", "text-xl bg-secondary", "text-3xl bg-green-600"].map((className) => (
          <div key={className} className={"flex gap-3 items-end"}>
            <Icon name='save' className={className + " rounded-full text-white p-3"} />
          </div>
        ))}
      </div>
    );
  }
};
/**
 * Formio needs theses icons to be displayed in the form builder and other places.
 */
export const PresetsForFormio: Story = {
  args: {
    name: "save"
  },
  render() {
    return (
      <div className='flex flex-wrap gap-3'>
        {Object.entries(Template.templates.tailwind.ICONS).map(([icon]) => (
          <div key={icon} className={"flex gap-3 flex-wrap"}>
            <div
              className={"flex flex-col justify-center items-center space-y-3 border-1 border-gray-300 rounded-md"}
              style={{
                width: "100px",
                height: "100px"
              }}
            >
              <div>
                <Icon name={icon} />
              </div>
              <span className='text-sm'>{icon}</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
};
