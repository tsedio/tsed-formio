import {
  type ColumnDef,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  type RowData,
  type TableOptions,
  type TableState,
  useReactTable
} from "@tanstack/react-table";
import { useEffect } from "react";

import { Operation } from "../../../interfaces";
import { getComponent } from "../../../registries/components";
import type { DefaultCellOperations } from "../components/DefaultCellOperations";

export interface UseTableProps<Data extends RowData> extends TableOptions<Data> {
  operations: Operation<Data>[];
  metadata?: Record<string, unknown>;
  i18n?: (i18n: string) => string;
  onClick?: (data: any, operation: Operation<Data>) => void;
  manualFaceted?: boolean;
  onChange?: (query: TableState) => void;
  pageSizes?: number[];
}

export function useTable<Data extends RowData>(props: UseTableProps<Data>) {
  const Operations = getComponent<typeof DefaultCellOperations>("CellOperations");
  const i18n = props.i18n || ((f: string) => f);

  // const [pagination, setPagination] = useState({
  //   pageIndex: 0, //initial page index
  //   pageSize: 10 //default page size
  // });

  const operations = props.operations.length
    ? ([
        {
          id: "operations",
          header: i18n("Operations"),
          cell: (info) => (
            <Operations info={info} operations={props.operations} metadata={props.metadata} onClick={props.onClick} i18n={i18n} />
          )
        }
      ] satisfies ColumnDef<Data>[])
    : [];

  const tableInstance = useReactTable({
    ...props,
    columns: [...props.columns, ...operations],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: !props.manualFiltering ? getFilteredRowModel() : undefined,
    getSortedRowModel: !props.manualSorting ? getSortedRowModel() : undefined,
    getFacetedRowModel: !props.manualFaceted ? getFacetedRowModel() : undefined, // client-side faceting
    getFacetedUniqueValues: !props.manualFaceted ? getFacetedUniqueValues() : undefined // generate unique values for select filter/autocomplete
  });

  const { columnFilters, sorting, pagination, columnOrder, columnPinning, columnSizing, columnSizingInfo, columnVisibility, globalFilter } =
    tableInstance.getState();

  useEffect(() => {
    if (props.onChange) {
      props.onChange(tableInstance.getState());
    }
  }, [columnFilters, sorting, pagination, columnOrder, columnPinning, columnSizing, columnSizingInfo, columnVisibility, globalFilter]);

  return {
    i18n,
    tableInstance
  };
}
