# FormSettings

::: tip Storybook
Browse the props, controls and all the stories of `FormSettings` in [Storybook](storybook:/docs/organisms-form-settings-formsettings--docs).
:::

The `FormSettings` component renders a form to edit the settings of a Form.io form: its `action`, `tags` and custom
`properties`. When the user clicks on "Save settings", `onSubmit` is called with a copy of the form updated with the
edited values. The button is disabled while the settings form is invalid.

## Usage

```tsx
import { FormSettings } from "@tsed/react-formio/organisms/form/settings/FormSettings";

export function FormSettingsPage({ form }) {
  return (
    <FormSettings
      form={form}
      options={{ template: "tailwind", iconset: "lu" }}
      onSubmit={(form) => console.log(form.action, form.tags, form.properties)}
    />
  );
}
```

## Props

| Name       | Type                                | Default | Description                                                                                         |
|------------|-------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
| `form`     | `Partial<FormType>`                 |         | The form definition. Its `action`, `tags` and `properties` fill the settings form.                  |
| `onSubmit` | `(form: Partial<FormType>) => void` | `noop`  | Called when "Save settings" is clicked, with the form updated with the new `action`, `tags` and `properties`. |
| `options`  | `FormOptions`                       |         | Options passed to the underlying [Form](/components/form). `options.i18n` also translates the button label. |

The settings form is re-initialized from `form` when its `_id` changes.

## Examples

### Sandbox

Edit the settings of a form.

<StoryEmbed id="organisms-form-settings-formsettings--sandbox" height="500px" />
