# Pagination

::: tip Storybook
Browse the props, controls and all the stories of `Pagination` in [Storybook](storybook:/docs/molecules-pagination--docs).
:::

The `Pagination` component renders the page navigation (previous, page numbers, next), a page size selector and,
optionally, the current page and the total number of items. It is a controlled component: it doesn't hold any state and
only emits events. The [Table](/components/table) component uses it to paginate its rows.

## Usage

`Pagination` relies on the `Select` and `PaginationButton` components of the registry. Import the `all` entry point to
register them:

```tsx
import { useState } from "react";
import { Pagination } from "@tsed/react-formio/molecules/pagination/all";

export function MyPagination() {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const pageCount = 50;

  return (
    <Pagination
      pageIndex={pageIndex}
      pageSize={pageSize}
      pageCount={pageCount}
      canPreviousPage={pageIndex > 0}
      canNextPage={pageIndex < pageCount - 1}
      onPageIndexChange={setPageIndex}
      onClickPreviousPage={() => setPageIndex(pageIndex - 1)}
      onClickNextPage={() => setPageIndex(pageIndex + 1)}
      onPageSizeChange={setPageSize}
    />
  );
}
```

Or import the modules separately:

```tsx
import { Pagination } from "@tsed/react-formio/molecules/pagination/Pagination";
import "@tsed/react-formio/molecules/pagination/PaginationButton";
import "@tsed/react-formio/molecules/forms/select/all";
```

## Props

| Name                  | Type                                  | Default             | Description                                                                         |
|-----------------------|---------------------------------------|---------------------|-------------------------------------------------------------------------------------|
| `pageIndex`           | `number`                              |                     | Current page index (0-based).                                                       |
| `pageCount`           | `number`                              |                     | Total number of pages.                                                              |
| `pageSize`            | `number`                              |                     | Current page size, selected in the page size selector.                              |
| `pageSizes`           | `number[]`                            | `[10, 25, 50, 100]` | Page sizes proposed in the page size selector.                                      |
| `canPreviousPage`     | `boolean`                             |                     | Enables the "Previous" button.                                                      |
| `canNextPage`         | `boolean`                             |                     | Enables the "Next" button.                                                          |
| `pageOptions`         | `number[]`                            |                     | When set, displays "Page x of `pageOptions.length`".                                |
| `rowCount`            | `number`                              |                     | When set, displays the total number of items.                                       |
| `layout`              | `"html5" \| "react" \| "choicesjs"`   |                     | Layout of the page size `Select`.                                                   |
| `i18n`                | `FormOptions["i18n"]`                 |                     | Translations of the labels (`Previous`, `Next`, `items per page`, `Page`, `Total`, `items`). |
| `className`           | `string`                              |                     | Additional CSS classes.                                                             |
| `onPageIndexChange`   | `(pageIndex: number) => void`         |                     | Called with the 0-based index when a page number is clicked.                        |
| `onClickPreviousPage` | `() => void`                          |                     | Called when the "Previous" button is clicked.                                       |
| `onClickNextPage`     | `() => void`                          |                     | Called when the "Next" button is clicked.                                           |
| `onPageSizeChange`    | `(pageSize: number) => void`          |                     | Called when a new page size is selected.                                            |

## Example

<StoryEmbed id="molecules-pagination--sandbox" height="200px" />

## Override

`Pagination` is registered under the name `Pagination`, and the buttons it renders under the name `PaginationButton`.
See [Registering react components](/guide/register-react-component).

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";
import type { PaginationProps } from "@tsed/react-formio/molecules/pagination/Pagination";

function MyPagination(props: PaginationProps) {
  // ...
}

registerComponent("Pagination", MyPagination);
```
