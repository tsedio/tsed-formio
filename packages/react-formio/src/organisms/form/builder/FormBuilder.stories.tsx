import type { Meta, StoryObj } from "@storybook/react";

import form from "../../__fixtures__/form.fixture.json";
import formWizard from "../../__fixtures__/form-wizard.fixture.json";
import { FormBuilder } from "./FormBuilder";

/**
 * The [FormBuilder](/story/reactformio-formbuilder--sandbox) class can be used to embed a form builder directly in your React application.
 *
 * Please note that you'll need to include the CSS for the form builder from formio.js as well.
 *
 * Please note that the [FormBuilder](/story/reactformio-formbuilder--sandbox) component does not load and save from/to an url.
 * You must handle the form definition loading and saving yourself or use the [FormEdit](/docs/documentation-formedit--docs) component.
 *
 * ```tsx
 * import {FormBuilder} from "@tsed/react-formio/organisms/form/builder/FormBuilder";
 * ```
 *
 */
export default {
  title: "form/builder/FormBuilder",
  component: FormBuilder,
  argTypes: {
    display: {
      control: {
        type: "select",
        options: ["form", "wizard", "pdf"]
      }
    },
    components: {
      control: {
        type: "object"
      }
    },
    options: {
      description:
        "The form builder options. See [here](https://help.form.io/developers/form-development/form-builder#form-builder-options) for more details.",
      control: {
        type: "object"
      }
    },
    onBuilderReady: {
      description:
        "A callback function that gets called when the form builder has rendered. It is useful for accessing the underlying @formio/js FormBuilder instance.",
      action: "onBuilderReady"
    },
    onChange: {
      description: "A callback function that gets called when the form being built has changed.",
      action: "onChange"
    },
    onSaveComponent: {
      description: "A callback function that gets called when a component is saved in the builder.",
      action: "onSaveComponent"
    },
    onEditComponent: {
      description: "A callback function that gets called when a component is edited in the builder.",
      action: "onEditComponent"
    },
    onUpdateComponent: {
      description: "A callback function that gets called when a component is updated in the builder.",
      action: "onUpdateComponent"
    },
    onDeleteComponent: {
      description: "A callback function that gets called when a component is deleted in the builder.",
      action: "onDeleteComponent"
    }
  },
  tags: ["autodocs"]
} satisfies Meta<typeof FormBuilder>;

type Story = StoryObj<typeof FormBuilder>;
/**
 * A traditional web form that is typically filled out by end-users from top to bottom
 */
export const WebForm: Story = {
  args: {
    display: form.display as any,
    options: { template: "tailwind", iconset: "bx" },
    components: form.components as any
  }
};
/**
 * This form configuration allows users to progress through the form in bite-size sections instead of presenting the entire form to the user.
 * If you are creating a form containing many fields, this is a great option to improve the user experience.
 */
export const Wizard: Story = {
  args: {
    display: formWizard.display as any,
    components: formWizard.components as any,
    options: { template: "tailwind", iconset: "bx" }
  }
};
/**
 * PDF-First forms allow users to upload a PDF form and add overlay fields to the form, modernizing the traditional old and clunky PDF form.
 * For a more in-depth guide on the PDF forms please navigate to the [following documentation](https://help.form.io/userguide/forms/pdf#introduction).
 */
export const Pdf: Story = {
  args: {
    display: "pdf",
    components: [],
    options: { template: "tailwind", iconset: "bx" }
  }
};
