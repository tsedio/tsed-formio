import type { CellContext } from "@tanstack/react-table";

import type { CellMetadata, JSON, Operation } from "../../../interfaces";
import { getComponent, registerComponent } from "../../../registries/components";
import type { DefaultOperationButton } from "./DefaultOperationButton";

export interface DefaultCellOperationsProps<Data extends { [key: string]: JSON } = { [key: string]: JSON }> {
  info: CellContext<Data, unknown>;
  operations: Operation<Data>[];
  metadata?: CellMetadata;
  i18n: (i18n: string) => string;
  onClick?: (data: any, operation: Operation<Data>) => void;
}

export function DefaultCellOperations<Data extends { [key: string]: JSON } = { [key: string]: JSON }>({
  info,
  metadata,
  operations,
  i18n,
  onClick
}: DefaultCellOperationsProps<Data>) {
  const Button = getComponent<typeof DefaultOperationButton<Data>>("OperationButton");
  return (
    <div className='btn-group'>
      {operations
        .filter(({ permissionsResolver, ...operation }) => {
          return !permissionsResolver || permissionsResolver(info.row.original, metadata || {}, operation);
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
