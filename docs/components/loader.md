# Loader

::: tip Storybook
Browse the props, controls and all the stories of `Loader` in [Storybook](storybook:/docs/molecules-loader--docs).
:::

The `Loader` component displays a spinning icon over a white overlay while content is loading. It renders nothing when
`isActive` is false. The overlay is absolutely positioned, so place the loader inside a container with
`position: relative`.

## Usage

```tsx
import { Loader } from "@tsed/react-formio/molecules/loader/Loader";

<div className="relative">
  <Loader isActive={isLoading} />
  {/* content */}
</div>;
```

## Props

`Loader` also accepts the native attributes of a `div` element.

| Name        | Type      | Default          | Description                                                    |
|-------------|-----------|------------------|----------------------------------------------------------------|
| `isActive`  | `boolean` |                  | Displays the loader when `true`, renders nothing otherwise.    |
| `color`     | `string`  | `"text-primary"` | CSS class applied to the icon to set its color.                |
| `icon`      | `string`  | `"loader"`       | Name of the icon to display.                                   |
| `iconset`   | `string`  |                  | Icon set used to resolve the icon (for example `bx` or `lu`).  |
| `className` | `string`  | `""`             | Additional CSS classes on the overlay.                         |

## Example

<StoryEmbed id="molecules-loader--usage" height="250px" />
