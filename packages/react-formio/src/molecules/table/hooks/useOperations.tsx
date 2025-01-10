import { type ComponentType, type FunctionComponent } from "react";
import { Hooks } from "react-table";

import { Operation } from "../../../interfaces";
import { DefaultCellOperations } from "../components/DefaultCellOperations";

export type UseOperationsHookProps = {
  CellOperations?: FunctionComponent | ComponentType<{}>;
  operations: Operation[];
  onClick?: (data: any, event: string) => void;
  i18n?: (f: string) => string;
  ctx?: any;
};

export function useOperations<D extends object = {}>({
  operations,
  CellOperations = DefaultCellOperations as FunctionComponent,
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
