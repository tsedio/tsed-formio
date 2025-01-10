import { DefaultOperationButton, OperationButtonProps } from "./DefaultOperationButton";

export interface DefaultCellOperationsProps {
  operations: (OperationButtonProps & {
    OperationButton: typeof DefaultOperationButton;
    permissionsResolver?(data: unknown, ctx: any): boolean;
  })[];
  row: any;

  onClick: (data: any, action: string) => void;
  ctx: any;
  i18n: (i18n: string) => string;
}

export function DefaultCellOperations({ operations, row, onClick, ctx, i18n }: DefaultCellOperationsProps) {
  const data = row.original;

  return (
    <div className='btn-group'>
      {operations
        .filter(({ permissionsResolver }) => !permissionsResolver || permissionsResolver(data, ctx))
        .map(({ OperationButton = DefaultOperationButton, ...operation }, index: number) => {
          return (
            <OperationButton
              key={operation.action}
              {...operation}
              data-testid={`operation-${index}-${operation.action}`}
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
