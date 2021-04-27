import React from "react";
import { fireEvent, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { Sandbox } from "./actionsTable.stories";

describe("ActionsTable", () => {
  it("should render the table actions", async () => {
    const onAddAction = jest.fn();

    const { getByTestId, getAllByRole } = render(
      <Sandbox {...Sandbox.args} onAddAction={onAddAction} />
    );

    const btn = getByTestId("submit");
    const cells = getAllByRole("cell");
    const select = getByTestId("select");

    expect(btn).toHaveAttribute("disabled");
    expect(btn).toHaveTextContent("Add action");
    expect(cells[0]).toHaveTextContent("Save Submission");
    expect(select.children.length).toEqual(
      Sandbox.args.availableActions.length + 1
    );

    expect(select.children[0]).toHaveTextContent("Select an action");
    expect(select.children[1]).toHaveTextContent("Email");
  });
  it("should not call addAction when the default item is selected", async () => {
    const onAddAction = jest.fn();

    const { getByTestId } = render(
      <Sandbox {...Sandbox.args} onAddAction={onAddAction} />
    );

    const btn = getByTestId("submit");

    await fireEvent.click(btn);
    expect(onAddAction).not.toHaveBeenCalled();
  });
  it("should call addAction with the selected action", async () => {
    const onAddAction = jest.fn();

    const { getByTestId } = render(
      <Sandbox {...Sandbox.args} onAddAction={onAddAction} />
    );

    const btn = getByTestId("submit");
    const select = getByTestId("select");

    await userEvent.selectOptions(
      select,
      String(Sandbox.args.availableActions[1].value)
    );

    await fireEvent.click(btn);

    expect(btn).not.toHaveAttribute("disabled");
    expect(onAddAction).toHaveBeenCalledWith("webhook");
  });
});
