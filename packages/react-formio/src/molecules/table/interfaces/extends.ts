import type { RowData } from "@tanstack/react-table";
import { TdHTMLAttributes } from "react";

import { FilterOptions } from "../filters/Filters";

declare module "@tanstack/react-table" {
  //allows us to define custom properties for our columns
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ColumnMeta<TData extends RowData, TValue> {
    type?: "string" | "number" | "boolean" | "date" | string;
    format?: string;
    labels?: Record<string, string>;
    filter?: FilterOptions;
    sort?: string;
    cellProps?: TdHTMLAttributes<HTMLTableCellElement>;
    /**
     * Hide the cell
     */
    hidden?: boolean;
  }
}
