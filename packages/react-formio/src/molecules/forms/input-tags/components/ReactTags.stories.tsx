import "../all";

import type { Meta, StoryObj } from "@storybook/react";
import { type CreatableProps } from "react-select/creatable";

import { iconClass } from "../../../../utils/iconClass";
import { useValue } from "../../../__fixtures__/useValue.hook";
import { InputTags } from "../InputTags";

/**
 * The InputTags component enables users to create new options in the text field.
 *
 * ```tsx
 * import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/all";
 *
 * or
 *
 * import "@tsed/react-formio/molecules/forms/input-tags/components/ReactTags";
 * import "@tsed/react-formio/molecules/forms/input-text/InputText";
 * import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/InputTags";
 *
 * ```
 */
export default {
  title: "forms/InputTags/React",
  component: InputTags,
  argTypes: {
    label: {
      control: "text"
    },
    name: {
      control: "text"
    },
    value: {
      control: "object"
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
    layout: {
      control: "select",
      options: ["choicesjs", "react"]
    },
    onChange: {
      action: "onChange"
    }
  },
  parameters: {},
  args: {
    layout: "react"
  },
  tags: ["autodocs"],
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { value, onChange } = useValue(args);

    return <InputTags {...args} value={value} onChange={onChange} />;
  }
} satisfies Meta<typeof InputTags>;

type Story = StoryObj<typeof InputTags>;

export const Usage: Story = {
  args: {
    name: "name",
    label: "Label",
    value: ["test"],
    size: "",
    placeholder: "Placeholder"
  }
};

export const WithSizeOption: Story = {
  args: {
    name: "name",
    label: "Label",
    value: ["test"],
    size: "small",
    placeholder: "Placeholder"
  }
};

export const AppendBefore: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <InputTags before={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
  },
  args: {
    label: "Label",
    value: [],
    name: "name",
    size: "",
    placeholder: "Placeholder"
  }
};

export const AppendAfter: Story = {
  render(args) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return <InputTags after={<i className={iconClass(undefined, "calendar")} />} {...useValue(args)} />;
  },
  args: {
    label: "Label",
    value: [],
    name: "name",
    size: "",
    placeholder: "Placeholder"
  }
};

/**
 * InputTags using the [react-select](https://react-select.com/) library can
 * be customized using the `customProperties` prop.
 *
 * For example, you can use the `customProperties` prop to add a list of options.
 *
 * See the [react-select documentation](https://react-select.com/creatable) for more information.
 */
export const CustomProperties: Story = {
  args: {
    value: [],
    name: "name",
    label: "Label",
    placeholder: "Select or Create...",
    customProperties: {
      options: [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" }
      ]
    } satisfies CreatableProps<unknown, true, any>
  }
};
