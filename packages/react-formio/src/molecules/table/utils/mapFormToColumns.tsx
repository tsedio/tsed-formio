import "../interfaces/extends";

import { ColumnDef, ColumnDefResolved, createColumnHelper } from "@tanstack/react-table";
import cloneDeep from "lodash/cloneDeep";
import get from "lodash/get";

import type { ComponentType, FormType } from "../../../interfaces";
import { getComponent } from "../../../registries/components";
import type { DefaultCell } from "../components/DefaultCell";
import type { FilterVariants } from "../filters/Filters";

const MAP_FILTER_TYPES: Record<string, FilterVariants> = {
  number: "range",
  currency: "range",
  checkbox: "boolean"
} as const;

const MAP_TYPES = {
  date: "date",
  datetime: "date",
  number: "number",
  currency: "currency",
  checkbox: "boolean"
} as const;

function getColumnIdentity<Data>(column: ColumnDef<Data, any> | ColumnDefResolved<Data, any>) {
  if ("id" in column && typeof column.id === "string") {
    return column.id;
  }

  if ("accessorKey" in column && typeof column.accessorKey === "string") {
    return column.accessorKey;
  }

  return undefined;
}

export function mapFormToColumns<Data = any>({
  form,
  columns = [],
  prefix = "data."
}: {
  form: FormType;
  columns?: ColumnDefResolved<Data, any>[];
  prefix?: string;
}): ColumnDef<Data, any>[] {
  const columnHelper = createColumnHelper<Data>();
  const columnsToKeep = cloneDeep(columns);

  const columnsFromComponents = form.components
    .flatMap((component) => {
      if (component.type === "tabs") {
        return component.components?.flatMap((subComponent: ComponentType) => subComponent.components);
      }

      return [component];
    })
    .filter((component) => component?.tableView)
    .map((c) => {
      const component = c as ComponentType;
      const componentColumnKey = `${prefix}${component.key}`;
      const matchingKeys = new Set([component.key, componentColumnKey]);

      const columnIndex = columnsToKeep.findIndex((column) => {
        const identity = getColumnIdentity(column);

        return identity ? matchingKeys.has(identity) : false;
      });

      let column = columnsToKeep[columnIndex];

      if (column) {
        columnsToKeep.splice(columnIndex, 1);
      }

      const mappedVariant = MAP_FILTER_TYPES[component.type as keyof typeof MAP_FILTER_TYPES] || "text";
      const filter = column?.meta?.filter?.variant ? column.meta.filter : { variant: mappedVariant };

      return columnHelper.accessor(componentColumnKey as any, {
        header: (component.label || component.title || component.key)?.replace(/:/, ""),
        meta: {
          type: (MAP_TYPES[component.type as keyof typeof MAP_TYPES] || component.type) as any,
          filter,
          ...(column?.meta || {})
        },
        ...(column || {})
      });
    });

  const dedupedColumns = [...columnsFromComponents, ...(columnsToKeep as any[])].reduce<ColumnDef<Data, any>[]>((acc, column) => {
    const identity = getColumnIdentity(column);

    if (identity && acc.some((existingColumn) => getColumnIdentity(existingColumn) === identity)) {
      return acc;
    }

    acc.push(column);
    return acc;
  }, []);

  const mergedColumns = dedupedColumns.map((column, index) => {
    const Cell = getComponent<typeof DefaultCell>([`Cell.${column.id}`, `Cell.${column.meta?.type}`, "Cell"]);

    return {
      ...column,
      meta: {
        ...column?.meta,
        order: get(column, "meta.order", index * 10)
      },
      cell: column.cell || Cell
    };
  });

  return mergedColumns.sort((a, b) => (a.meta.order > b.meta.order ? 1 : -1)) as ColumnDef<Data, any>[];
}
