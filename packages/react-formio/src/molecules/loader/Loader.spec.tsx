import { render, screen } from "@testing-library/react";

import { Loader } from "./Loader";

describe("Loader", () => {
  it("should render a component (when isActive = true)", () => {
    render(<Loader isActive={true} />);

    const icon = screen.getByTestId("icon_radio-circle");

    expect(icon).toBeTruthy();
    expect(icon).toBeInTheDocument();
  });

  it("should render a component (when isActive = false)", () => {
    render(<Loader isActive={false} />);

    const icon = screen.queryByTestId("icon_radio-circle");

    expect(icon).toBeFalsy();
    expect(icon).not.toBeInTheDocument();
  });
});
