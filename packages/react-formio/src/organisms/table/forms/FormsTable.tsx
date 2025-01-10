import type { FormType } from "../../../interfaces";
import { DefaultColumnFilter, SelectColumnFilter, Table, TableProps } from "../../../molecules/table";
import { FormsCell as DefaultFormCell } from "./components/FormCell";

export type FormsTableProps = Omit<TableProps<FormType>, "columns"> & {
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

  return <Table {...(props as any)} columns={columns} />;
}
