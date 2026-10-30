# RemoveModal

::: tip Storybook
Browse the props, controls and all the stories of `RemoveModal` in [Storybook](storybook:/docs/organisms-model-removemodal--docs).
:::

The `RemoveModal` component displays a danger message and asks the user to confirm a removal by typing the name of the
item. The "Remove" button stays disabled until the typed value matches `valueToCompare`. It is built on top of the
[Modal](/components/modal) component.

## Usage

```tsx
import { useModal } from "@tsed/react-formio/molecules/modal/Modal";
import { RemoveModal } from "@tsed/react-formio/organisms/modal/RemoveModal";

export function RemoveForm({ form, onRemove }) {
  const modal = useModal();

  return (
    <>
      <button className="btn btn-danger" onClick={modal.openModal}>
        Remove
      </button>

      <RemoveModal
        show={modal.show}
        closeModal={modal.closeModal}
        onClose={modal.closeModal}
        onSubmit={() => {
          onRemove(form);
          modal.closeModal();
        }}
        valueToCompare={form.name}
        itemType="form"
      />
    </>
  );
}
```

## Props

| Name             | Type                                | Default    | Description                                                                                     |
|------------------|-------------------------------------|------------|-------------------------------------------------------------------------------------------------|
| `valueToCompare` | `string`                            |            | The value the user must type to enable the "Remove" button.                                     |
| `itemType`       | `string`                            |            | Type of the removed item (e.g. `form`). Used in the title (`Drop <itemType>`) and the message.  |
| `onSubmit`       | `(event) => void`                   |            | Called when "Remove" is clicked and the typed value matches `valueToCompare`.                   |
| `show`           | `boolean`                           |            | Displays the modal when `true`.                                                                 |
| `closeModal`     | `() => void`                        | `noop`     | Called when the overlay is clicked.                                                             |
| `onClose`        | `() => void`                        | `noop`     | Called when the overlay or the "Cancel" button is clicked.                                      |
| `i18n`           | `(f: string) => string`             | `(f) => f` | Translation function for the message and buttons labels.                                        |
| `maxWidth`       | `string`                            | `"300px"`  | Max width of the modal content.                                                                 |
| `className`      | `string`                            |            | Additional class added to the modal (`formio-dialog-theme-remove` is always added).             |
| `children`       | `ReactNode`                         |            | Optional content rendered before the confirmation message.                                      |

## Examples

### Usage

Click on "Open modal", then type `value` to enable the "Remove" button.

<StoryEmbed id="organisms-model-removemodal--usage" height="400px" />
