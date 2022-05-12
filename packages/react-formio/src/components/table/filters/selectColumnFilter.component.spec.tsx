import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import React from "react";
import { SelectColumnFilter } from "./selectColumnFilter.component";

describe("SelectColumnFilter", () => {
  it("should display select with choices", async () => {
    const mockSetFilter = jest.fn();
    const props = {
      name: "data.id",
      setFilter: mockSetFilter,
      column: {
        id: "id",
        preFilteredRows: [{ values: { id: "select-choice-1" } }, { values: { id: "select-choice-2" } }]
      }
    };

    const { getByText } = render(
      // @ts-ignore
      <SelectColumnFilter {...props} />
    );

    expect(getByText("select-choice-1")).toBeDefined();
    expect(getByText("select-choice-2")).toBeDefined();
  });
  it("should display select with custom choices", async () => {
    const mockSetFilter = jest.fn();
    const props = {
      name: "data.id",
      setFilter: mockSetFilter,
      column: {
        id: "id",
        preFilteredRows: [{ values: { id: "select-choice-1" } }, { values: { id: "select-choice-2" } }],
        choices: [{ label: "fake-choice", value: "fake-choice" }]
      }
    };

    const { queryByText, getByText } = render(
      // @ts-ignore
      <SelectColumnFilter {...props} />
    );

    expect(queryByText("select-choice-1")).toBeNull();
    expect(getByText("fake-choice")).toBeDefined();
  });
});
