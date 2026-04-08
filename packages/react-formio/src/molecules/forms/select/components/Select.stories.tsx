import "./ChoicesSelect";
import "./HtmlSelect";
import "./ReactSelect";

import { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

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
  },
  {
    label: "Option 4",
    value: "option-4"
  },
  {
    label: "Option 6",
    value: "option-6"
  }
];

export default {
  title: "forms/Select/All",
  component: Select,
  parameters: {
    layout: "centered",
    backgrounds: { default: "pearl" },
    docs: {
      description: {}
    }
  },
  args: {},
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
      <div style={{ width: "800px" }} className='grid grid-cols-3 gap-4'>
        <div>
          <Select {...args} value={value} layout='choicesjs' onChange={onChange} />
        </div>
        <div>
          <Select {...args} value={value} layout='react' onChange={onChange} />
        </div>
        <div>
          <Select {...args} value={value} layout='html5' onChange={onChange} />
        </div>
        <div>
          <Select {...args} value={[value]} layout='choicesjs' multiple={true} />
        </div>
        <div>
          <Select {...args} value={[value]} layout='react' multiple={true} />
        </div>
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
  }
};
