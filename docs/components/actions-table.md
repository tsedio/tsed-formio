# ActionsTable

::: tip Storybook
Browse the props, controls and all the stories of `ActionsTable` in [Storybook](storybook:/docs/organisms-table-actions-actionstable--docs).
:::

The `ActionsTable` component renders the list of the actions attached to a form, with operation buttons on each row
(edit, delete, etc.). Below the table, a select lists the available actions and an "Add action" button calls
`onAddAction` with the selected action name. It is built on top of the [Table](/components/table) component.

## Usage

```tsx
import "@tsed/react-formio/molecules/forms/select/all";
import "@tsed/react-formio/molecules/table/all";

import { ActionsTable } from "@tsed/react-formio/organisms/table/actions/ActionsTable";

const availableActions = [
  { label: "Save Submission", value: "save" },
  { label: "Email", value: "email" },
  { label: "Webhook", value: "webhook" }
];

const operations = [
  { title: "Edit", action: "edit", alias: "row", icon: "edit" },
  { action: "delete", icon: "trash", buttonType: "danger" }
];

export function FormActions({ actions }) {
  return (
    <ActionsTable
      data={actions}
      operations={operations}
      availableActions={availableActions}
      onAddAction={(actionName) => console.log("add", actionName)}
      onClick={(action, operation) => console.log(operation.action, action)}
    />
  );
}
```

::: info
The table cells, operation buttons, pagination and select are resolved from the components registry. Import
`@tsed/react-formio/molecules/table/all` and `@tsed/react-formio/molecules/forms/select/all` once in your application
to register them.
:::

## Props

`ActionsTable` accepts all the [Table](/components/table) props except `columns` (the table renders a single "Action"
column showing the action `title`), plus:

| Name               | Type                                  | Default | Description                                                           |
|--------------------|---------------------------------------|---------|-----------------------------------------------------------------------|
| `data`             | `ActionType[]`                        |         | The actions to display.                                               |
| `operations`       | `Operation<ActionType>[]`             |         | Operation buttons rendered on each row.                               |
| `onClick`          | `(data: ActionType, operation) => void` |       | Called when an operation button is clicked.                           |
| `availableActions` | `{ label: string; value: string }[]`  | `[]`    | Actions listed in the select below the table.                         |
| `onAddAction`      | `(actionName: string) => void`        | `noop`  | Called with the selected action name when "Add action" is clicked.    |
| `i18n`             | `FormOptions["i18n"]`                 |         | Translations for the labels (`Action`, `Select an action`, `Add action`, etc.). |

## Examples

### Usage

Select an action and click on "Add action", or use the operation buttons of a row.

<StoryEmbed id="organisms-table-actions-actionstable--usage" height="400px" />
