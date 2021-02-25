import React from "react";
import { FormSchema, Submission } from "../../interfaces";
import { Table, TableProps } from "../table/table.component";
import { mapFormToColumns } from "../table/utils/mapFormToColumns";

export type SubmissionsTableProps = Omit<TableProps<Submission>, "columns"> & {
  form?: FormSchema;
};

export function SubmissionsTable({ form, ...props }: SubmissionsTableProps) {
  const columns: any[] = React.useMemo(() => form && mapFormToColumns(form), [
    form
  ]);

  return <Table {...props} columns={columns} />;
}
