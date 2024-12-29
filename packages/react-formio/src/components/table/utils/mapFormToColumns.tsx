import type { BaseComponent, Form as FormType } from "@formio/core";
import { Components } from "@formio/js";
import FormioUtils from "@formio/js/utils";

import { DefaultCell } from "../components/defaultCell.component";
import { SelectColumnFilter } from "../filters/selectColumnFilter.component";
import { ExtendedColumn } from "../hooks/useCustomTable.hook";

export function mapFormToColumns(form: FormType): ExtendedColumn[] {
  const columns: ExtendedColumn[] = [];

  FormioUtils.eachComponent(form.components, (component: BaseComponent & { title: string; dataSrc: string; data: any }) => {
    if (component.tableView && component.key) {
      const cmp: any = Components.create(component, {}, null);

      const column: ExtendedColumn = {
        Header: component.label || component.title || component.key,
        accessor: `data.${component.key}`,
        className: "text-center",
        Cell: (props: any) => <DefaultCell {...props} render={(value: any) => cmp.asString(value)} />
      };

      if (component.type === "select" && component.dataSrc === "values") {
        column.Filter = SelectColumnFilter;
        (column as any).choices = component.data.values;
      }

      columns.push(column);
    }
  });

  return columns;
}
