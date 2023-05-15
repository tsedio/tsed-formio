import classnames from "classnames";
import React, { PropsWithChildren } from "react";

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
    i18n,
    children
  } = useCustomTable(props);

  // Render the UI for your table
  return (
    <div className={classnames("table-group table-responsive", className)}>
      <table
        className={"table table-striped table-hover"}
        {...tableInstance.getTableProps()}
        /* style={{ marginBottom: disablePagination ? "-1px" : "0px" }} */
      >
        <thead>
          {tableInstance.headerGroups.map((headerGroup, i) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`tableInstance.headerGroups${i}`}>
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
            {tableInstance.page.map((row) => {
              tableInstance.prepareRow(row);
              return <Row<Data> onClick={onClick} row={row} key={`tableInstance.page.${row.id}`} />;
            })}
          </tbody>
        ) : null}
      </table>
      {isLoading ? <Loader /> : null}
      {!data.length ? <EmptyData /> : null}
      {!isLoading && data.length && !disablePagination ? (
        <div className={"overflow-hidden"}>
          <Pagination
            {...tableInstance}
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
  );
}
