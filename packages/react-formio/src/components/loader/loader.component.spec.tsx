import { render } from "@testing-library/react";
import React from "react";
import { Loader } from "./loader.component";

describe("Loader", () => {
  it("should render a component (with isActive = true)", () => {
    const { getByTestId } = render(<Loader isActive={true} />);

    const icon = getByTestId("icon");

    expect(icon).toBeTruthy();
  });

  it("should render a component (with isActive = false)", () => {
    const { queryByTestId } = render(<Loader isActive={false} />);

    const icon = queryByTestId("icon");

    expect(icon).toBeFalsy();
  });
});
