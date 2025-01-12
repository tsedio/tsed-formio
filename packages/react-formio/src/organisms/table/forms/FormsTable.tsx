import "./components/FormsCell.js";

import { ColumnDef } from "@tanstack/react-table";

import type { FormType } from "../../../interfaces";
import { Table, TableProps } from "../../../molecules/table/Table";
import { getComponent } from "../../../registries/components.js";
import { FormsCell } from "./components/FormsCell.js";

export type FormsTableProps = Omit<TableProps<FormType>, "columns"> & {
  tags?: { label: string; value: string }[];
};

export function FormsTable({ ...props }: FormsTableProps) {
  const { i18n = (f: string) => f, tags } = props;
  const Cell = getComponent<typeof FormsCell>("FormsCell");

  const columns: ColumnDef<any>[] = [
    {
      header: i18n("Title"),
      accessorKey: "title",
      cell: (context) => <Cell {...context} i18n={i18n} />,
      meta: {
        cellProps: {
          colSpan: 2
        }
      }
    },
    {
      header: i18n("Tags"),
      accessorKey: "tags",
      meta: {
        cellProps: {
          hidden: true
        },
        filter: {
          variant: "select",
          layout: "react",
          options: tags
        }
      }
    }
    // {
    //   Header: i18n("Title"),
    //   accessor: "title",
    //   id: "title",
    //   Cell: (props: any) => <FormCell {...props} icon={props.icon} i18n={i18n} />,
    //   Filter: DefaultColumnFilter,
    //   colspan: 2
    // },
    // {
    //   Header: i18n("Tags"),
    //   accessor: "tags",
    //   id: "tags",
    //   hidden: true,
    //   Filter: (props: any) =>
    //     tags && tags.length ? (
    //       <SelectColumnFilter {...props} column={{ ...props.columns, choices: tags }} />
    //     ) : (
    //       <DefaultColumnFilter {...props} />
    //     )
    // }
  ];

  return <Table {...(props as any)} columns={columns} />;
}
