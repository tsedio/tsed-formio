import { Row } from "react-table";

export interface DefaultRowProps<Data extends object = {}> {
  onClick: (data: any, action: string) => void;
  row: Row<Data>;
}

export function DefaultRow<Data extends object = {}>({ onClick, row }: DefaultRowProps<Data>) {
  return (
    <tr onClick={() => onClick(row.original, "row")} {...row.getRowProps()}>
      {row.cells.map((cell, i) => {
        const { hidden, colspan } = cell.column as any;
        if (hidden) {
          return null;
        }
        return (
          <td colSpan={colspan} {...cell.getCellProps()} key={`tableInstance.page.cells.${cell.value || "value"}.${i}`}>
            {cell.render("Cell")}
          </td>
        );
      })}
    </tr>
  );
}
