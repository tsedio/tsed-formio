import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";

import { Sandbox } from "./actionsTable.stories";

describe("ActionsTable", () => {
  it("should render the table actions", async () => {
    const onAddAction = jest.fn();

    render(<Sandbox {...Sandbox.args} onAddAction={onAddAction} />);

    const btn = screen.getByRole("button", { name: /add action/i });
    const cells = screen.getAllByRole("cell");
    const options = screen.getAllByRole("option");

    expect(btn).toHaveProperty("disabled");
    expect(btn.innerHTML).toMatch("Add action");
    expect(cells[0].innerHTML).toMatch("Save Submission");
    expect(options.length).toEqual(Sandbox.args.availableActions.length + 1);

    expect(options[0].innerHTML).toMatch("Select an action");
    expect(options[1].innerHTML).toMatch("Email");
  });
  it("should not call addAction when the default item is selected", async () => {
    const onAddAction = jest.fn();

    render(<Sandbox {...Sandbox.args} onAddAction={onAddAction} />);

    const btn = screen.getByRole("button", { name: /add action/i });

    await fireEvent.click(btn);
    expect(onAddAction).not.toHaveBeenCalled();
  });
  it("should call addAction with the selected action", async () => {
    const onAddAction = jest.fn();

    render(<Sandbox {...Sandbox.args} onAddAction={onAddAction} />);

    const btn = screen.getByRole("button", { name: /add action/i });
    const select = screen.getByRole("combobox");

    await userEvent.selectOptions(select, String(Sandbox.args.availableActions[1].value));

    await fireEvent.click(btn);

    expect(btn).not.toHaveProperty("disabled", true);
    expect(onAddAction).toHaveBeenCalledWith("webhook");
  });
});
