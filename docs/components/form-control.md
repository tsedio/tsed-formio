# FormControl

::: tip Storybook
Browse the props, controls and all the stories of `FormControl` in [Storybook](storybook:/docs/molecules-forms-formcontrol--docs).
:::

`FormControl` is the wrapper shared by every form field of the library ([InputText](/components/input-text),
[InputTags](/components/input-tags), [Select](/components/select)). It renders the label, an input group with optional
content before and after the field, and a description below it. The field itself is passed as `children`.

## Usage

```tsx
import { FormControl } from "@tsed/react-formio/molecules/forms/form-control/FormControl";

export function MyField() {
  return (
    <FormControl name="email" label="Email" required description="We never share your email." before={<i className="bx bx-envelope" />}>
      <input className="form-control" id="email" name="email" />
    </FormControl>
  );
}
```

## Props

`FormControl` accepts the HTML input attributes (except `onChange`, `value` and `size`, which are redefined) plus the
following props. Only those listed as "rendered" below affect the wrapper itself; the others are part of the shared
`FormControlProps` type that field components extend.

| Name          | Type                                     | Default | Description                                                                                         |
|---------------|------------------------------------------|---------|-----------------------------------------------------------------------------------------------------|
| `name`        | `string`                                 | `""`    | Field name. Used to build the wrapper id (`form-group-<name>`) and the `data-testid`.                 |
| `id`          | `string`                                 | `name`  | Id referenced by the label `htmlFor`.                                                               |
| `label`       | `string`                                 |         | Label rendered above the field.                                                                     |
| `required`    | `boolean`                                |         | Adds the `field-required` class on the label.                                                       |
| `description` | `string \| ReactNode`                    |         | Help text rendered below the field.                                                                 |
| `before`      | `string \| ReactNode`                    |         | Content rendered in an `input-group-prepend` before the field (icon, unit, etc.).                   |
| `after`       | `string \| ReactNode`                    |         | Content rendered in an `input-group-append` after the field.                                        |
| `size`        | `"small" \| string`                      |         | Adds a `-size-<size>` class on the wrapper.                                                         |
| `className`   | `string`                                 |         | Extra class on the wrapper.                                                                         |
| `shadow`      | `boolean`                                |         | Part of the shared type; not rendered by `FormControl`.                                             |
| `value`       | `Value`                                  |         | Field value. Not rendered by `FormControl`; used by the field components.                           |
| `onChange`    | `(name: string \| undefined, value: Value) => void` |  | Change callback. Not rendered by `FormControl`; field components call it with the field name and the new value. |
| `children`    | `ReactNode`                              |         | The field to wrap.                                                                                  |

Field components use the `cleanFormControlProps(props, omitted?)` helper, exported from the same module, to strip the
wrapper-only props (`label`, `description`, `prefix`, `suffix`, `size`, `shadow`) before spreading the rest on the native
element.

## Examples

### Before

Content rendered before the field.

<StoryEmbed id="molecules-forms-formcontrol--usage" height="150px" />

### After

Content rendered after the field.

<StoryEmbed id="molecules-forms-formcontrol--append-after" height="150px" />

## Override

`FormControl` is registered in the components registry under the name `FormControl`. `Select` and `InputTags` resolve
their wrapper from the registry, so you can replace it with your own component (`InputText` imports `FormControl`
directly and is not affected):

```tsx
import type { PropsWithChildren } from "react";
import { registerComponent } from "@tsed/react-formio/registries/components";
import type { FormControlProps } from "@tsed/react-formio/molecules/forms/form-control/FormControl";

registerComponent("FormControl", ({ label, children }: PropsWithChildren<FormControlProps>) => (
  <div className="my-field">
    <label>{label}</label>
    {children}
  </div>
));
```

See [Registering react components](/guide/register-react-component).
