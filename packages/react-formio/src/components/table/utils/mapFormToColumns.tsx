import { Components } from "formiojs";
import FormioUtils from "formiojs/utils";

import { FormType } from "../../../interfaces";
import { ComponentType } from "../../../interfaces/ComponentType";
import { DefaultCell } from "../components/defaultCell.component";
import { SelectColumnFilter } from "../filters/selectColumnFilter.component";
import { ExtendedColumn } from "../hooks/useCustomTable.hook";

export function mapFormToColumns(form: FormType): ExtendedColumn[] {
  const columns: ExtendedColumn[] = [];

  FormioUtils.eachComponent(form.components, (component: ComponentType) => {
    if (component.tableView && component.key) {
      const cmp: any = Components.create(component, {}, null, true);

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
