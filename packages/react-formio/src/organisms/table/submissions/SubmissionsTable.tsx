import type { FormType, SubmissionType } from "../../../interfaces";
import type { JSONRecord } from "../../../interfaces/JSONRecord";
import { Table, type TableProps } from "../../../molecules/table/Table";
import { mapFormToColumns } from "../../../molecules/table/utils/mapFormToColumns.js";

export type SubmissionsTableProps<Data extends object = JSONRecord> = Omit<TableProps<SubmissionType<Data>>, "columns"> & {
  form?: FormType;
};

export function SubmissionsTable<Data extends object = JSONRecord>({ form, ...props }: SubmissionsTableProps<Data>) {
  const columns: any[] | undefined = form && mapFormToColumns({ form: form });

  return <Table {...(props as any)} columns={columns!} />;
}
