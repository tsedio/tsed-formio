import type { Meta, StoryObj } from "@storybook/react";
import { expect, fn, userEvent, within } from "@storybook/test";

import availableActions from "../__fixtures__/form-actions.json";
import data from "./__fixtures__/data.json";
import { ActionsTable } from "./actionsTable.component";

export default {
  title: "ReactFormio/ActionsTable",
  component: ActionsTable,
  argTypes: {
    data: {
      control: {
        type: "object"
      }
    },
    operations: {
      control: {
        type: "object"
      }
    },
    isLoading: {
      control: {
        type: "boolean"
      }
    },
    disableFilters: {
      control: {
        type: "boolean"
      }
    },
    disablePagination: {
      control: {
        type: "boolean"
      }
    },
    onAddAction: {
      action: "onAddAction"
    }
  },
  parameters: {}
} satisfies Meta<typeof ActionsTable>;

type Story = StoryObj<typeof ActionsTable>;

export const Sandbox: Story = {
  async play({ canvasElement, args }) {
    const canvas = within(canvasElement);

    const select = canvas.getByTestId("action-table-select");
    const addButton = canvas.getByTestId("action-table-add");

    expect(addButton).toHaveAttribute("disabled");

    await userEvent.selectOptions(select, "save", {
      delay: 100
    });

    await userEvent.click(addButton);

    expect(args.onAddAction).toHaveBeenCalledWith("save");

    const editButton = await canvas.getByRole("button", { name: /Operation button: Edit/i });
    const deleteButton = await canvas.getByRole("button", { name: /Operation button: delete/i });

    expect(editButton).toBeInTheDocument();
    expect(deleteButton).toBeInTheDocument();

    await userEvent.click(editButton);

    expect(args.onClick).toHaveBeenCalledWith(
      args.data[0],
      args.operations!.find(({ action }) => action === "edit")
    );

    await userEvent.click(deleteButton);

    expect(args.onClick).toHaveBeenCalledWith(
      args.data[0],
      args.operations!.find(({ action }) => action === "delete")
    );
  },
  args: {
    onAddAction: fn(),
    onClick: fn(),
    availableActions: availableActions.map(({ name, title }) => ({
      label: title,
      value: name
    })),
    data: data as never,
    operations: [
      {
        title: "Edit",
        action: "edit",
        alias: "row",
        path: "/resources/:resourceId/submissions/:submissionId",
        icon: "edit",
        permissionsResolver() {
          return true;
        }
      },
      {
        action: "delete",
        path: "/resources/:resourceId/submissions/:submissionId/delete",
        icon: "trash",
        buttonType: "danger",
        permissionsResolver() {
          return true;
        }
      }
    ]
  }
};
