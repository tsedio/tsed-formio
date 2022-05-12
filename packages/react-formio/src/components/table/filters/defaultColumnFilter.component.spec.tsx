import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, act } from "@testing-library/react";
import React from "react";
import { DefaultColumnFilter } from "./defaultColumnFilter.component";

describe("DefaultColumnFilter", () => {
  it("should display text-field and handle change", async () => {
    const props = {
      filterId: "data.id",
      setFilterId: jest.fn(),
      name: "data.id",
      column: { id: "id", filterValue: "", setFilter: jest.fn() }
    };

    const { getByRole } = render(
      // @ts-ignore
      <DefaultColumnFilter {...props} />
    );

    const input = getByRole("textbox");

    // eslint-disable-next-line testing-library/no-unnecessary-act
    await act(async () => {
      fireEvent.change(input, { target: { value: "value-test" } });

      await new Promise((resolve) => setTimeout(resolve, 300));
    });

    expect(props.column.setFilter).toHaveBeenCalledWith("value-test");
    expect(props.setFilterId).toHaveBeenCalledWith("id");
  });
});
