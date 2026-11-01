# FormAction

::: tip Storybook
Browse the props, controls and all the stories of `FormAction` in [Storybook](storybook:/docs/organisms-form-action-formaction--docs).
:::

The `FormAction` component renders the settings form of a Form.io action (save, email, webhook, etc.). It takes the
action information returned by the Form.io server (`actionInfo`), renders its `settingsForm` and pre-fills it with the
action `defaults` merged with the optional `submission`. Components of type `resourcefields` are converted into a
`select` loading the resources of the project.

## Usage

```tsx
import { FormAction } from "@tsed/react-formio/organisms/form/actions/FormAction";

export function EditAction({ actionInfo, action }) {
  return (
    <FormAction
      actionInfo={actionInfo}
      submission={action}
      options={{ template: "tailwind", iconset: "lu" }}
      onSubmit={(submission) => console.log(submission.data)}
    />
  );
}
```

Where `actionInfo` looks like:

```ts
import type { ActionType } from "@tsed/react-formio";

const actionInfo: Partial<ActionType> = {
  name: "save",
  title: "Save Submission",
  description: "Saves the submission into the database.",
  priority: 10,
  defaults: {
    handler: ["before"],
    method: ["create", "update"],
    priority: 10,
    name: "save",
    title: "Save Submission"
  },
  settingsForm: {
    components: [
      { type: "textfield", input: true, label: "Title", key: "title" },
      { type: "button", input: true, label: "Save Action", key: "submit", action: "submit", theme: "primary" }
    ]
  }
};
```

## Props

| Name         | Type                                        | Default | Description                                                                                 |
|--------------|---------------------------------------------|---------|---------------------------------------------------------------------------------------------|
| `actionInfo` | `Partial<ActionType>`                       |         | Information about the action, including its `defaults` and its `settingsForm`.              |
| `submission` | `Partial<SubmissionType>`                   |         | Action values used to fill the form. They override the values of `actionInfo.defaults`.     |
| `onSubmit`   | `(submission: SubmissionType<ActionType>) => void` |  | Called when the settings form is submitted.                                                 |
| `options`    | `FormOptions`                               |         | Options passed to the underlying [Form](/components/form) (template, iconset, i18n, etc.).  |
| `children`   | `ReactNode`                                 |         | Optional content rendered above and below the form.                                         |

## Examples

### Save action

Configuration of the "Save Submission" action.

<StoryEmbed id="organisms-form-action-formaction--save-action" height="600px" />

### Email action

Configuration of the "Email" action.

<StoryEmbed id="organisms-form-action-formaction--email-action" height="700px" />

### Webhook action

Configuration of the "Webhook" action.

<StoryEmbed id="organisms-form-action-formaction--webhook-action" height="700px" />
