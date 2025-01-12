import type { FormType, SubmissionType } from "../../../interfaces";
import { Table, type TableProps } from "../../../molecules/table/Table";
import { mapFormToColumns } from "../../../molecules/table/utils/mapFormToColumns.js";

export type SubmissionsTableProps = Omit<TableProps<SubmissionType>, "columns"> & {
  form?: FormType;
};

export function SubmissionsTable({ form, ...props }: SubmissionsTableProps) {
  const columns: any[] | undefined = form && mapFormToColumns(form);

  return <Table {...props} columns={columns!} />;
}
