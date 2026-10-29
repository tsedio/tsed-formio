# InputText

::: tip Storybook
Browse the props, controls and all the stories of `InputText` in [Storybook](storybook:/docs/molecules-forms-inputtext--docs).
:::

`InputText` renders a native `<input>` wrapped in a [FormControl](/components/form-control) (label, description,
content before/after). It keeps a local value while the user types and calls `onChange` with a debounce (300ms by default).

## Usage

```tsx
import { useState } from "react";
import { InputText } from "@tsed/react-formio/molecules/forms/input-text/InputText";

export function MyField() {
  const [value, setValue] = useState("");

  return (
    <InputText
      name="name"
      label="Label"
      placeholder="Placeholder"
      value={value}
      onChange={(name, value) => setValue(value)}
    />
  );
}
```

## Props

| Name            | Type                                               | Default  | Description                                                                 |
|-----------------|----------------------------------------------------|----------|-----------------------------------------------------------------------------|
| `name`          | `string`                                           |          | Field name, passed back as the first argument of `onChange`.                |
| `value`         | `Data`                                             |          | Field value. External changes are synced to the local value.                |
| `onChange`      | `(name: string \| undefined, value: Data) => void` |          | Called with the new value once the user stops typing for `debounceDelay` ms. |
| `debounceDelay` | `number`                                           | `300`    | Debounce delay (ms) applied to `onChange`.                                  |
| `type`          | `string`                                           | `"text"` | Native input type (`number`, `email`, `password`, etc.).                    |
| `placeholder`   | `string`                                           |          | Native placeholder.                                                         |

Plus the [FormControl](/components/form-control) props (`label`, `description`, `before`, `after`, `size`, `required`,
`className`, ...) and the native input attributes, which are spread on the `<input>`.

## Examples

### Debounced

`onChange` is only called once the user stops typing.

<StoryEmbed id="molecules-forms-inputtext--debounced" height="200px" />

### Type number

Use `type` to change the native input type, and `description` to add a help text.

<StoryEmbed id="molecules-forms-inputtext--type-number" height="200px" />

### Sizing

Use `size="small"` to render a smaller field.

<StoryEmbed id="molecules-forms-inputtext--sizing" height="200px" />

See also the [AppendBefore](storybook:molecules-forms-inputtext--append-before) and
[AppendAfter](storybook:molecules-forms-inputtext--append-after) stories. To add content around the field, use the
`before` and `after` props of [FormControl](/components/form-control).

## Override

`InputText` is registered in the components registry under the name `InputText`, and its inner native field under the
name `Input` (also used by [InputTags](/components/input-tags) as a fallback):

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";
import type { InputTextProps } from "@tsed/react-formio/molecules/forms/input-text/InputText.interface";

registerComponent("Input", ({ name, value, onChange }: InputTextProps) => (
  <input className="my-input" name={name} value={value ?? ""} onChange={(e) => onChange?.(name, e.target.value)} />
));
```

See [Registering react components](/guide/register-react-component).
