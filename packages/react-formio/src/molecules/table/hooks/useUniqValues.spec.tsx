import { renderHook } from "@testing-library/react";
import { vi } from "vitest";

import { useUniqValues } from "./useUniqValues";

function createHeader({ variant, labels, values = [] }: { variant?: string; labels?: Record<string, string>; values?: string[] }) {
  return {
    column: {
      columnDef: {
        meta: {
          filter: {
            variant
          },
          labels
        }
      },
      getFacetedUniqueValues: () => new Map(values.map((value) => [value, 1]))
    }
  } as any;
}

describe("useUniqValues", () => {
  it("should return boolean options with the custom labels", () => {
    const header = createHeader({
      variant: "boolean",
      labels: {
        yes: "Enabled",
        No: "Disabled"
      }
    });

    const { result } = renderHook(() => useUniqValues({ header }));

    expect(result.current).toEqual([
      { label: "Enabled", value: "true" },
      { label: "Disabled", value: "false" }
    ]);
  });

  it("should map faceted unique values to select options", () => {
    const header = createHeader({
      values: ["beta", "alpha"]
    });

    const { result } = renderHook(() => useUniqValues({ header }));

    expect(result.current).toEqual([
      { label: "alpha", value: "alpha" },
      { label: "beta", value: "beta" }
    ]);
  });

  it("should return provided select options", () => {
    const header = createHeader({});
    const options = [
      { label: "First", value: "first" },
      { label: "Second", value: "second" }
    ];

    const { result } = renderHook(() => useUniqValues({ header, options: { variant: "select", options } as any }));

    expect(result.current).toEqual(options);
  });

  it("should resolve select options from callback", () => {
    const header = createHeader({});
    const optionsFn = vi.fn().mockReturnValue([{ label: "From callback", value: "callback" }]);

    const { result } = renderHook(() =>
      useUniqValues({
        header,
        options: { variant: "select", options: optionsFn } as any
      })
    );

    expect(optionsFn).toHaveBeenCalledWith({
      header,
      options: { variant: "select", options: optionsFn }
    });
    expect(result.current).toEqual([{ label: "From callback", value: "callback" }]);
  });
});
