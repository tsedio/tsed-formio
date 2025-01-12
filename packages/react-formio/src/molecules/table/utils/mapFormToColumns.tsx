import "../interfaces/extends";

import { ColumnDef, ColumnDefResolved, createColumnHelper } from "@tanstack/react-table";
import { Components } from "formiojs";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";

import type { ComponentType, FormType } from "../../../interfaces";
import { getComponent } from "../../../registries/components";
import type { DefaultCell } from "../components/DefaultCell";
import type { FilterVariants } from "../filters/Filters.js";

const MAP_TYPES: Record<string, FilterVariants> = {
  number: "range",
  currency: "range",
  checkbox: "boolean"
};

export function mapFormToColumns<Data = any>(form: FormType, columns: ColumnDefResolved<Data, any>[] = []): ColumnDef<Data, any>[] {
  const columnHelper = createColumnHelper<Data>();
  const columnsToKeep = cloneDeep(columns);

  const Cell = getComponent<typeof DefaultCell>("Cell");

  const columnsFromComponents = form.components
    .flatMap((component) => {
      if (component.type === "tabs") {
        return component.components.flatMap((subComponent: ComponentType) => subComponent.components);
      }

      return [component];
    })
    .filter((component) => component.tableView)
    .map((component: ComponentType) => {
      const cmp: any = Components.create(component, {}, null, true);

      const columnIndex = columnsToKeep.findIndex(({ accessorKey }) => {
        return accessorKey === `data.${component.key}`;
      });

      let column = columnsToKeep[columnIndex];

      if (column) {
        columnsToKeep.splice(columnIndex, 1);
      }

      return columnHelper.accessor(`data.${component.key}` as any, {
        header: (component.label || component.title || component.key)?.replace(/:/, ""),
        cell: (info) => {
          return <Cell value={info.getValue() as Data} render={(value: Data) => cmp.asString(value)} />;
        },
        meta: {
          filter: { variant: MAP_TYPES[component.type!] || "text" },
          ...(column?.meta || {})
        },
        ...(column || {})
      });
    });

  const mergedColumns = columnsFromComponents.concat(columnsToKeep as any[]).map((column, index) => ({
    ...column,
    meta: {
      ...(column.meta || {}),
      order: get(column, "meta.order", index * 10)
    },
    cell:
      column.cell ||
      ((info) => {
        return <Cell value={info.getValue() as Data} render={(value: Data) => value} />;
      })
  }));

  return mergedColumns.sort((a, b) => (a.meta.order > b.meta.order ? 1 : -1)) as ColumnDef<Data, any>[];
}
