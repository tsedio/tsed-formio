import { Components, ExtendedComponentSchema } from "formiojs";
import FormioUtils from "formiojs/utils";
import { Column } from "react-table";
import { FormSchema } from "../../../interfaces";
import { DefaultCell } from "../components/defaultCell.component";
import { SelectColumnFilter } from "../filters/selectColumnFilter.component";

export function mapFormToColumns(form: FormSchema): Column[] {
  const columns: Column[] = [];

  FormioUtils.eachComponent(
    form.components,
    (component: ExtendedComponentSchema) => {
      if (component.tableView && component.key) {
        const cmp: any = Components.create(component, null, null, true);

        const column: Column = {
          Header: component.label || component.title || component.key,
          accessor: `data.${component.key}`,
          Cell: (props: any) => (
            <DefaultCell
              {...props}
              render={(value: any) => cmp.asString(value)}
            />
          )
        };

        if (component.type === "select" && component.dataSrc === "values") {
          column.Filter = SelectColumnFilter;
          (column as any).choices = component.data.values;
        }

        columns.push(column);
      }
    }
  );

  return columns;
}
