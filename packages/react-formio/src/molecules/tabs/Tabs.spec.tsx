import { fireEvent, render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";

import { Tabs } from "./Tabs";
import { Sandbox } from "./Tabs.stories";

describe("<Tabs>", () => {
  it("should display the tabs component and children", () => {
    const items = [
      {
        action: "back",
        exact: true,
        icon: "chevron-left",
        back: true
      },
      {
        action: "edit",
        exact: true,
        icon: "edit",
        label: "Edit"
      }
    ];

    render(<Tabs {...Sandbox.args} items={items} />);

    const tabsComponent = screen.getByTestId("tabs-comp");

    const buttonsTabWrapper = screen.getAllByTitle("button-wrapper");
    const chevronLeftButtonTabWrapper = buttonsTabWrapper[0];
    const editButtonTabWrapper = buttonsTabWrapper[1];

    const buttonsTab = screen.getAllByTitle("button-tab");
    const chevronLeftButtonTab = buttonsTab[0];
    const editButtonTab = buttonsTab[1];

    const fontAwsomeChevronLeftIcon = "fa fa-chevron-left";
    const fontAwsomeEditIcon = "fa fa-edit";

    expect(tabsComponent).toBeInTheDocument();

    expect(chevronLeftButtonTabWrapper).toContainElement(chevronLeftButtonTab);
    expect(chevronLeftButtonTabWrapper).toContainHTML("-back");
    expect(chevronLeftButtonTab).toBeInTheDocument();
    expect(chevronLeftButtonTab).toContainHTML(fontAwsomeChevronLeftIcon);
    expect(chevronLeftButtonTab).toHaveTextContent("");

    expect(editButtonTabWrapper).toContainElement(editButtonTab);
    expect(editButtonTabWrapper).not.toContainHTML("-back");
    expect(editButtonTab).toBeInTheDocument();
    expect(editButtonTab).toContainHTML(fontAwsomeEditIcon);
    expect(editButtonTab).toHaveTextContent("Edit");
  });

  it("should call dispatcher when clicking on a button tab", () => {
    const items = [
      {
        action: "back",
        exact: true,
        icon: "chevron-left",
        back: true
      },
      {
        action: "edit",
        exact: true,
        icon: "edit",
        label: "Edit"
      }
    ];
    const onClick = vi.fn();

    render(<Tabs items={items} onClick={onClick} />);

    const buttonsTab = screen.getAllByTitle("button-tab");
    const chevronLeftButtonTab = buttonsTab[0];
    const editButtonTab = buttonsTab[1];

    fireEvent.click(chevronLeftButtonTab);

    expect(onClick).toHaveBeenCalledTimes(1);
    expect(onClick).toHaveBeenCalledWith(items[0]);

    fireEvent.click(editButtonTab);

    expect(onClick).toHaveBeenCalledTimes(2);
    expect(onClick).toHaveBeenCalledWith(items[1]);
  });
});
