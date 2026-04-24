import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { components, registerComponent } from "../../../registries/components";
import { SelectFilter } from "./SelectFilter";

function MockSelect({ options, value, onChange, "data-testid": dataTestId }: any) {
  return (
    <select data-testid={dataTestId} value={value} onChange={(event) => onChange(undefined, event.target.value)}>
      {options.map((option: { label: string; value: string }) => (
        <option key={option.value || "empty"} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

function createHeader({ variant, values = [] }: { variant: "boolean" | "select"; values?: string[] }) {
  const setFilterValue = vi.fn();

  return {
    setFilterValue,
    header: {
      column: {
        id: "is_open",
        columnDef: {
          header: "Is open",
          meta: {
            filter: {
              variant
            },
            labels: {
              yes: "Open",
              no: "Closed"
            }
          }
        },
        getFilterValue: () => undefined,
        getFacetedUniqueValues: () => new Map(values.map((value) => [value, 1])),
        setFilterValue
      }
    } as any
  };
}

describe("SelectFilter", () => {
  const initialComponents = new Map<string, unknown>();

  beforeEach(() => {
    components.forEach((value, key) => initialComponents.set(key, value));
    components.clear();
    registerComponent("Select", MockSelect);
  });

  afterEach(() => {
    components.clear();
    initialComponents.forEach((value, key) => components.set(key, value));
    initialComponents.clear();
  });

  it("should convert boolean select values to booleans", () => {
    const { header, setFilterValue } = createHeader({ variant: "boolean" });

    render(<SelectFilter header={header} options={{ variant: "boolean", layout: "react" }} />);

    fireEvent.change(screen.getByTestId("filter_is_open"), { target: { value: "false" } });
    expect(setFilterValue).toHaveBeenCalledWith(false);

    fireEvent.change(screen.getByTestId("filter_is_open"), { target: { value: "true" } });
    expect(setFilterValue).toHaveBeenCalledWith(true);

    fireEvent.change(screen.getByTestId("filter_is_open"), { target: { value: "" } });
    expect(setFilterValue).toHaveBeenCalledWith(undefined);
  });

  it("should keep string values for non-boolean select filters", () => {
    const { header, setFilterValue } = createHeader({ variant: "select", values: ["alpha", "beta"] });

    render(<SelectFilter header={header} options={{ variant: "select", layout: "react" }} />);

    fireEvent.change(screen.getByTestId("filter_is_open"), { target: { value: "alpha" } });
    expect(setFilterValue).toHaveBeenCalledWith("alpha");
  });
});
