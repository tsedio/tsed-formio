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
    },
    iconset: {
      control: "select",
      options: ["bx", "lu"]
    },
    spinning: {
      control: "boolean"
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
  render(args) {
    return (
      <div className='flex flex-wrap gap-3'>
        {["text-sm", "text-large", "text-xl", "text-3xl", "text-8xl"].map((className) => (
          <div key={className} className={"flex gap-3 items-end"}>
            <Icon name={args.name} className={className} iconset={args.iconset} spinning={args.spinning} />
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
  render(args) {
    return (
      <div className='flex flex-wrap gap-3'>
        {["text-sm text-red-600", "text-large text-primary", "text-xl text-secondary", "text-3xl text-green-600"].map((className) => (
          <div key={className} className={"flex gap-3 items-end"}>
            <Icon name={args.name} className={className} iconset={args.iconset} spinning={args.spinning} />
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
  render(args) {
    return (
      <div className='flex flex-wrap gap-3'>
        {["text-sm bg-red-600", "text-large bg-primary", "text-xl bg-secondary", "text-3xl bg-green-600"].map((className) => (
          <div key={className} className={"flex gap-3 items-end"}>
            <Icon name={args.name} className={className + " rounded-full text-white p-3"} iconset={args.iconset} spinning={args.spinning} />
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
      <div className='flex flex-col gap-10'>
        <div>
          <h3 className='text-2xl'>
            <a href='https://lucide.dev/icons/'>Lucide</a>
          </h3>
          <span>
            See more{" "}
            <a className='text-blue-800 hover:text-blue-950' href='https://lucide.dev/icons/'>
              here
            </a>
          </span>
        </div>

        <div className='flex flex-wrap gap-3'>
          {Object.entries(Template.templates.tailwind.ICONS["lu"]).map(([icon]) => (
            <div key={icon} className={"flex gap-3 flex-wrap"}>
              <div
                className={"flex flex-col justify-center items-center space-y-3 border-1 border-gray-300 rounded-md"}
                style={{
                  width: "100px",
                  height: "100px"
                }}
              >
                <div>
                  <Icon name={icon} iconset='lu' />
                </div>
                <span className='text-sm'>{icon}</span>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className='text-2xl'>BxIcons</h3>
          <span>
            See more{" "}
            <a className='text-blue-800 hover:text-blue-950' href='https://v2.boxicons.com/'>
              here
            </a>
          </span>
        </div>
        <div className='flex flex-wrap gap-3'>
          {Object.entries(Template.templates.tailwind.ICONS["bx"]).map(([icon]) => (
            <div key={icon} className={"flex gap-3 flex-wrap"}>
              <div
                className={"flex flex-col justify-center items-center space-y-3 border-1 border-gray-300 rounded-md"}
                style={{
                  width: "100px",
                  height: "100px"
                }}
              >
                <div>
                  <Icon name={icon} iconset='bx' />
                </div>
                <span className='text-sm'>{icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};
