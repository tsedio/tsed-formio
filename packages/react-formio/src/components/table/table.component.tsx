import classnames from "classnames";
import { PropsWithChildren } from "react";

import { PaginationProps } from "../pagination/pagination.component";
import { DrapNDropContainer } from "./components/dragNDropContainer";
import { TableProps, useCustomTable } from "./hooks/useCustomTable.hook";

export function Table<Data extends object = any>(props: PropsWithChildren<TableProps<Data>>) {
  const {
    className,
    tableInstance,
    CellHeader,
    isLoading,
    onClick,
    Loader,
    EmptyData,
    Row,
    data,
    disablePagination,
    Pagination,
    pageIndex,
    pageSize,
    pageSizes,
    setPageSize,
    totalLength,
    i18n,
    enableDragNDrop,
    children,
    onDrag,
    onDrop
  } = useCustomTable(props);

  // Render the UI for your table
  return (
    <DrapNDropContainer enableDragNDrop={enableDragNDrop}>
      <div className={classnames("table-group table-responsive", className)}>
        <table
          className={"table table-striped table-hover"}
          {...tableInstance.getTableProps()}
          /* style={{ marginBottom: disablePagination ? "-1px" : "0px" }} */
        >
          <thead>
            {tableInstance.headerGroups.map((headerGroup, i) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={`tableInstance.headerGroups${i}`}>
                {enableDragNDrop ? (
                  <th role='columnheader' className='text-center'>
                    <div className='table-cell-header'></div>
                  </th>
                ) : null}
                {headerGroup.headers.map((column) => (
                  <th
                    /* className='text-left py-2 align-top' */
                    {...column.getHeaderProps()}
                    key={`tableInstance.headers.column.${column.id}`}
                  >
                    <CellHeader column={column} />
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {!isLoading ? (
            <tbody {...tableInstance.getTableBodyProps()}>
              {(tableInstance as unknown as { page: any[] }).page.map((row: any, index: number) => {
                tableInstance.prepareRow(row);
                return (
                  <Row<Data>
                    index={index}
                    enableDragNDrop={enableDragNDrop}
                    onClick={onClick}
                    row={row}
                    key={`tableInstance.page.${row.id}`}
                    onDrag={onDrag}
                    onDrop={onDrop}
                  />
                );
              })}
            </tbody>
          ) : null}
        </table>
        {isLoading ? <Loader /> : null}
        {!data.length ? <EmptyData /> : null}
        {!isLoading && data.length && !disablePagination ? (
          <div className={"overflow-hidden"}>
            <Pagination
              {...(tableInstance as unknown as PaginationProps)}
              totalLength={totalLength}
              className={"text-sm"}
              pageIndex={pageIndex}
              pageSize={pageSize}
              pageSizes={pageSizes}
              setPageSize={setPageSize}
              i18n={i18n}
            />
          </div>
        ) : null}
        {children}
      </div>
    </DrapNDropContainer>
  );
}
