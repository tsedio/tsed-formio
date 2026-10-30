# FormEdit

::: tip Storybook
Browse the props, controls and all the stories of `FormEdit` in [Storybook](storybook:/docs/organisms-form-builder-formedit--docs).
:::

The [FormEdit](storybook:/docs/organisms-form-builder-formedit--docs) component wraps
the [FormBuilder](/components/form-builder) component and
adds the title, display, name and path fields at the top along with a save button.

## Props

| Name       | Type   | Default             | Description                                                     |
|------------|--------|---------------------|-----------------------------------------------------------------|
| `form`     | object | `{display: 'form'}` | The form definition of the exiting form that is to be modified. |
| `options`  | object | `{}`                | The options to be passed to FormBuilder                         |
| `saveText` | string | `''`                | The string that will be displayed in the save-button            |


## Event Props

| Name       | Parameters | Description                                                                            |
|------------|------------|----------------------------------------------------------------------------------------|
| `onSubmit` | form       | Called when the save button is pressed. Will pass the form definition to the callback. |

## Example

<StoryEmbed id="organisms-form-builder-formedit--edit-web-form" />
