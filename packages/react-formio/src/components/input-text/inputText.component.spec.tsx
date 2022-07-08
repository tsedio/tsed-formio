import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";

import { Sandbox } from "./inputText.stories";

describe("input-text", () => {
  it("should display the input-text component", () => {
    render(<Sandbox {...Sandbox.args} name={"test"} />);
    const input = screen.getByTestId("input_test") as HTMLInputElement;

    expect(input).toBeInTheDocument();
  });

  it("should display the input-text component with a different size", () => {
    render(<Sandbox {...Sandbox.args} name={"test"} size='small' />);
    const input = screen.getByTestId("input_test") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input).toHaveClass("form-control-small");
  });

  it("should display the input-text with placeholder", () => {
    const placeholderTest = "placeholder test";

    render(<Sandbox {...Sandbox.args} name={"test"} placeholder={placeholderTest} />);
    const input = screen.getByTestId("input_test") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("placeholder", placeholderTest);
  });

  it("should change the value of the input-text", () => {
    const placeholderTest = "placeholder test";

    render(<Sandbox {...Sandbox.args} name={"test"} placeholder={placeholderTest} />);
    const input = screen.getByTestId("input_test") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "newValue" } });
    expect(input.value).toBe("newValue");
    expect(input).not.toHaveDisplayValue(placeholderTest);
    expect(input).toHaveDisplayValue("newValue");
  });
  it("should NOT change the value of the input-text if the value is NOT of type number", () => {
    const placeholderTest = "placeholder test";

    render(<Sandbox {...Sandbox.args} type='number' name={"test"} placeholder={placeholderTest} />);
    const input = screen.getByTestId("input_test") as HTMLInputElement;

    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "newValue" } });
    expect(input).not.toHaveDisplayValue("newValue");
    fireEvent.change(input, { target: { value: 1234 } });
    expect(input.value).toBe("1234");
    expect(input).toHaveDisplayValue("1234");
  });
});
