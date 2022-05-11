import React from "react";
import { Hooks } from "react-table";
import { Operation } from "../../../interfaces";
import { DefaultCellOperations } from "../components/defaultCellOperations.component";

export type UseOperationsHookProps = {
  CellOperations?: React.ComponentType;
  operations: Operation[];
  onClick?: (data: any, event: string) => void;
  i18n?: (f: string) => string;
  ctx?: any;
};

export function useOperations<D extends object = {}>({
  operations,
  CellOperations = DefaultCellOperations,
  onClick,
  i18n = (f: string) => f,
  ctx
}: UseOperationsHookProps) {
  return (hooks: Hooks<D>): void => {
    hooks.visibleColumns.push((columns) => {
      if (!operations.length) {
        return columns;
      }

      return [
        ...columns,
        {
          id: "operations",
          groupByBoundary: true,
          Header: () => <div className={"text-center"}>{i18n("Operations")}</div>,
          Cell: (props: any) => <CellOperations {...props} operations={operations} onClick={onClick} ctx={ctx} i18n={i18n} />
        }
      ];
    });
  };
}
