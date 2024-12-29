import type { Form as FormType } from "@formio/core";

import { Submission } from "../../interfaces";
import { TableProps } from "../table/hooks/useCustomTable.hook";
import { Table } from "../table/table.component";
import { mapFormToColumns } from "../table/utils/mapFormToColumns";

export type SubmissionsTableProps = Omit<TableProps<Submission>, "columns"> & {
  form?: FormType;
};

export function SubmissionsTable({ form, ...props }: SubmissionsTableProps) {
  const columns: any[] | undefined = form && mapFormToColumns(form);

  return <Table {...props} columns={columns!} />;
}
