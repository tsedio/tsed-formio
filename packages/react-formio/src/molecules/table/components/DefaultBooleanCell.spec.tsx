import { render, screen } from "@testing-library/react";

import { DefaultCellBoolean } from "./DefaultBooleanCell";

function createCellContext(value: boolean, labels?: Record<string, string>) {
  return {
    getValue: () => value,
    column: {
      columnDef: {
        meta: {
          labels
        }
      }
    }
  } as any;
}

describe("DefaultCellBoolean", () => {
  it("should render the default yes label for true values", () => {
    render(<DefaultCellBoolean {...createCellContext(true)} />);

    expect(screen.getByText("Yes", { selector: "span" })).toBeInTheDocument();
  });

  it("should render the default no label for false values", () => {
    render(<DefaultCellBoolean {...createCellContext(false)} />);

    expect(screen.getByText("No", { selector: "span" })).toBeInTheDocument();
  });

  it("should render custom labels from column metadata", () => {
    render(<DefaultCellBoolean {...createCellContext(true, { yes: "Enabled", No: "Disabled" })} />);

    expect(screen.getByText("Enabled", { selector: "span" })).toBeInTheDocument();
  });

  it("should render the custom false label from column metadata", () => {
    render(<DefaultCellBoolean {...createCellContext(false, { yes: "Enabled", No: "Disabled" })} />);

    expect(screen.getByText("Disabled", { selector: "span" })).toBeInTheDocument();
  });
});
