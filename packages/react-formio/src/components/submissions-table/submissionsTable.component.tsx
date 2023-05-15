import React from "react";

import { FormSchema, Submission } from "../../interfaces";
import { TableProps } from "../table/hooks/useCustomTable.hook";
import { Table } from "../table/table.component";
import { mapFormToColumns } from "../table/utils/mapFormToColumns";

export type SubmissionsTableProps = Omit<TableProps<Submission>, "columns"> & {
  form?: FormSchema;
};

export function SubmissionsTable({ form, ...props }: SubmissionsTableProps) {
  const columns: any[] | undefined = form && mapFormToColumns(form);

  return <Table {...props} columns={columns!} />;
}
