# Button

::: tip Storybook
Browse the props, controls and all the stories of `Button` in [Storybook](storybook:/docs/molecules-button--docs).
:::

The `Button` component renders a styled button (`btn btn-<variant>` classes). It is used by the other components of the
library (form builder, tables, modals...) and can be rendered as a `button`, `a`, `input` or `div` element. When
`disabled` is set, the `onClick` handler is not called.

## Usage

```tsx
import { Button } from "@tsed/react-formio/molecules/button/Button";

<Button variant="primary" onClick={() => console.log("clicked")}>
  Save
</Button>;
```

## Props

`Button` accepts all the native HTML attributes of the rendered element, plus:

| Name       | Type                                     | Default    | Description                                                                                                  |
|------------|------------------------------------------|------------|--------------------------------------------------------------------------------------------------------------|
| `tag`      | `"button" \| "a" \| "input" \| "div"`    | `"button"` | HTML element used to render the button.                                                                      |
| `variant`  | `string`                                 |            | Variant applied as `btn-<variant>`. See `BUTTON_VARIANTS` for the built-in list (`primary`, `outline-danger`, `link`...). |
| `disabled` | `boolean`                                | `false`    | Disables the button: adds the `disabled` class and ignores clicks.                                           |
| `onClick`  | `(event) => void`                        |            | Click handler, not called when the button is disabled.                                                       |
| `className`| `string`                                 |            | Additional CSS classes.                                                                                      |

The component forwards its `ref` to the rendered element.

## Examples

### Variants

All the variants exported by `BUTTON_VARIANTS`.

<StoryEmbed id="molecules-button--variant" height="200px" />

### Disabled

<StoryEmbed id="molecules-button--disabled" height="200px" />

### With icon

Combine the button with the [Icon](storybook:/docs/atoms-icon--docs) atom:

```tsx
import { Icon } from "@tsed/react-formio/atoms/icon/Icon";
import { Button } from "@tsed/react-formio/molecules/button/Button";

<Button variant="primary">
  <Icon name="save" />
  Save
</Button>;
```

<StoryEmbed id="molecules-button--with-icon" height="200px" />

## Override

`Button` is registered in the components registry under the name `Button`. See [Registering react components](/guide/register-react-component).

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";

registerComponent("Button", MyCustomButton);
```
