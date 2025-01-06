import type { Meta, StoryObj } from "@storybook/react";
import { expect, userEvent, within } from "@storybook/test";
import { useState } from "react";

import { iconClass } from "../../utils/iconClass";
import { InputText } from "./inputText.component";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const useValue = (args: any) => {
  const [value, setValue] = useState(args.value);

  return {
    ...args,
    value,
    onChange(name: string, value: any) {
      setValue(value);
      args.onChange(name, value);
    }
  };
};

export default {
  title: "@tsed/react-formio/InputText",
  component: InputText,
  argTypes: {
    label: {
      control: {
        type: "text"
      }
    },
    type: {
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
        type: "text"
      }
    },
    required: {
      control: {
        type: "boolean"
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
    description: {
      control: {
        type: "text"
      }
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
export const WithPrefix: Story = {
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
export const WithSuffix: Story = {
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
    size: "sm",
    placeholder: "Placeholder",
    description: "Use dollars!"
  }
};
