import { flexRender, RowData } from "@tanstack/react-table";
import cx from "classnames";
import { PropsWithChildren } from "react";

import { getComponent } from "../../registries/components";
import type { Pagination as DefaultPagination } from "../pagination/Pagination";
import type { DefaultCellFooter } from "./components/DefaultCellFooter";
import type { DefaultCellHeader } from "./components/DefaultCellHeader";
import { useTable, UseTableProps } from "./hooks/useTable";

export interface TableProps<Data extends RowData = any> extends UseTableProps<Data> {
  className?: string;

  enableFooter?: boolean;

  pageSizes?: number[];
}

export function Table<Data extends RowData = any>({ className, enableFooter, children, ...props }: PropsWithChildren<TableProps<Data>>) {
  const { tableInstance, i18n } = useTable(props);
  const CellHeader = getComponent<typeof DefaultCellHeader>("CellHeader");
  const CellFooter = getComponent<typeof DefaultCellFooter>("CellFooter");
  const Pagination = getComponent<typeof DefaultPagination>("Pagination");

  const { pagination } = tableInstance.getState();

  return (
    <div className={cx("table-group table-responsive", className)}>
      <table className='table table-striped table-hover'>
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const sort = header.column.getIsSorted();
                return (
                  <th
                    data-testid={`head-cell-${header.id}`}
                    key={header.id}
                    aria-sort={sort ? (sort === "asc" ? "ascending" : "descending") : "none"}
                  >
                    {header.isPlaceholder ? null : <CellHeader header={header} i18n={i18n} />}
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row) => {
            return (
              <tr key={row.id} data-testid={`body-row-${row.id}`}>
                {row
                  .getVisibleCells()
                  .filter((cell) => !cell.column.columnDef.meta?.hidden)
                  .map((cell) => {
                    return (
                      <td {...cell.column.columnDef?.meta?.cellProps} key={cell.id} data-testid={`body-cell-${cell.id}`}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    );
                  })}
              </tr>
            );
          })}
        </tbody>
        {enableFooter && (
          <tfoot>
            {tableInstance.getFooterGroups().map((footerGroup) => (
              <tr key={footerGroup.id}>
                {footerGroup.headers.map((header) => (
                  <th key={header.id}>{header.isPlaceholder ? null : <CellFooter header={header} i18n={i18n} />}</th>
                ))}
              </tr>
            ))}
          </tfoot>
        )}
      </table>
      <div className={"overflow-hidden flex flex-wrap"}>
        {props.data.length && pagination && (
          <Pagination
            className={"flex-1"}
            canNextPage={tableInstance.getCanNextPage()}
            canPreviousPage={tableInstance.getCanPreviousPage()}
            pageIndex={pagination.pageIndex}
            pageSize={pagination.pageSize}
            pageSizes={props.pageSizes}
            i18n={i18n}
            pageCount={tableInstance.getPageCount()}
            rowCount={props.rowCount}
            onPageIndexChange={(page) => tableInstance.setPageIndex(page)}
            onClickPreviousPage={() => tableInstance.previousPage()}
            onClickNextPage={() => tableInstance.nextPage()}
            onPageSizeChange={(pageSize) => tableInstance.setPageSize(pageSize)}
          />
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
