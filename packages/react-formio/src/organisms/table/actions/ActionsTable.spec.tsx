import "../../../molecules/forms/select/all.ts";
import "../../../molecules/table/all.ts";

import { fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import availableActions from "../../__fixtures__/form-actions.json";
import data from "./__fixtures__/data.json";
import { ActionsTable } from "./ActionsTable";

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
    const options = within(screen.getByTestId("action-table-select")).getAllByRole("option");

    expect(btn).toHaveProperty("disabled");
    expect(btn.innerHTML).toMatch("Add action");
    expect(cells[0].innerHTML).toMatch("Save Submission");

    expect(options.length).toEqual(17);

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
    const select = screen.getByTestId("action-table-select");

    await userEvent.selectOptions(select, "sql");

    fireEvent.click(btn);

    expect(btn).not.toHaveProperty("disabled", true);
    expect(onAddAction).toHaveBeenCalledWith("sql");
  });
});
