import { Row } from "react-table";

import type { ExtendedCell } from "../hooks/useCustomTable";

export function DefaultCells<Data extends object = {}>({ row }: { row: Row<Data> }) {
  return (
    <>
      {row.cells.map((cell: ExtendedCell<Data>, i) => {
        const { hidden, colspan } = cell.column;

        if (hidden) {
          return null;
        }

        return (
          <td
            colSpan={colspan}
            {...cell.getCellProps({
              className: cell.column.className,
              style: cell.column.style
            })}
            key={`tableInstance.page.cells.${cell.value || "value"}.${i}`}
          >
            {cell.render("Cell") as any}
          </td>
        );
      })}
    </>
  );
}
