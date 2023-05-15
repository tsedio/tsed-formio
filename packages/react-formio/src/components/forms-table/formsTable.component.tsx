import React from "react";

import { FormSchema } from "../../interfaces";
import { DefaultColumnFilter } from "../table/filters/defaultColumnFilter.component";
import { SelectColumnFilter } from "../table/filters/selectColumnFilter.component";
import { TableProps } from "../table/hooks/useCustomTable.hook";
import { Table } from "../table/table.component";
import { FormsCell as DefaultFormCell } from "./components/formCell.component";

export type FormsTableProps = Omit<TableProps<FormSchema>, "columns"> & {
  icon?: string;
  tags?: { label: string; value: string }[];
};

export function FormsTable({ Cell, ...props }: FormsTableProps) {
  const { i18n = (f: string) => f, tags } = props;
  const FormCell = Cell || (DefaultFormCell as any);
  const columns = [
    {
      Header: i18n("Title"),
      accessor: "title",
      id: "title",
      Cell: (props: any) => <FormCell {...props} icon={props.icon} i18n={i18n} />,
      Filter: DefaultColumnFilter,
      colspan: 2
    },
    {
      Header: i18n("Tags"),
      accessor: "tags",
      id: "tags",
      hidden: true,
      Filter: (props: any) =>
        tags && tags.length ? (
          <SelectColumnFilter {...props} column={{ ...props.columns, choices: tags }} />
        ) : (
          <DefaultColumnFilter {...props} />
        )
    }
  ];

  return <Table {...props} columns={columns} />;
}
