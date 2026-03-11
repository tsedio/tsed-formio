import { render, screen } from "@testing-library/react";

import { DefaultCell } from "./DefaultCell";

function createCellContext(value: unknown, rendered: unknown) {
  return {
    getValue: () => value,
    renderValue: () => rendered
  } as any;
}

describe("DefaultCell", () => {
  it("should render an empty span when value is undefined", () => {
    render(<DefaultCell {...createCellContext(undefined, undefined)} />);

    expect(screen.getByText("", { selector: "span" })).toBeInTheDocument();
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });

  it("should render html when rendered value differs from raw value", () => {
    render(<DefaultCell {...createCellContext("hello", "<strong>hello</strong>")} />);

    expect(screen.getByText("hello", { selector: "strong" })).toBeInTheDocument();
  });

  it("should render text when rendered value matches raw value", () => {
    render(<DefaultCell {...createCellContext("hello", "hello")} />);

    expect(screen.getByText("hello", { selector: "span" })).toBeInTheDocument();
    expect(screen.queryByText("hello", { selector: "strong" })).not.toBeInTheDocument();
  });
});
