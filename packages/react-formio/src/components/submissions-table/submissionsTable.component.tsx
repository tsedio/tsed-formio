import React from "react";
import { FormSchema } from "../../interfaces";
import { Table, TableProps } from "../table/table.component";
import { mapFormToColumns } from "../table/utils/mapFormToColumns";

export type SubmissionsTableProps<
  Data extends Record<string, unknown> = {}
> = Omit<TableProps<FormSchema>, "columns"> & {
  form?: FormSchema;
};

export function SubmissionsTable({ form, ...props }: SubmissionsTableProps) {
  const columns: any[] = React.useMemo(() => mapFormToColumns(form), [form]);

  return <Table {...props} columns={columns} />;
}
