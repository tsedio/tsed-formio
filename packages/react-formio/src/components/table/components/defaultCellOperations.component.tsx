import React from "react";
import { DefaultOperationButton } from "./defaultOperationButton.component";

export function DefaultCellOperations({ operations, row, onClick, ctx, i18n }: any) {
  const data = row.original;

  return (
    <div className='btn-group'>
      {operations
        .filter(({ permissionsResolver }: any) => !permissionsResolver || permissionsResolver(data, ctx))
        .map(({ OperationButton = DefaultOperationButton, ...operation }: any) => {
          return (
            <OperationButton
              key={operation.action}
              {...operation}
              onClick={(action: string) => onClick(data, action)}
              data={data}
              i18n={i18n}
              ctx={ctx}
            />
          );
        })}
    </div>
  );
}
