import { Meta, StoryObj } from "@storybook/react";

import { Icon } from "../../atoms/icon/Icon";
import { Button, BUTTON_VARIANTS } from "./Button";

/**
 * Button component with a label and an onClick handler.
 *
 * ```ts
 * import {Button} from "@tsed/react-formio/molecules/button/Button";
 * ```
 *
 * ## Override Button
 *
 * This component is registered with the name `Button` and can be overridden with the following code:
 *
 * ```ts
 * registerComponent("Button", MyCustomButtonComponent);
 * ```
 */
export default {
  title: "Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "select",
      options: BUTTON_VARIANTS
    },
    disabled: {
      control: "boolean"
    }
  },
  parameters: {
    children: "Text",
    variant: "primary"
  }
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Usage: Story = {
  args: {
    children: "Text",
    variant: "primary"
  }
};

export const Variant: Story = {
  args: {
    children: "Text"
  },
  render(args) {
    return (
      <div className='flex flex-wrap gap-3'>
        {BUTTON_VARIANTS.map((variant) => (
          <div key={variant}>
            <Button {...args} variant={variant as any}>
              {variant}
            </Button>
          </div>
        ))}
      </div>
    );
  }
};

export const Disabled: Story = {
  args: {
    children: "Text",
    disabled: true
  },
  render(args) {
    return (
      <div className='flex flex-wrap gap-3'>
        {BUTTON_VARIANTS.map((variant) => (
          <div key={variant}>
            <Button {...args} variant={variant as any}>
              {variant}
            </Button>
          </div>
        ))}
      </div>
    );
  }
};

export const WithIcon: Story = {
  args: {
    children: "Text"
  },
  render(args) {
    return (
      <div className='flex flex-wrap gap-3'>
        {BUTTON_VARIANTS.map((variant) => (
          <div key={variant}>
            <Button {...args} variant={variant as any}>
              <Icon name='save' />
              {variant}
            </Button>
          </div>
        ))}
      </div>
    );
  }
};
