# Form Builder

::: tip Storybook
Browse the props, controls and all the stories of `FormBuilder` in [Storybook](storybook:/docs/organisms-form-builder-formbuilder--docs).
:::

The [FormBuilder](storybook:/docs/organisms-form-builder-formbuilder--docs) class can be used to embed a form builder directly in your React application.

Please note that you'll need to include the CSS for the form builder from formio.js as well.

Please note that the `FormBuilder` component does not load and save from/to an url.
You must handle the form definition loading and saving yourself or use the [FormEdit](/components/form-edit) component.

## Props

| Name      | Type   | Default | Description                                                                                                                                  |
|-----------|--------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `form`    | object |         | This is the form definition object. It should at least have a `display` property set to form, wizard or pdf.                                 |
| `options` | object |         | The form builder options. See [here](https://help.form.io/developers/form-development/form-builder#form-builder-options) for more details. |

## Event Props

| Name                | Parameters          | Description                                                      |
|---------------------|---------------------|------------------------------------------------------------------|
| `onChange`          | `schema`: object    | Triggered any time the form definition changes                   |
| `onEditComponent`   | `component`: object | Triggered when the component settings dialog is opened           |
| `onSaveComponent`   | `component`: object | Triggered when the component settings dialog is saved and closed |
| `onCancelComponent` | `component`: object | Triggered when the component settings dialog is cancelled        |
| `onDeleteComponent` | `component`: object | Triggered when a component is removed from the form              |
| `onUpdateComponent` | `component`: object | Triggered when a component is added or moved in the form         |

## Example

```tsx
import React from "react";
import ReactDOM from "react-dom";
import { FormBuilder } from "@tsed/react-formio/organisms/form/builder/FormBuilder";

ReactDOM.render(
  <FormBuilder components={[]} display={"form"} onChange={(schema) => console.log(schema)} />,
  document.getElementById("builder")
);
```

Will render the following:

<StoryEmbed id="organisms-form-builder-formbuilder--web-form" />

## Example of a wizard form

This form configuration allows users to progress through the form in bite-size sections instead of presenting the entire form to the user.
If you are creating a form containing many fields, this is a great option to improve the user experience.

<StoryEmbed id="organisms-form-builder-formbuilder--wizard" />

## Example of a pdf form

PDF-First forms allow users to upload a PDF form and add overlay fields to the form, modernizing the traditional old and clunky PDF form.
For a more in-depth guide on the PDF forms please navigate to the [following documentation](https://help.form.io/userguide/forms/pdf#introduction).

<StoryEmbed id="organisms-form-builder-formbuilder--pdf" />
