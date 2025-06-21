import "../all";

import type { Meta, StoryObj } from "@storybook/react-vite";

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
 * import "@tsed/react-formio/molecules/forms/input-tags/components/ChoicesTags";
 * import "@tsed/react-formio/molecules/forms/input-tags/components/ReactTags";
 * import "@tsed/react-formio/molecules/forms/input-text/InputText";
 * import {InputTags} from "@tsed/react-formio/molecules/forms/input-tags/InputTags";
 *
 * ```
 */
export default {
  title: "forms/InputTags/ChoicesJs",
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
    layout: "choicesjs"
  },
  tags: ["autodocs"]
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
