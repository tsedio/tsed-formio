# Alert

::: tip Storybook
Browse the props, controls and all the stories of `Alert` in [Storybook](storybook:/docs/molecules-alert--docs).
:::

The `Alert` component displays a short message to the user without interrupting their use of the app. It is mostly
used to render errors returned by a Form.io server: the `message` prop accepts a plain string but also error objects,
which are formatted into a readable message.

## Usage

```tsx
import { Alert } from "@tsed/react-formio/molecules/alert/Alert";

<Alert type="danger" message="Unable to save the form" />;

<Alert type="info">
  Your changes have been saved.
</Alert>;
```

## Props

| Name       | Type                            | Default    | Description                                                                                                                         |
|------------|---------------------------------|------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `message`  | `string \| string[] \| object`  |            | Message to display. Strings, arrays and error objects are formatted (see below).                                                     |
| `type`     | `string`                        | `"danger"` | Alert variant, rendered as the `alert-<type>` class: `primary`, `secondary`, `success`, `danger`, `warning`, `info`, `light`, `dark`. |
| `children` | `ReactNode`                     |            | Extra content rendered after the formatted message.                                                                                  |

### Message formatting

The `message` value is converted as follows:

- a string is rendered as is, an array is formatted item by item,
- an object with an `errors` map renders one line per error: `name (path) - message`,
- an object with a `message` property renders that message,
- a validation error (`name: "ValidationError"`) renders each `details[].message`,
- a form object (with `_id` and `display`) renders a conflict message asking the user to reload the form,
- any other object renders a generic "An error occurred" message.

An empty value (or empty array) renders nothing.

## Example

<StoryEmbed id="molecules-alert--sandbox" height="150px" />
