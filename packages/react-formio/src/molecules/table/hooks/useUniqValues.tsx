import type { Header } from "@tanstack/react-table";
import { useMemo } from "react";

export function useUniqValues<Data = any>({ header, filterVariant }: { header: Header<Data, unknown>; filterVariant: string }) {
  return useMemo(
    () => (filterVariant === "range" ? [] : Array.from(header.column.getFacetedUniqueValues().keys()).flat().sort().slice(0, 5000)),

    [header.column, filterVariant]
  );
}
