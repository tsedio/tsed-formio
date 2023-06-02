import React from "react";
import { Row } from "react-table";

export function DefaultCells<Data extends object = {}>({ row }: { row: Row<Data> }) {
  return (
    <>
      {row.cells.map((cell, i) => {
        const { hidden, colspan } = cell.column as any;

        if (hidden) {
          return null;
        }

        return (
          <td colSpan={colspan} {...cell.getCellProps()} key={`tableInstance.page.cells.${cell.value || "value"}.${i}`}>
            {cell.render("Cell") as any}
          </td>
        );
      })}
    </>
  );
}
