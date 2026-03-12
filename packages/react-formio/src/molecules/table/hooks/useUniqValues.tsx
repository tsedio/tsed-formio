import type { Header } from "@tanstack/react-table";
import { useMemo } from "react";

import { SelectOptionProps } from "../../../molecules/forms/select/Select.interface";

export function useUniqValues<Data = any>({ header }: { header: Header<Data, unknown> }): SelectOptionProps[] {
  return useMemo(() => {
    switch (header.column.columnDef.meta?.filter?.variant) {
      case "boolean":
        return [
          { label: header.column.columnDef.meta?.labels?.["yes"] || "Yes", value: true },
          { label: header.column.columnDef.meta?.labels?.["no"] || header.column.columnDef.meta?.labels?.["No"] || "No", value: false }
        ];

      default:
        return Array.from(header.column.getFacetedUniqueValues().keys())
          .flat()
          .sort()
          .slice(0, 5000)
          .map((i) => ({
            label: i,
            value: i
          }));
    }
  }, [header.column]);
}
