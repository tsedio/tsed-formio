# Select

::: tip Storybook
Browse the props, controls and all the stories of `Select` in Storybook:
[all layouts](storybook:/docs/molecules-forms-select-all--docs),
[HTML5](storybook:/docs/molecules-forms-select-html5--docs),
[Choices.js](storybook:/docs/molecules-forms-select-choicejs--docs) and
[React Select](storybook:/docs/molecules-forms-select-react--docs).
:::

`Select` renders a single or multiple choice field wrapped in a [FormControl](/components/form-control). It supports
flat options, grouped options, disabled options and a placeholder. The dropdown itself is provided by one of three
implementations, chosen with the `layout` prop.

## Usage

```tsx
import { useState } from "react";
import { Select } from "@tsed/react-formio/molecules/forms/select/all";

const options = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 2", value: "option-2" },
  { label: "Option 3", value: "option-3" }
];

export function MySelect() {
  const [value, setValue] = useState("option-1");

  return <Select name="name" label="Label" layout="choicesjs" options={options} value={value} onChange={(name, value) => setValue(value)} />;
}
```

`@tsed/react-formio/molecules/forms/select/all` exports `Select` and registers the three implementations. To keep only
the ones you need in your bundle, import them explicitly:

```tsx
import "@tsed/react-formio/molecules/forms/form-control/FormControl";
import "@tsed/react-formio/molecules/forms/select/components/ChoicesSelect"; // register only the Choices.js implementation
import { Select } from "@tsed/react-formio/molecules/forms/select/Select";
```

<StoryEmbed id="molecules-forms-select-all--usage" height="350px" />

## Layouts

`Select` does not import its implementations. It resolves them from the
[components registry](/guide/register-react-component) at render time, using the `layout` prop:

