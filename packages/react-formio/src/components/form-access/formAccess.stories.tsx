import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import { FormAccess } from "./formAccess.component";

export default {
  title: "@tsed/react-formio/FormAccess",
  component: FormAccess,
  argTypes: {
    onSubmit: { action: "onSubmit" }
  },
  parameters: {
    docs: {
      source: {
        type: "code"
      }
    }
  }
} satisfies Meta<typeof FormAccess>;

type Story = StoryObj<typeof FormAccess>;

export const Sandbox: Story = {
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);

    // Vérifiez que le bouton "Save access" est présent
    const saveButtons = await canvas.getAllByRole("button", { name: /Save access/i });
    const saveButton = saveButtons[0];

    expect(saveButton).toBeInTheDocument();

    // Simulez un clic sur le bouton "Save access"
    await userEvent.click(saveButton);

    // Vérifiez que l'action onSubmit a été appelée
    expect(args.onSubmit).toHaveBeenCalled();
  },
  args: {
    onSubmit: fn(),
    form: {
      _id: "6023f8fe4b1a2ab9a3aae096",
      type: "form",
      tags: [],
      owner: "5d0797a382461b6656d2c790",
      access: [
        {
          roles: ["5d0797bc872fc747da559858", "5d0797bc872fc71d05559859", "5d0797bc872fc7da3b55985a"],
          type: "read_all"
        }
      ],
      submissionAccess: [
        {
          roles: ["5d0797bc872fc747da559858"],
          type: "read_all"
        }
      ],
      controller: "",
      properties: {},
      settings: {},
      name: "textField",
      path: "textfield",
      machineName: "tcspjwhsevrzpcd:textField"
    },
    roles: [
      {
        title: "Administrator",
        _id: "5d0797bc872fc747da559858"
      },
      { title: "Authenticated", _id: "5d0797bc872fc71d05559859" },
      { title: "Anonymous", _id: "5d0797bc872fc7da3b55985a" }
    ],
    options: { template: "tailwind", iconset: "bx" }
  }
};
