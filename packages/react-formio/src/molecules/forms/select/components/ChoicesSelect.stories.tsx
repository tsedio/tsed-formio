import "./ChoicesSelect";

import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

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
    backgrounds: { default: "pearl" }
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
    layout: {
      control: "radio",
      options: ["html5", "choicesjs", "react"]
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

type Story = StoryObj<typeof Select>;
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

export const WithPrefix: Story = {
  args: {
    prefix: <i className={iconClass(undefined, "calendar")} />,
    label: "Label",
    value: "",
    size: "",
    placeholder: "Placeholder",
    options
  }
};

export const WithSuffix: Story = {
  args: {
    suffix: <i className={iconClass(undefined, "calendar")} />,
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
