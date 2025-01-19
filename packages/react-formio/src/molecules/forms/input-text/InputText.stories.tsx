import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";

import { iconClass } from "../../../utils/iconClass";
import { useValue } from "../../__fixtures__/useValue.hook";
import { InputText } from "./InputText";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
/**
 * Text Fields let users enter and edit text.
 *
 * ```tsx
 * import {InputTags} from "@tsed/react-formio/molecules/forms/input-text/InputText";
 * ```
 */
export default {
  title: "forms/InputText",
  component: InputText,
  argTypes: {
    label: {
      control: "text"
    },
    type: {
      control: "text"
    },
    name: {
      control: "text"
    },
    value: {
      control: "text"
    },
    required: {
      control: "boolean"
    },
    size: {
      control: "select",
      options: ["small", "normal"]
    },
    placeholder: {
      control: "text"
    },
    description: {
      control: "text"
    },
    onChange: {
      action: "onChange"
    },
    onBlur: {
      action: "onBlur"
    },
    onFocus: {
      action: "onFocus"
    }
  },
  parameters: {},
  tags: ["autodocs"]
} satisfies Meta<typeof InputText>;

type Story = StoryObj<typeof InputText>;
/**
 * Basic usage of the InputText.
 */
export const Usage: Story = {
  args: {
    name: "name",
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("Placeholder");
    await userEvent.type(input, "Test input", { delay: 100 });
    await expect(input).toHaveValue("Test input");
  }
};
/**
 * Debounce the value when the user types.
 */
export const Debounced: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return (
      <div>
        <InputText {...props} />
        <div data-testid={"debounced-value"}>Value: {props.value}</div>
      </div>
    );
  },
  args: {
    name: "name",
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = await canvas.getByPlaceholderText("Placeholder");
    await userEvent.type(input, "Test input", { delay: 100 });

    expect(canvas.getByTestId("debounced-value")).toHaveTextContent("Value:");

    await delay(500);

    expect(canvas.getByTestId("debounced-value")).toHaveTextContent("Value: Test input");
  }
};
/**
 * Add a prefix to the input text.
 */
export const AppendBefore: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <InputText prefix={<i className={iconClass(undefined, "calendar")} />} {...props} />;
  },
  args: {
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  }
};
/**
 * Add a suffix to the input text.
 */
export const AppendAfter: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <InputText suffix={<i className={iconClass(undefined, "calendar")} />} {...props} />;
  },
  args: {
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder"
  }
};
/**
 * Change the type of the input text.
 */
export const TypeNumber: Story = {
  render(args: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);
    return <InputText suffix={<i className={iconClass(undefined, "dollar")} />} {...props} />;
  },
  args: {
    label: "Label",
    type: "number",
    value: "",
    size: "",
    placeholder: "Placeholder",
    description: "Use dollars!"
  }
};
/**
 * Change the size of the input text.
 */
export const Sizing: Story = {
  render(args: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const props = useValue(args);

    return <InputText suffix={<i className={iconClass(undefined, "dollar")} />} {...props} />;
  },
  args: {
    label: "Label",
    type: "number",
    value: "",
    size: "small",
    placeholder: "Placeholder",
    description: "Use dollars!"
  }
};
