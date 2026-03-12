import { render, screen } from "@testing-library/react";

import { DefaultDateCell } from "./DefaultDateCell";

function createCellContext(value: string | undefined, format?: string) {
  return {
    getValue: () => value,
    column: {
      columnDef: {
        meta: {
          format
        }
      }
    }
  } as any;
}

describe("DefaultDateCell", () => {
  it("should render an empty span when value is undefined", () => {
    render(<DefaultDateCell {...createCellContext(undefined)} />);

    expect(screen.getByText("", { selector: "span" })).toBeInTheDocument();
    expect(screen.queryByText(/.+/)).not.toBeInTheDocument();
  });

  it("should render the formatted date with the default format", () => {
    render(<DefaultDateCell {...createCellContext("2026-03-12T10:30:00.000Z")} />);

    expect(screen.getByText("03/12/2026", { selector: "span" })).toBeInTheDocument();
  });

  it("should render the formatted date with a custom format", () => {
    render(<DefaultDateCell {...createCellContext("2026-03-12T10:30:00.000Z", "YYYY-MM-DD HH:mm")} />);

    expect(screen.getByText("2026-03-12 10:30", { selector: "span" })).toBeInTheDocument();
  });

  it("should fallback to the raw value when the date is invalid", () => {
    render(<DefaultDateCell {...createCellContext("not-a-date")} />);

    expect(screen.getByText("not-a-date", { selector: "span" })).toBeInTheDocument();
  });
});
