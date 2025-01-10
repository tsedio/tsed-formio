import { Components, Utils } from "formiojs";

import type { ComponentType, FormType } from "../../../interfaces";
import { DefaultCell } from "../components/DefaultCell";
import { SelectColumnFilter } from "../filters/SelectColumnFilter";
import { ExtendedColumn } from "../hooks/useCustomTable";

export function mapFormToColumns(form: FormType): ExtendedColumn[] {
  const columns: ExtendedColumn[] = [];

  Utils.eachComponent(form.components, (component: ComponentType) => {
    if (component.tableView && component.key) {
      const cmp: any = Components.create(component, {}, null, true);

      const column: ExtendedColumn = {
        Header: component.label || component.title || component.key,
        accessor: `data.${component.key}`,
        className: "text-center",
        Cell: (props: any) => <DefaultCell {...props} render={(value: any) => cmp.asString(value)} />
      };

      if (component.type === "select" && component.dataSrc === "values") {
        (column as any).Filter = SelectColumnFilter;
        (column as any).choices = component.data.values;
      }

      columns.push(column);
    }
  });

  return columns;
}
