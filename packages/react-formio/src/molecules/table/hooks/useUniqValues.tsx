import { useMemo } from "react";

import { SelectOptionProps } from "../../../molecules/forms/select/Select.interface";
import type { DefaultFilterProps } from "../components/DefaultFilter";
import { FilterSelectOptions } from "../filters/Filters";

type UseUniqValuesProps<Data = any> = DefaultFilterProps<Data> & {
  options?: FilterSelectOptions<Data>;
};

export function useUniqValues<Data = any>({ header, options }: UseUniqValuesProps<Data>): SelectOptionProps[] {
  return useMemo(() => {
    const providedOptions = options?.options;

    if (providedOptions) {
      if (typeof providedOptions === "function") {
        return providedOptions({ header, options: options as FilterSelectOptions<Data> });
      }

      return providedOptions;
    }

    switch (header.column.columnDef.meta?.filter?.variant) {
      case "boolean":
        return [
          { label: header.column.columnDef.meta?.labels?.["yes"] || "Yes", value: "true" },
          {
            label: header.column.columnDef.meta?.labels?.["no"] || header.column.columnDef.meta?.labels?.["No"] || "No",
            value: "false"
          }
        ];

      default:
        return Array.from(header.column.getFacetedUniqueValues().keys())
          .flat()
          .filter((value) => value !== undefined && value !== null)
          .map((value) => String(value))
          .sort()
          .slice(0, 5000)
          .map((value) => ({
            label: value,
            value
          }));
    }
  }, [header, options]);
}
