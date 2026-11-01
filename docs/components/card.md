# Card

::: tip Storybook
Browse the props, controls and all the stories of `Card` in [Storybook](storybook:/docs/molecules-card--docs).
:::

The `Card` component groups content about a single subject in a box with a title header. Its children are rendered in
the card body.

## Usage

```tsx
import { Card } from "@tsed/react-formio/molecules/card/Card";

<Card label="Form settings">
  <p>Card content</p>
</Card>;
```

## Props

| Name        | Type        | Default | Description                              |
|-------------|-------------|---------|------------------------------------------|
| `label`     | `string`    |         | Title displayed in the card header.      |
| `className` | `string`    |         | Additional CSS classes on the card root. |
| `children`  | `ReactNode` |         | Content rendered in the card body.       |

## Example

<StoryEmbed id="molecules-card--sandbox" height="200px" />

## Override

`Card` is registered in the components registry under the name `Card`. See [Registering react components](/guide/register-react-component).

```tsx
import { registerComponent } from "@tsed/react-formio/registries/components";

registerComponent("Card", MyCustomCard);
```
