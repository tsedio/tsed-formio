import { render, screen } from "@testing-library/react";
import React from "react";

import { Sandbox } from "./loader.stories";
describe("Loader", () => {
  it("should render a component (when isActive = true)", () => {
    render(<Sandbox isActive={true} />);

    const icon = screen.getByTestId("icon_radio-circle");

    expect(icon).toBeTruthy();
    expect(icon).toBeInTheDocument();
  });

  it("should render a component (when isActive = false)", () => {
    render(<Sandbox isActive={false} />);

    const icon = screen.queryByTestId("icon_radio-circle");

    expect(icon).toBeFalsy();
    expect(icon).not.toBeInTheDocument();
  });
});
