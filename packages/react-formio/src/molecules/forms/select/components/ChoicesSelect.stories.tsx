import "./ChoicesSelect";

import { Meta, StoryObj } from "@storybook/react-vite";
import { expect, fn, userEvent, waitFor, within } from "storybook/test";

import { iconClass } from "../../../../utils/iconClass";
import { useValue } from "../../../__fixtures__/useValue.hook";
import { Select } from "../Select";

const options = [
  {
    label: "Option 1",
    value: "option-1"
  },
  {
    label: "Option 2",
    value: "option-2"
  },
  {
    label: "Option 3",
    value: "option-3"
  }
];

const OptionTemplate = ({ label, data }: any) => {
  return (
    <span style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
      <span>{label}</span>
      <small style={{ opacity: 0.7 }}>{data?.hint}</small>
    </span>
  );
};

async function openChoicesDropdown(canvasElement: HTMLElement) {
  await waitFor(() => {
    expect(canvasElement.querySelector(".choices")).toBeInTheDocument();
  });

  const choicesElement = canvasElement.querySelector(".choices") as HTMLElement;
  const inner = choicesElement.querySelector(".choices__inner") as HTMLElement;

  await userEvent.click(inner);

  await waitFor(() => {
    expect(choicesElement.classList.contains("is-open")).toBe(true);
  });

  return choicesElement;
}

function sleep(ms = 300) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
/**
 * ChoicesJS select component.
 *
 * ```tsx
 * import {Select} from "@tsed/react-formio/molecules/forms/select/all"; // import HTML5, ChoicesJS and React components
 *
 * // or
 * import {Select} from "@tsed/react-formio/molecules/forms/select/Select";
 * import "@tsed/react-formio/molecules/forms/select/components/ChoicesSelect"; // register only ChoicesJS component
 *
 * ```
 */
export default {
  title: "forms/Select/ChoiceJs",
  component: Select,
  parameters: {
    layout: "centered",
    backgrounds: { default: "pearl" },
    docs: {
      description: {
        component:
          "Choices.js layout using the v11 template callback API. Custom option renderers should be passed with `customProperties.template` on each option to keep Choices `data-*` and ARIA attributes intact."
      }
    }
  },
  args: {
    layout: "choicesjs"
  },
  argTypes: {
    label: {
      control: "text"
    },
    name: {
      control: "text"
    },
    value: {
      control: "text"
    },
    size: {
      control: "radio",
      options: ["small", "normal"]
    },
    placeholder: {
      control: "text"
    },
    options: {
      control: "object"
    },
    onChange: {
      action: "onChange"
    }
  },
  tags: ["autodocs"],
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { value, onChange } = useValue(args);

    return (
      <div style={{ width: "300px" }}>
        <Select {...args} value={value} onChange={onChange} />
      </div>
    );
  }
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select<string>>;
/**
 * Basic select component using HTML5 syntax.
 */
