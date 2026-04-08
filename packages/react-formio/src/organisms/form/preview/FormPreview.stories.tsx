import "../../../molecules/card/Card.js";
import "../Form.js";

import { Meta, StoryObj } from "@storybook/react-vite";

import formFirstname from "../../__fixtures__/form-firstname.fixture.json";
import { FormPreview } from "./FormPreview.js";

/**
 * FormPreview component displays a form preview inside a card with a background
 */
export default {
  title: "form/preview/FormPreview",
  component: FormPreview,
  argTypes: {
    form: {
      description: "The form object to preview",
      control: "object"
    },
    i18n: {
      description: "Internationalization function"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Component that displays a form preview inside a card with a background."
      }
    }
  }
} satisfies Meta<typeof FormPreview>;

type Story = StoryObj<typeof FormPreview>;

/**
 * Basic form preview with a simple form
 */
export const Usage: Story = {
  args: {
    form: formFirstname as any,
    i18n: {}
  }
};

/**
 * Form preview with custom translations
 */
export const Translated: Story = {
  args: {
    form: formFirstname as any,
    i18n: {
      "Form with First Name": "Formulaire avec prénom",
      "First name": "Prénom",
      "Last name": "Nom de famille",
      Submit: "Soumettre"
    }
  }
};
