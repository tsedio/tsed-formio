import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import availableActions from "../__fixtures__/form-actions.json";
import data from "./__fixtures__/data.json";
import { ActionsTable } from "./actionsTable.component";

const args: any = {
  data: data,
  availableActions: availableActions.map(({ name, title }) => ({
    label: title,
    value: name
  })),
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
};

describe("ActionsTable", () => {
  it("should render the table actions", async () => {
    const onAddAction = vi.fn();

    render(<ActionsTable {...args} onAddAction={onAddAction} />);

    const btn = screen.getByTestId("action-table-add");
    const cells = screen.getAllByRole("cell");
    const options = screen.getAllByRole("option");

    expect(btn).toHaveProperty("disabled");
    expect(btn.innerHTML).toMatch("Add action");
    expect(cells[0].innerHTML).toMatch("Save Submission");
    expect(options.length).toEqual(availableActions.length + 1);

    expect(options[0].innerHTML).toMatch("Select an action");
    expect(options[1].innerHTML).toMatch("Webhook (Premium)");
  });
  it("should not call addAction when the default item is selected", async () => {
    const onAddAction = vi.fn();

    render(<ActionsTable {...args} onAddAction={onAddAction} />);

    const btn = screen.getByTestId("action-table-add");

    fireEvent.click(btn);
    expect(onAddAction).not.toHaveBeenCalled();
  });
  it("should call addAction with the selected action", async () => {
    const onAddAction = vi.fn();

    render(<ActionsTable {...args} onAddAction={onAddAction} />);

    const btn = screen.getByTestId("action-table-add");
    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, String(args.availableActions[1].value));

    fireEvent.click(btn);

    expect(btn).not.toHaveProperty("disabled", true);
    expect(onAddAction).toHaveBeenCalledWith("sql");
  });
});
