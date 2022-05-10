import React from "react";
import { Sandbox } from "./select.stories";
import { fireEvent, render, screen } from "@testing-library/react";

describe("select component", () => {
  it("should render the select component", () => {
    const { getByTestId } = render(<Sandbox {...Sandbox.args} name={"test"} />);

    expect(getByTestId("select_test")).toBeInTheDocument();
  });

  it("should render the choices with placeholder first", () => {
    const choices = [
      { label: "test1", value: "value1" },
      { label: "test2", value: "value2" }
    ];
    const placeholder = "Placeholder test";
    const { getByTestId, getByText } = render(
      <Sandbox
        {...Sandbox.args}
        placeholder={placeholder}
        choices={choices}
        name={"test"}
      />
    );
    const selectChilds = Array.prototype.map.call(
      getByTestId("select_test").children,
      (child) => child.textContent
    );

    expect(getByTestId("select_test").firstChild.textContent).toBe(placeholder)
    selectChilds.map((child) => {
      expect(screen.getByText(child)).toBeInTheDocument();
    });
    
  });
});
