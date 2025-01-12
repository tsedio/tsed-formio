import type { CellContext } from "@tanstack/react-table";

import type { Operation } from "../../../interfaces";
import { getComponent, registerComponent } from "../../../registries/components";
import type { DefaultOperationButton } from "./DefaultOperationButton";

export interface DefaultCellOperationsProps<Data = any> {
  info: CellContext<Data, unknown>;
  operations: Operation<Data>[];
  metadata?: Record<string, unknown>;
  i18n: (i18n: string) => string;
  onClick?: (data: any, operation: Operation<Data>) => void;
}

export function DefaultCellOperations({ info, metadata, operations, i18n, onClick }: DefaultCellOperationsProps) {
  const Button = getComponent<typeof DefaultOperationButton>("OperationButton");
  return (
    <div className='btn-group'>
      {operations
        .filter(({ permissionsResolver }) => {
          return !permissionsResolver || permissionsResolver(info.row.original, metadata);
        })
        .map((operation) => {
          return (
            <Button
              data-testid={`operation-${info.row.id}-${operation.action}`}
              key={operation.action}
              operation={operation}
              metadata={metadata}
              info={info}
              i18n={i18n}
              onClick={() => {
                onClick?.(info.row.original, operation);
              }}
            />
          );
        })}
    </div>
  );
}

registerComponent("CellOperations", DefaultCellOperations);
