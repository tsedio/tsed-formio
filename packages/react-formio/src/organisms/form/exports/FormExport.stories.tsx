import "../../../molecules/card/Card.js";
import "../../../atoms/icon/Icon.js";

import { Meta, StoryObj } from "@storybook/react-vite";

import { FormExport } from "./FormExport.js";

/**
 * FormExport component displays options to export form schema and submissions
 */
export default {
  title: "form/export/FormExport",
  component: FormExport,
  argTypes: {
    i18n: {
      description: "Internationalization function"
    },
    onClick: {
      action: "clicked",
      description: "Callback when an export button is clicked"
    }
  },
  parameters: {
    docs: {
      description: {
        component: "Component that displays options to export form schema as JSON and form submissions as JSON or CSV."
      }
    }
  }
} satisfies Meta<typeof FormExport>;

type Story = StoryObj<typeof FormExport>;

/**
 * Default view with form type set to "form"
 */
export const Usage: Story = {
  args: {
    i18n: (key: string) => key,
    onClick: (action: string, format: string) => console.log(`Action: ${action}, Format: ${format}`)
  }
};

/**
 * View with form type set to "resource"
 */
export const Resource: Story = {
  args: {
    i18n: (key: string) => key,
    onClick: (action: string, format: string) => console.log(`Action: ${action}, Format: ${format}`)
  }
};

/**
 * View with custom i18n function
 */
export const Translated: Story = {
  args: {
    i18n: (key: string) => {
      const translations: Record<string, string> = {
        "Export schema": "Exporter le schéma",
        "Export the formIO schema:": "Exporter le schéma formIO :",
        Json: "Json",
        Csv: "Csv",
        "Export form submissions": "Exporter les soumissions du formulaire"
      };
      return translations[key] || key;
    },
    onClick: (action: string, format: string) => console.log(`Action: ${action}, Format: ${format}`)
  }
};
