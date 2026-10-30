# Modal

::: tip Storybook
Browse the props, controls and all the stories of `Modal` in [Storybook](storybook:/docs/molecules-modal--docs).
:::

The `Modal` component renders a dialog over an overlay, with an optional title and footer. It is the base of the dialogs
used by the library, such as the [RemoveModal](/components/remove-modal). The `useModal` hook provides the state and the
handlers to open and close it.

## Usage

```tsx
import { Modal, useModal } from "@tsed/react-formio/molecules/modal/Modal";

export function MyComponent() {
  const modal = useModal();

  return (
    <>
      <button className="btn btn-primary" onClick={modal.openModal}>
        Open modal
      </button>

      <Modal {...modal} title="Modal title">
        <div className="p-5">Hello body</div>
      </Modal>
    </>
  );
}
```

## Props

| Name         | Type                  | Default | Description                                                                                                      |
|--------------|-----------------------|---------|------------------------------------------------------------------------------------------------------------------|
| `show`       | `boolean`             |         | Displays the modal. Nothing is rendered when `false`.                                                            |
| `closeModal` | `() => void`          |         | Called when the user clicks on the overlay or the close button. Usually provided by `useModal`.                   |
| `onClose`    | `() => void`          |         | Called after `closeModal` when the modal is closed from the overlay, the close button or the footer `onClose`.    |
| `title`      | `string`              |         | Title rendered in the modal header.                                                                              |
| `footer`     | `ComponentType`       |         | Component rendered in the modal footer. It receives the extra props of the modal plus `closeModal` and `onClose`. |
| `className`  | `string`              | `""`    | Additional CSS classes on the dialog root.                                                                       |
| `style`      | `CSSProperties`       |         | Inline style applied to the dialog content.                                                                      |
| `children`   | `ReactNode`           |         | Content of the modal body. The body scrolls when the content is higher than the viewport.                        |

Any other prop is forwarded to the `footer` component.

### useModal

`useModal()` returns an object that can be spread on the `Modal`:

| Name           | Type                         | Description                        |
|----------------|------------------------------|------------------------------------|
| `show`         | `boolean`                    | Current visibility of the modal.   |
| `setShowModal` | `(show: boolean) => void`    | Sets the visibility.               |
| `openModal`    | `() => void`                 | Opens the modal.                   |
| `closeModal`   | `() => void`                 | Closes the modal.                  |

## Examples

### Sandbox

<StoryEmbed id="molecules-modal--sandbox" height="500px" />

### With title

<StoryEmbed id="molecules-modal--with-title" height="500px" />

### With footer

The `footer` component receives `closeModal` and the extra props given to the modal (here `onSubmit`):

```tsx
import { Modal, useModal } from "@tsed/react-formio/molecules/modal/Modal";

function ModalFooter({ closeModal, onSubmit }: any) {
  return (
    <div className="flex items-center justify-center p-2">
      <button
        className="btn btn-primary mx-1"
        onClick={(e) => {
          onSubmit(e);
          closeModal();
        }}
      >
        Save
      </button>
      <button className="btn btn-danger mx-1" onClick={closeModal}>
        Close
      </button>
    </div>
  );
}

export function MyComponent() {
  const modal = useModal();

  return (
    <>
      <button className="btn btn-primary" onClick={modal.openModal}>
        Open modal
      </button>

      <Modal {...modal} title="Modal title" footer={ModalFooter} onSubmit={() => console.log("submit")}>
        <div className="px-5">Hello body</div>
      </Modal>
    </>
  );
}
```

<StoryEmbed id="molecules-modal--with-footer" height="500px" />