| `layout`    | Registry name       | Implementation                                                                  |
|-------------|---------------------|---------------------------------------------------------------------------------|
| `"html5"`   | `Select.html5`      | `HTMLSelect`, a native `<select>` (with `<optgroup>` for groups).               |
| `"choicesjs"` | `Select.choicesjs` | `ChoiceSelect`, a `<select>` enhanced by [Choices.js](https://choices-js.github.io/Choices/). |
| `"react"`   | `Select.react`      | `ReactSelect`, based on [react-select](https://react-select.com/).              |

When `layout` is omitted, or when no component is registered under `Select.<layout>`, `Select` falls back to
`Select.html5`. The wrapper is resolved the same way, from the `FormControl` registry entry.

Each implementation is registered when its module is imported (`components/HtmlSelect`, `components/ChoicesSelect`,
`components/ReactSelect`), which is done for you by `select/all` and by `@tsed/react-formio/all`.

## Props

| Name               | Type                                               | Default                | Description                                                                                                       |
|--------------------|----------------------------------------------------|------------------------|-------------------------------------------------------------------------------------------------------------------|
| `layout`           | `"html5" \| "react" \| "choicesjs"`                | `html5` (fallback)     | Implementation to use. See [Layouts](#layouts).                                                                   |
| `options`          | `SelectOptionProps[]`                              |                        | Options, groups of options, or options with a `group` key. See [Options](#options).                               |
| `name`             | `string`                                           | `""`                   | Field name, passed back as the first argument of `onChange`.                                                      |
| `id`               | `string`                                           | `field-select-<n>`     | Field id. Generated when omitted.                                                                                 |
| `value`            | `string \| string[]`                               |                        | Selected value, or array of values when `multiple` is `true`.                                                     |
| `multiple`         | `boolean`                                          |                        | Allows several values. `value` and the `onChange` value become arrays.                                            |
| `onChange`         | `(name: string \| undefined, value) => void`       |                        | Called with the new value (or values).                                                                            |
| `placeholder`      | `string`                                           |                        | Placeholder. Rendered as an empty disabled first option with the HTML5 layout (single mode only).                 |
| `disabled`         | `boolean`                                          |                        | Disables the field.                                                                                               |
| `required`         | `boolean`                                          |                        | Marks the field as required. With Choices.js and a placeholder, the placeholder option cannot be selected back.   |
| `searchEnabled`    | `boolean`                                          | `true`                 | React Select: enables search (`isSearchable`).                                                                    |
| `disableSearch`    | `boolean`                                          |                        | Choices.js: disables the search input.                                                                            |
| `customProperties` | `Record<string, any>`                              |                        | Extra options passed to the underlying library: Choices.js options or react-select props.                          |
| `errorMessage`     | `string`                                           |                        | Declared in `SelectProps`; not rendered by the built-in implementations.                                          |
| `readonly`         | `boolean`                                          |                        | Declared in `SelectProps`; not used by the built-in implementations.                                              |

Plus the [FormControl](/components/form-control) props (`label`, `description`, `before`, `after`, `size`,
`className`, ...).

With Choices.js, the library sets `allowHTML: true`, `removeItemButton: true`, `shouldSort: false` and
`itemSelectText: ""` by default; all of them can be overridden through `customProperties`.

### Options

Each option has the following shape:

| Name       | Type                              | Description                                                        |
|------------|-----------------------------------|--------------------------------------------------------------------|
| `label`    | `string \| JSX.Element`           | Displayed label.                                                   |
| `value`    | `string`                          | Option value.                                                      |
| `disabled` | `boolean`                         | Disables the option.                                               |
| `options`  | `SelectOptionProps[]`             | Child options. An item with `options` is rendered as a group.      |
| `group`    | `string`                          | Legacy grouping: options sharing the same `group` are grouped.     |
| `data`     | `any`                             | Extra data attached to the option.                                 |
| `customProperties` | `Record<string, any>`     | Choices.js: extra data attached to the choice, including `template`. |

## Examples

### HTML5

<StoryEmbed id="molecules-forms-select-html5--usage" height="150px" />

### Choices.js

<StoryEmbed id="molecules-forms-select-choicejs--usage" height="300px" />

### React Select

<StoryEmbed id="molecules-forms-select-react--usage" height="300px" />

### Groups

Pass items with an `options` key to render groups.

```tsx
import { Select } from "@tsed/react-formio/molecules/forms/select/all";

<Select
  layout="choicesjs"
  name="name"
  label="Label"
  options={[
    {
      label: "Group 1",
      options: [
        { label: "Option 1", value: "option-1" },
        { label: "Option 2", value: "option-2" }
      ]
    },
    {
      label: "Group 2",
      options: [
        { label: "Option 3", value: "option-3" },
        { label: "Option 4", value: "option-4" }
      ]
    }
  ]}
/>;
```

<StoryEmbed id="molecules-forms-select-choicejs--with-groups" height="400px" />

The legacy format, where each option carries a `group` key, is also supported. See the
[WithGroupsLegacy](storybook:molecules-forms-select-choicejs--with-groups-legacy) story.

### Multiple

Set `multiple` to allow several values. `value` must then be an array.

<StoryEmbed id="molecules-forms-select-react--with-multiple" height="350px" />

### Custom option template (Choices.js)

With the Choices.js layout, pass a React component as `customProperties.template` on each option to customize how it is
rendered in the dropdown. The component receives the Choices item and a `data` prop merging the item and its
`customProperties`. The library keeps the attributes Choices.js needs (`data-choice`, `data-value`, roles) around the
rendered template.

```tsx
import { Select } from "@tsed/react-formio/molecules/forms/select/all";

const OptionTemplate = ({ label, data }: any) => (
  <span style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
    <span>{label}</span>
    <small style={{ opacity: 0.7 }}>{data?.hint}</small>
  </span>
);

<Select
  layout="choicesjs"
  name="name"
  label="Label"
  placeholder="Select an option"
  options={[
    { label: "Option 1", value: "option-1", customProperties: { hint: "alpha", template: OptionTemplate } },
    { label: "Option 2", value: "option-2", customProperties: { hint: "beta", template: OptionTemplate } }
  ]}
/>;
```

<StoryEmbed id="molecules-forms-select-choicejs--with-custom-option-template" height="350px" />

### More examples

Placeholder, disabled field, disabled option, size, before/after content, description and groups with multiple
selection are available for each layout in Storybook:
[HTML5](storybook:/docs/molecules-forms-select-html5--docs),
[Choices.js](storybook:/docs/molecules-forms-select-choicejs--docs) and
[React Select](storybook:/docs/molecules-forms-select-react--docs).

## Override

`Select` is registered under the name `Select`, and its implementations under `Select.html5`, `Select.choicesjs` and
`Select.react`. Register your own component under one of these names to replace an implementation:

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";
import type { AllSelectProps } from "@tsed/react-formio/molecules/forms/select/Select.interface";

registerComponent("Select.html5", (props: AllSelectProps) => <MySelect {...props} />);
```

See [Registering react components](/guide/register-react-component).
