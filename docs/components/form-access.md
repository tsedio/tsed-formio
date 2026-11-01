# FormAccess

::: tip Storybook
Browse the props, controls and all the stories of `FormAccess` in [Storybook](storybook:/docs/organisms-form-access-formaccess--docs).
:::

The `FormAccess` component renders the permission editor of a Form.io form. It displays two forms built from the
given roles: one to manage the submission access (`submissionAccess`) and one to manage the form definition access
(`access`). When the user clicks on "Save access", `onSubmit` is called with a copy of the form updated with the new
permissions.

## Usage

```tsx
import { FormAccess } from "@tsed/react-formio/organisms/form/access/FormAccess";

const roles = [
  { title: "Administrator", _id: "5d0797bc872fc747da559858" },
  { title: "Authenticated", _id: "5d0797bc872fc71d05559859" },
  { title: "Anonymous", _id: "5d0797bc872fc7da3b55985a" }
];

export function FormAccessPage({ form }) {
  return (
    <FormAccess
      form={form}
      roles={roles}
      options={{ template: "tailwind", iconset: "lu" }}
      onSubmit={(form) => console.log(form.access, form.submissionAccess)}
    />
  );
}
```

## Props

| Name        | Type                         | Default | Description                                                                                                     |
|-------------|------------------------------|---------|-----------------------------------------------------------------------------------------------------------------|
| `form`      | `Partial<FormType>`          |         | The form definition. Its `access` and `submissionAccess` arrays are used to fill the permission forms.          |
| `roles`     | `{ _id: string; title: string }[]` |   | The roles available as choices in each permission field.                                                        |
| `onSubmit`  | `(form: Partial<FormType>) => void` |  | Called when a "Save access" button is clicked, with the form updated with the edited `access` and `submissionAccess`. |
| `options`   | `FormOptions`                |         | Options passed to the underlying [Form](/components/form) components (template, iconset, i18n, etc.).           |
| `children`  | `ReactNode`                  |         | Optional content rendered above the cards and below each "Save access" button.                                  |

The permission forms are re-initialized from `form` when its `_id` changes.

## Examples

### Sandbox

Edit the access of a form with three roles.

<StoryEmbed id="organisms-form-access-formaccess--sandbox" height="900px" />
