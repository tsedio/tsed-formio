# InputTags

::: tip Storybook
Browse the props, controls and all the stories of `InputTags` in Storybook:
[Choices.js implementation](storybook:/docs/molecules-forms-inputtags-choicesjs--docs) and
[React implementation](storybook:/docs/molecules-forms-inputtags-react--docs).
:::

`InputTags` lets users type free values and turns them into a list of tags. The value is an array of strings. The field
is wrapped in a [FormControl](/components/form-control) and the tag input itself is provided by one of two
implementations, chosen with the `layout` prop.

## Usage

```tsx
import { useState } from "react";
import { InputTags } from "@tsed/react-formio/molecules/forms/input-tags/all";

export function MyTags() {
  const [value, setValue] = useState<string[]>(["test"]);

  return (
    <InputTags
      name="tags"
      label="Tags"
      placeholder="Placeholder"
      layout="choicesjs"
      value={value}
      onChange={(name, value) => setValue(value)}
    />
  );
}
```

`@tsed/react-formio/molecules/forms/input-tags/all` exports `InputTags` and registers both implementations. To keep only
one implementation in your bundle, import it explicitly:

```tsx
import "@tsed/react-formio/molecules/forms/input-text/InputText"; // registers FormControl and the Input fallback
import "@tsed/react-formio/molecules/forms/input-tags/components/ReactTags";
import { InputTags } from "@tsed/react-formio/molecules/forms/input-tags/InputTags";
```

## Layouts

`InputTags` does not import its implementations. It resolves them from the
[components registry](/guide/register-react-component) at render time, using the `layout` prop:

| `layout`              | Registry name         | Implementation                                                                   |
|-----------------------|-----------------------|----------------------------------------------------------------------------------|
| `"choicesjs"` (default) | `InputTags.choicesjs` | `ChoicesTags`, a text input enhanced by [Choices.js](https://choices-js.github.io/Choices/). |
| `"react"`             | `InputTags.react`     | `ReactTags`, a [react-select](https://react-select.com/creatable) `CreatableSelect` in multi mode. |

If no component is registered under `InputTags.<layout>`, `InputTags` falls back to the `Input` component registered by
[InputText](/components/input-text). The wrapper is resolved the same way, from the `FormControl` registry entry.

Each implementation is registered when its module is imported (`components/ChoicesTags`, `components/ReactTags`), which
is done for you by `input-tags/all` and by `@tsed/react-formio/all`.

## Props

| Name               | Type                                                 | Default       | Description                                                                                       |
|--------------------|------------------------------------------------------|---------------|---------------------------------------------------------------------------------------------------|
| `layout`           | `"html5" \| "react" \| "choicesjs"`                  | `"choicesjs"` | Implementation to use. See [Layouts](#layouts).                                                   |
| `name`             | `string`                                             |               | Field name, passed back as the first argument of `onChange`.                                      |
| `value`            | `string[]`                                           |               | List of tags.                                                                                     |
| `onChange`         | `(name: string \| undefined, value: string[]) => void` |             | Called with the full list of tags each time a tag is added or removed.                            |
| `placeholder`      | `string`                                             |               | Placeholder of the input.                                                                         |
| `delimiter`        | `string`                                             |               | Choices.js only: character used to split the typed text into several tags.                        |
| `customProperties` | `Record<string, any>`                                |               | Extra options passed to the underlying library: Choices.js options or `CreatableSelect` props.    |
| `disabled`         | `boolean`                                            |               | Disables the field (`isDisabled` for the React implementation).                                   |

Plus the [FormControl](/components/form-control) props (`label`, `description`, `before`, `after`, `size`, `required`,
`className`, ...).

The Choices.js implementation always enables `editItems` and `removeItemButton`, and disables duplicates by default
(`duplicateItemsAllowed: false`, overridable through `customProperties`).

## Examples

### Choices.js

<StoryEmbed id="molecules-forms-inputtags-choicesjs--usage" height="200px" />

### React

<StoryEmbed id="molecules-forms-inputtags-react--usage" height="200px" />

### Custom properties

With the React implementation, `customProperties` is spread on `CreatableSelect`. Here it provides a list of
suggested options.

```tsx
import { InputTags } from "@tsed/react-formio/molecules/forms/input-tags/all";

<InputTags
  layout="react"
  name="name"
  label="Label"
  placeholder="Select or Create..."
  value={[]}
  customProperties={{
    options: [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" }
    ]
  }}
/>;
```

<StoryEmbed id="molecules-forms-inputtags-react--custom-properties" height="300px" />

### Before

Content rendered before the field, through the `before` prop of [FormControl](/components/form-control).

<StoryEmbed id="molecules-forms-inputtags-choicesjs--append-before" height="200px" />

More stories (size, after) are available in Storybook for the
[Choices.js](storybook:/docs/molecules-forms-inputtags-choicesjs--docs) and
[React](storybook:/docs/molecules-forms-inputtags-react--docs) implementations.

## Override

`InputTags` is registered under the name `InputTags`, and its implementations under `InputTags.choicesjs` and
`InputTags.react`. Register your own component under one of these names to replace an implementation:

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";
import type { InputTagsProps } from "@tsed/react-formio/molecules/forms/input-tags/InputTags.interface";

registerComponent("InputTags.react", (props: InputTagsProps) => <MyTagsInput {...props} />);
```

See [Registering react components](/guide/register-react-component).
