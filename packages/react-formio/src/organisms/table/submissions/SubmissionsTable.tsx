import type { FormType, JSON, SubmissionType } from "../../../interfaces";
import { Table, type TableProps } from "../../../molecules/table/Table";
import { mapFormToColumns } from "../../../molecules/table/utils/mapFormToColumns.js";

export type SubmissionsTableProps<Data extends { [key: string]: JSON } = { [key: string]: JSON }> = Omit<
  TableProps<SubmissionType<Data>>,
  "columns"
> & {
  form?: FormType;
};

export function SubmissionsTable<Data extends { [key: string]: JSON } = { [key: string]: JSON }>({
  form,
  ...props
}: SubmissionsTableProps<Data>) {
  const columns: any[] | undefined = form && mapFormToColumns(form);

  return <Table {...(props as any)} columns={columns!} />;
}
