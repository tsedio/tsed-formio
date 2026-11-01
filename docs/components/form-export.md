# FormExport

::: tip Storybook
Browse the props, controls and all the stories of `FormExport` in [Storybook](storybook:/docs/organisms-form-export-formexport--docs).
:::

The `FormExport` component displays the export options of a form: export the form schema as JSON, and export the
submissions as JSON or CSV. It doesn't perform the export itself, it calls `onClick` with the requested action and
format so you can trigger the download.

## Usage

```tsx
import "@tsed/react-formio/molecules/card/Card";

import { FormExport } from "@tsed/react-formio/organisms/form/exports/FormExport";

export function ExportPage() {
  return (
    <FormExport
      onClick={(action, format) => {
        // action: "export:form" | "export:submissions"
        // format: "json" | "csv"
        console.log(action, format);
      }}
    />
  );
}
```

::: info
`FormExport` resolves the `Card` component from the components registry. Import
`@tsed/react-formio/molecules/card/Card` once in your application to register it.
:::

## Props

| Name      | Type                                                                                  | Default | Description                                                                 |
|-----------|---------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------------|
| `onClick` | `(action: "export:form" \| "export:submissions", format: "json" \| "csv") => void`    |         | Called when an export button is clicked.                                    |
| `i18n`    | `FormOptions["i18n"]`                                                                 |         | Translations used for the labels (e.g. `Export schema`, `Export submissions`, `Json`, `Csv`). |

## Examples

### Usage

Default export options.

<StoryEmbed id="organisms-form-export-formexport--usage" height="300px" />

### Resource

Export options for a resource.

<StoryEmbed id="organisms-form-export-formexport--resource" height="300px" />

### Translated

Labels translated with the `i18n` prop.

<StoryEmbed id="organisms-form-export-formexport--translated" height="300px" />