export const Usage: Story = {
  args: {
    name: "name",
    label: "Label",
    value: "option-1",
    options,
    onChange: fn()
  },
  parameters: {
    docs: {
      description: {
        story: "Baseline story for default Choices rendering (no custom option template)."
      }
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("select_name");

    await waitFor(() => {
      expect(select).toHaveValue("option-1");
    });
    await sleep();

    const choicesElement = await openChoicesDropdown(canvasElement);
    await sleep();
    const option = choicesElement.querySelector('[data-choice-selectable][data-value="option-2"]') as HTMLElement;

    await userEvent.click(option);
    await sleep();

    await waitFor(() => {
      expect(select).toHaveValue("option-2");
      expect(args.onChange).toHaveBeenCalledWith("name", "option-2");
    });
  }
};

/**
 * Select component with a placeholder.
 */
export const WithPlaceholder: Story = {
  args: {
    name: "name",
    placeholder: "Select an option",
    options,
    onChange: fn()
  }
};
/**
 * Select component with a placeholder.
 */
export const WithPlaceholderAndRequired: Story = {
  args: {
    name: "name",
    placeholder: "Select an option",
    options,
    required: true,
    onChange: fn()
  }
};
/**
 * Select component with a disabled prop.
 */
export const WithDisabledProp: Story = {
  args: {
    disabled: true,
    options
  }
};

/**
 * Select component with a disabled option.
 */
export const WithDisabledOption: Story = {
  args: {
    options: [
      {
        label: "Option 1",
        value: "option-1"
      },
      {
        label: "Option 2",
        value: "option-2",
        disabled: true
      },
      {
        label: "Option 3",
        value: "option-3"
      }
    ]
  }
};

export const WithSizeOption: Story = {
  args: {
    label: "Label",
    size: "small",
    options: [
      {
        label: "Option 1",
        value: "option-1"
      },
      {
        label: "Option 2",
        value: "option-2",
        disabled: true
      },
      {
        label: "Option 3",
        value: "option-3"
      }
    ]
  }
};

export const AppendBefore: Story = {
  args: {
    before: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
};

export const AppendAfter: Story = {
  args: {
    after: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
};

export const WithDescription: Story = {
  args: {
    label: "Label",
    name: "name",
    value: "",
    placeholder: "Placeholder",
    description: "Select multiple values",
    options
  }
};

export const WithGroups: Story = {
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    description: "Select multiple values",
    options: [
      {
        label: "Group 1",
        options: [
          {
            label: "Option 1",
            value: "option-1"
          },
          {
            label: "Option 2",
            value: "option-2"
          }
        ]
      },
      {
        label: "Group 2",
        options: [
          {
            label: "Option 3",
            value: "option-3"
          },
          {
            label: "Option 4",
            value: "option-4"
          }
        ]
      }
    ]
  }
};

export const WithGroupsLegacy: Story = {
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    description: "Select multiple values",
    options: [
      {
        label: "Option 1",
        group: "group-1",
        value: "option-1"
      },
      {
        group: "group-1",
        label: "Option 2",
        value: "option-2"
      },
      {
        label: "Option 3",
        group: "group-2",
        value: "option-3"
      },
      {
        group: "group-2",
        label: "Option 4",
        value: "option-4"
      }
    ]
  }
};

export const WithMultiple: Story = {
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    multiple: true,
    placeholder: "Placeholder",
    description: "Select multiple values",
    options
  }
};

export const WithGroupsAndMultiple: Story = {
  args: {
    label: "Label",
    name: "name",
    value: [],
    size: "",
    multiple: true,
    description: "Select multiple values",
    options: [
      {
        label: "Group 1",
        options: [
          {
            label: "Option 1",
            value: "option-1"
          },
          {
            label: "Option 2",
            value: "option-2"
          }
        ]
      },
      {
        label: "Group 2",
        options: [
          {
            label: "Option 3",
            value: "option-3"
          },
          {
            label: "Option 4",
            value: "option-4"
          }
        ]
      }
    ]
  }
};

export const WithCustomOptionTemplate: Story = {
  args: {
    label: "Label",
    name: "name",
    value: "",
    placeholder: "Select an option",
    onChange: fn(),
    options: [
      {
        label: "Option 1",
        value: "option-1",
        customProperties: {
          hint: "alpha",
          template: OptionTemplate
        }
      },
      {
        label: "Option 2",
        value: "option-2",
        customProperties: {
          hint: "beta",
          template: OptionTemplate
        }
      },
      {
        label: "Option 3",
        value: "option-3",
        customProperties: {
          hint: "gamma",
          template: OptionTemplate
        }
      }
    ]
  },
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates the v11-compatible custom option renderer via `option.customProperties.template`. The callback keeps required Choices attributes (`data-choice`, `data-id`, `data-value`, roles)."
      }
    }
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByTestId("select_name");

    const choicesElement = await openChoicesDropdown(canvasElement);
    await sleep();
    const customOption = choicesElement.querySelector('[data-choice][data-value="option-1"]') as HTMLElement;

    await waitFor(() => {
      expect(customOption).toBeInTheDocument();
      expect(customOption).toHaveAttribute("role", "option");
      expect(customOption).toHaveTextContent("alpha");
    });
    await sleep();

    const option = choicesElement.querySelector('[data-choice-selectable][data-value="option-3"]') as HTMLElement;
    await userEvent.click(option);
    await sleep();

    await waitFor(() => {
      expect(select).toHaveValue("option-3");
      expect(args.onChange).toHaveBeenCalledWith("name", "option-3");
    });
  }
};
