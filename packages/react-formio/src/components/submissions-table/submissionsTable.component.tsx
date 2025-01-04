import { FormType, SubmissionType } from "../../interfaces";
import { TableProps } from "../table/hooks/useCustomTable.hook";
import { Table } from "../table/table.component";
import { mapFormToColumns } from "../table/utils/mapFormToColumns";

export type SubmissionsTableProps = Omit<TableProps<SubmissionType>, "columns"> & {
  form?: FormType;
};

export function SubmissionsTable({ form, ...props }: SubmissionsTableProps) {
  const columns: any[] | undefined = form && mapFormToColumns(form);

  return <Table {...props} columns={columns!} />;
}
