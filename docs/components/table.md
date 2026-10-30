# Table

::: tip Storybook
Browse the props, controls and all the stories of `Table` in [Storybook](storybook:/docs/molecules-table--docs).
:::

The `Table` component renders a data grid with sorting, column filters, pagination and a column of operation buttons on
each row. It is built on top of [TanStack Table](https://tanstack.com/table/latest) (`@tanstack/react-table` v8) and
accepts its table options. It is the base of the [FormsTable](/components/forms-table),
[SubmissionsTable](/components/submissions-table) and [ActionsTable](/components/actions-table) components.

## Usage

The `Table` resolves its cells, filters, header and pagination from the components registry. Import the `all` entry
point once to register the default implementations, then import the component itself:

```tsx
import "@tsed/react-formio/molecules/table/all";

import { Table } from "@tsed/react-formio/molecules/table/Table";
import { mapFormToColumns } from "@tsed/react-formio/molecules/table/utils/mapFormToColumns";

const columns = mapFormToColumns({ form });

export function ProductsTable({ submissions }) {
  return (
    <Table
      data={submissions}
      columns={columns}
      operations={[
        { title: "Edit", action: "edit", alias: "row", icon: "edit" },
        { action: "delete", icon: "trash", buttonType: "danger" }
      ]}
      onClick={(submission, operation) => console.log(operation.action, submission)}
    />
  );
}
```

<StoryEmbed id="molecules-table--usage" height="700px" />

## Props

`Table` accepts the [TanStack table options](https://tanstack.com/table/latest/docs/api/core/table#options)
(`initialState`, `state`, `manualPagination`, `manualSorting`, `manualFiltering`, `pageCount`, `getRowId`...), except
`getCoreRowModel` which is provided by the component, plus the following props:

| Name               | Type                                           | Default | Description                                                                                                         |
|--------------------|------------------------------------------------|---------|---------------------------------------------------------------------------------------------------------------------|
| `data`             | `Data[]`                                       |         | Rows to display.                                                                                                    |
| `columns`          | `ColumnDef<Data>[]`                            |         | TanStack column definitions. Use `mapFormToColumns` to build them from a form.                                      |
| `operations`       | `Operation<Data>[]`                            |         | Buttons displayed in an extra "Operations" column. Pass an empty array to hide the column.                          |
| `onClick`          | `(data: Data, operation: Operation) => void`   |         | Called when an operation button is clicked, or when a cell is clicked (with `{ action: "row" }`).                   |
| `onChange`         | `(state: TableState) => void`                  |         | Called with the table state when the filters, sorting, pagination, column order, pinning, sizing or visibility change. |
| `metadata`         | `Record<string, unknown>`                      |         | Extra data passed to the operations `permissionsResolver`.                                                          |
| `enablePagination` | `boolean`                                      | `true`  | Displays the pagination below the table (only when `data` is not empty).                                            |
| `pageSizes`        | `number[]`                                     |         | Page sizes proposed by the pagination (`[10, 25, 50, 100]` by default).                                             |
| `rowCount`         | `number`                                       |         | Total number of items displayed by the pagination.                                                                  |
| `enableFooter`     | `boolean`                                      |         | Renders a `tfoot` with the `footer` of each column.                                                                 |
| `manualFaceted`    | `boolean`                                      |         | Disables the client-side faceting (unique values and min/max used by the filters).                                  |
| `i18n`             | `FormOptions["i18n"]`                          |         | Translations of the labels (`Operations`, operation titles, pagination labels...).                                  |
| `className`        | `string`                                       |         | Additional CSS classes on the table group.                                                                          |
| `children`         | `ReactNode`                                    |         | Content rendered in the table footer, next to the pagination.                                                       |

Sorting, filtering and pagination are performed client-side unless `manualSorting`, `manualFiltering` or
`manualPagination` is set. In that case, use `onChange` to query your server with the new state.

## Columns

Columns are standard TanStack [column definitions](https://tanstack.com/table/latest/docs/guide/column-defs). The
library extends the column `meta` with the following options:

| Name        | Type                                      | Description                                                                                       |
|-------------|-------------------------------------------|---------------------------------------------------------------------------------------------------|
| `type`      | `"string" \| "number" \| "boolean" \| "date" \| string` | Type of the value, used to resolve the cell component (`Cell.<type>`).                 |
| `format`    | `string`                                  | Date format used by the date cell ([moment](https://momentjs.com/docs/#/displaying/format/) format, `L` by default). |
| `labels`    | `Record<string, string>`                  | Labels used by the boolean cell (`yes` / `no`, `Yes` / `No` by default).                           |
| `filter`    | `FilterOptions`                           | Filter configuration of the column. See [Filters](#filters).                                      |
| `cellProps` | `TdHTMLAttributes`                        | Attributes added to each `td` of the column (`colSpan`, `className`...).                          |
| `hidden`    | `boolean`                                 | Hides the column cells.                                                                           |

### Build columns from a form

`mapFormToColumns` creates a column for each component of a form that has `tableView` enabled (components nested in a
`tabs` component are included). The accessor is `data.<component key>`, the header is the component label and the
column `type` and filter variant are deduced from the component type (`number` and `currency` use a range filter,
`checkbox` a boolean filter, other components a text filter).

```tsx
import { mapFormToColumns } from "@tsed/react-formio/molecules/table/utils/mapFormToColumns";

const columns = mapFormToColumns({
  form,
  // optional: column definitions merged with the generated ones
  columns: [
    {
      accessorKey: "data.is_open",
      header: "Is open",
      meta: {
        type: "boolean",
        filter: { variant: "boolean", layout: "react" },
        labels: { yes: "Open", no: "Closed" }
      }
    }
  ],
  // optional: accessor prefix, "data." by default
  prefix: "data."
});
```

Options:

- `form`: the form definition.
- `columns`: custom column definitions. A column whose `id` or `accessorKey` matches a component key (with or without
  the prefix) overrides the generated column, the other ones are appended.
- `prefix`: prefix of the generated accessors (`data.` by default).

Columns are sorted by `meta.order` (by default the column position multiplied by 10), so you can insert a custom column
between generated ones by setting its `meta.order`.

## Filters

A filter is displayed in the header of each filterable column. Its type is set with `meta.filter.variant`:

| Variant   | Options                                                                     | Description                                                                                   |
|-----------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| `text`    | `disableDatalist?: boolean`, `disabled?: boolean`, `InputText` props       | Text input. Suggests the unique values of the column through a `datalist` unless `disableDatalist` is set. |
| `select`  | `options?: SelectOptionProps[] \| (props) => SelectOptionProps[]`, `Select` props (`layout`...) | Select filled with the unique values of the column, or with the given `options`. |
| `boolean` | `options?: SelectOptionProps[]`, `Select` props                             | Select filtering on `true` / `false`.                                                         |
| `range`   | `min?: number`, `max?: number`, `step?: number`                             | Two number inputs (min / max). Bounds default to the min / max values of the column.          |

```tsx
const columns = mapFormToColumns({
  form,
  columns: [
    {
      accessorKey: "data.id",
      meta: { filter: { variant: "select", layout: "react" } }
    },
    {
      accessorKey: "data.description",
      meta: { filter: { variant: "text", disableDatalist: true } }
    }
  ]
});
```

Set `meta.filter.disabled` to hide the filter of a column, or use the TanStack `enableColumnFilter: false` option to
disable filtering on it.

<StoryEmbed id="molecules-table--with-filters" height="700px" />

## Pagination

The pagination is rendered with the [Pagination](/components/pagination) component. Configure the initial page size
with the TanStack `initialState`, the proposed sizes with `pageSizes` and the total of items with `rowCount`:

```tsx
import "@tsed/react-formio/molecules/table/all";

import { Table } from "@tsed/react-formio/molecules/table/Table";

<Table
  data={submissions}
  columns={columns}
  operations={[]}
  enablePagination
  pageSizes={[5, 10, 25]}
  rowCount={submissions.length}
  initialState={{
    pagination: { pageIndex: 0, pageSize: 5 }
  }}
/>;
```

<StoryEmbed id="molecules-table--with-pagination-options" height="600px" />

## Custom cells

For the columns built by `mapFormToColumns`, the cell is resolved from the registry with the keys `Cell.<id>`,
`Cell.<meta.type>` then `Cell`. The library provides cells for strings, booleans (`boolean`, `checkbox`) and dates (`date`, `datetime`). You can also give a
`cell` renderer to a column, and use `meta.cellProps` and `meta.hidden` to merge columns:

```tsx
const columns = mapFormToColumns<ProductSubmission>({
  form,
  columns: [
    {
      accessorKey: "data.id",
      meta: { cellProps: { colSpan: 2 } },
      cell: (context) => (
        <div>
          <div className="text-lg text-primary">{context.row.original.data.label}</div>
          <div className="text-xs">{context.getValue()}</div>
        </div>
      )
    },
    {
      accessorKey: "data.label",
      meta: { hidden: true }
    },
    {
      accessorKey: "data.price",
      cell: (context) => {
        const value = context.getValue();

        return value === undefined ? "-" : new Intl.NumberFormat("fr-FR", { style: "currency", currency: "EUR" }).format(value);
      }
    }
  ]
});
```

<StoryEmbed id="molecules-table--with-custom-cell" height="700px" />

## Operations

Each operation adds a button in the "Operations" column. Clicking it calls `onClick(row, operation)`.

| Name                  | Type                                         | Default     | Description                                                                                 |
|-----------------------|----------------------------------------------|-------------|---------------------------------------------------------------------------------------------|
| `action`              | `string`                                     |             | Operation identifier.                                                                       |
| `title`               | `string`                                     |             | Button label (translated with `i18n`).                                                      |
| `icon`                | `string`                                     |             | Icon displayed in the button.                                                               |
| `alias`               | `string`                                     |             | Alias of the operation, available in the `onClick` handler.                                 |
| `path`                | `string`                                     |             | Path associated with the operation, available in the `onClick` handler.                     |
| `buttonType`          | `string`                                     | `"primary"` | Button variant (`btn-<buttonType>`).                                                        |
| `buttonOutline`       | `boolean`                                    |             | Uses the outline variant (`btn-outline-<buttonType>`).                                      |
| `buttonSize`          | `string`                                     | `"xs"`      | Button size (`btn-<buttonSize>`).                                                           |
| `className`           | `string`                                     | `"btn"`     | CSS class of the button.                                                                    |
| `permissionsResolver` | `(data, metadata, operation) => boolean`     |             | Displays the button only for the rows where it returns a truthy value.                      |

```tsx
import type { Operation } from "@tsed/react-formio";

const operations: Operation[] = [
  { title: "Edit", action: "edit", alias: "row", icon: "edit" },
  {
    action: "delete",
    icon: "trash",
    buttonType: "danger",
    permissionsResolver: (data, metadata) => metadata.canDelete === true
  }
];
```

## Override

The sub-components of the `Table` are resolved from the components registry and can be replaced with
`registerComponent`. See [Registering react components](/guide/register-react-component).

| Registry name                              | Default component        | Role                                        |
|--------------------------------------------|--------------------------|---------------------------------------------|
| `CellHeader`                               | `DefaultCellHeader`      | Header cell (label, sort arrow and filter). |
| `CellFooter`                               | `DefaultCellFooter`      | Footer cell (when `enableFooter` is set).   |
| `ArrowSort`                                | `DefaultArrowSort`       | Sort indicator of the header.               |
| `Filter`                                   | `DefaultFilter`          | Resolves and renders the column filter.     |
| `Filter.text`, `Filter.range`              | `TextFieldFilter`, `RangeFilter` | Filter variants.                    |
| `Filter.select`, `Filter.boolean`          | `SelectFilter`           | Filter variants.                            |
| `Cell`, `Cell.string`                      | `DefaultCell`            | Default cell.                               |
| `Cell.boolean`, `Cell.checkbox`            | `DefaultCellBoolean`     | Boolean cell.                               |
| `Cell.date`, `Cell.datetime`               | `DefaultDateCell`        | Date cell.                                  |
| `CellOperations`                           | `DefaultCellOperations`  | Operations cell.                            |
| `OperationButton`                          | `DefaultOperationButton` | Operation button.                           |
| `Pagination`                               | `Pagination`             | Table pagination.                           |

You can also register a filter for a single column with `Filter.<column id>`, and a cell with `Cell.<id>` when the
column definition passed to `mapFormToColumns` has an explicit `id`. Note that TanStack derives the column id from the
`accessorKey` by replacing dots with underscores (`data.price` becomes `data_price`):

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";

registerComponent("Filter.data_price", PriceFilter);
registerComponent("Cell.price", PriceCell); // for a column defined with { id: "price", accessorKey: "data.price" }
```
