import React, { Dispatch, useState } from "react";
import { fireEvent, screen, render } from "@testing-library/react";
import { Sandbox } from "./tabs.component.stories";

export interface TabsItemProps extends Record<string, any> {
  label?: string;
  icon?: string;
}

describe("tabs", () => {
  it("should display the tabs component", () => {
    const { getByTestId, queryAllByTestId } = render(<Sandbox {...Sandbox.args} />);

    const tabsComponent = getByTestId("tabs-comp");
    const allButtonsTab = queryAllByTestId("button-tab");

    expect(tabsComponent).toBeInTheDocument();
    allButtonsTab.forEach((buttonTab) => {
      expect(buttonTab).toBeInTheDocument();
    });
  });
  it("should call dispatcher when clicking on a button tab", async () => {
    // const onClick = jest.fn();
    // const useStateSpy = jest.spyOn(React, "useState");

    // useStateSpy.mockImplementation((current) => [current, onClick ])
    const onClick = jest.fn();
    const useStateMock: any = (current: TabsItemProps) => [current, onClick];

    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    const { getByText } = render(<Sandbox {...Sandbox.args} onClick={onClick} />);

    const editButton = getByText("Edit").parentElement;

    fireEvent.click(editButton);

    expect(onClick).toHaveBeenCalledWith();
  });
});
