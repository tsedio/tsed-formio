# FormPreview

::: tip Storybook
Browse the props, controls and all the stories of `FormPreview` in [Storybook](storybook:/docs/organisms-form-preview-formpreview--docs).
:::

The `FormPreview` component renders a form inside a card, on a grey background, with the form title as card label.
Use it to preview a form definition, for example next to the [form builder](/components/form-builder).

## Usage

```tsx
import "@tsed/react-formio/molecules/card/Card";

import { FormPreview } from "@tsed/react-formio/organisms/form/preview/FormPreview";

const form = {
  title: "Form with First Name",
  display: "form",
  components: [
    { type: "textfield", key: "firstName", label: "First name", input: true },
    { type: "button", key: "submit", label: "Submit", action: "submit", input: true }
  ]
};

export function PreviewPage() {
  return <FormPreview form={form} />;
}
```

::: info
`FormPreview` resolves the `Card` component from the components registry. Import
`@tsed/react-formio/molecules/card/Card` once in your application to register it.
:::

## Props

| Name   | Type                  | Default | Description                                                                              |
|--------|-----------------------|---------|------------------------------------------------------------------------------------------|
| `form` | `FormType`            |         | The form definition to preview. Its `title` is used as card label.                      |
| `i18n` | `FormOptions["i18n"]` |         | Translations used for the card label and passed to the [Form](/components/form) options. |

## Examples

### Usage

Preview of a simple form.

<StoryEmbed id="organisms-form-preview-formpreview--usage" height="500px" />

### Translated

Preview translated with the `i18n` prop.

<StoryEmbed id="organisms-form-preview-formpreview--translated" height="500px" />
