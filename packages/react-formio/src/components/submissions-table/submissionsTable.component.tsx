import { FormType, SubmissionType } from "../../interfaces";
import { mapFormToColumns, Table, type TableProps } from "../../molecules/table";

export type SubmissionsTableProps = Omit<TableProps<SubmissionType>, "columns"> & {
  form?: FormType;
};

export function SubmissionsTable({ form, ...props }: SubmissionsTableProps) {
  const columns: any[] | undefined = form && mapFormToColumns(form);

  return <Table {...props} columns={columns!} />;
}
