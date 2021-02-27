<p style="text-align: center" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

[![Build & Release](https://github.com/TypedProject/tsed/workflows/Build%20&%20Release/badge.svg)](https://github.com/TypedProject/tsed-formio/actions?query=workflow%3A%22Build+%26+Release%22)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)

A [React](http://facebook.github.io/react/) library for rendering out forms based on the [Form.io](https://www.form.io) platform.

This module is based on the original [react-formio](https://github.com/formio/react-formio) and add extra features listed above.

See our [storybook](https://formio.tsed.io/) to see all available components.

## Features

* Many components are provided to build your own backoffice based on Formio.js API:
  * [ActionsTable](https://formio.tsed.io/?path=/story/reactformio-actionstable--sandbox),
  * [FormAccess](https://formio.tsed.io/?path=/story/reactformio-formaccess--sandbox),
  * [FormAction](https://formio.tsed.io/?path=/story/reactformio-formaction--sandbox),
  * [Form](https://formio.tsed.io/?path=/story/reactformio-form--sandbox),
  * [FormBuilder](https://formio.tsed.io/?path=/story/reactformio-formbuilder--sandbox),
  * [FormEdit](https://formio.tsed.io/?path=/story/reactformio-formedit--sandbox),
  * [FormsTable](https://formio.tsed.io/?path=/story/reactformio-formstable--sandbox),
  * [InputTags](https://formio.tsed.io/?path=/story/reactformio-inputtags--sandbox),  
  * [InputText](https://formio.tsed.io/?path=/story/reactformio-inputtext--sandbox),   
  * [Pagination](https://formio.tsed.io/?path=/story/reactformio-pagination--sandbox),
  * [Select](https://formio.tsed.io/?path=/story/reactformio-select--sandbox),
  * [SubmissionsTable](https://formio.tsed.io/?path=/story/reactformio-subssionsstable--sandbox).
  * [Table](https://formio.tsed.io/?path=/story/reactformio-table--sandbox),
* Predefined Reducers for Actions, Action, Form, Forms, Submission, Submissions, etc...,  
* TypeScript support.
* Tailwind support.

## Install

`@tsed/react-formio` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```bash
npm install @tsed/react-formio react-table --save
npm install formiojs --save // Install formiojs since it is a peerDependency
```

## Components

### Form

The form component is the primary component of the system. It is what takes the form definition (json) and renders the form into html. There are multiple ways to send the form to the Form component. The two main ways are to pass the ```src``` prop with a url to the form definition, usually a form.io server. The other is to pass the   ```form``` prop with the json definition and optionally a ```url``` prop with the location of the form.

#### Props

| Name | Type | Default | Description |
|---|---|---|---|
| `src`  | url  |   | The url of the form definition. This is commonly from a form.io server. When using src, the form will automatically submit the data to that url as well.  |
| `url` | url  |   | The url of the form definition. The form will not be loaded from this url and the submission will not be saved here either. This is used for file upload, oauth and other components or actions that need to know where the server is. Use this in connection with `form`  |
| `form` | object |   | Instead of loading a form from the `src` url, you can preload the form definition and pass it in with the `form` prop. You should also set `url` if you are using any advanced components like file upload or oauth. |
| `submission` | object | | Submission data to fill the form. You can either load a previous submission or create a submission with some pre-filled data. If you do not provide a submissions the form will initialize an empty submission using default values from the form. |
| `options` | object | | an options object that can pass options to the formio.js Form that is rendered. You can set options such as `readOnly`, `noAlerts` or `hide`. There are [many options to be found in the formio.js library](https://github.com/formio/formio.js/wiki/Form-Renderer#options). |

#### Event Props

You can respond to various events in the form. Simply pass in a prop with a function for one of these events.

| Name | Parameters | Description |
|---|---|---|
| `onSubmit`  | `submission`: object | When the submit button is pressed and the submission has started. If `src` is not provided, this will be the final submit event.|
| `onSubmitDone` | `submission`: object | When the submission has successfully been made to the server. This will only fire if `src` is set. |
| `onChange` | `submission`: object, `submission.changed`: object of what changed, `submission.isValid`: boolean - if the submission passes validations. | A value in the submission has changed. |
| `onError` | `errors`: array or string or boolean | Called when an error occurs during submission such as a validation issue. |
| `onRender` | | Triggers when the form is finished rendering. |
| `onCustomEvent` | { `type`: string - event type, `component`: object - triggering component, `data`: object - data for component, `event`: string - raw event } | Event that is triggered from a button configured with "Event" type. | 
| `onPrevPage` | { `page`: integer - new page number, `submission`: object - submission data } | Triggered for wizards when "Previous" button is pressed |
| `onNextPage` | { `page`: integer - new page number, `submission`: object - submission data } | Triggered for wizards when "Next" button is pressed |
| `onFormReady` | `formInstance`: Webform/Wizard - form class instance | Called when the form gets ready state |

#### Example

Give `Form` a `src` property and render:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {Form} from '@tsed/react-formio';
```

```javascript
ReactDOM.render(
  <Form src="https://example.form.io/example" onSubmit={console.log} />
  , document.getElementById('example')
);
```

### FormBuilder

The [FormBuilder]([FormsTable](https://formio.tsed.io/?path=/story/reactformio-formbuilder--sandbox)) class can be used 
to embed a form builder directly in your react application. 
Please note that you'll need to include the CSS for the form builder from formio.js as well.

Please note that the [FormBuilder]([FormsTable](https://formio.tsed.io/?path=/story/reactformio-formbuilder--sandbox)) component
does not load and save from/to a url. You must handle the form definition loading and saving yourself or use 
the [FormEdit](https://formio.tsed.io/?path=/story/reactformio-formedit--sandbox) component.

#### Props

| Name | Type | Default | Description |
|---|---|---|---|
| `form` | object |   | This is the form definition object. It should at least have a `display` property set to form, wizard or pdf. |
| `options` | object | | an options object that can pass options to the formio.js Form that is rendered. There are many options to be found in the formio.js library. |

#### Event Props

| Name | Parameters | Description |
|---|---|---|
| `onChange`  | `schema`: object | Triggered any time the form definition changes |
| `onEditComponent` | `component`: object | Triggered when the component settings dialog is opened |
| `onSaveComponent` | `component`: object | Triggered when the component settings dialog is saved and closed |
| `onCancelComponent` | `component`: object | Triggered when the component settings dialog is cancelled |
| `onDeleteComponent` | `component`: object | Triggered when a component is removed from the form |
| `onUpdateComponent` | `component`: object | Triggered when a component is added or moved in the form |

#### Example

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import {FormBuilder} from '@tsed/react-formio';
```

```javascript
ReactDOM.render(
  <FormBuilder form={{display: 'form'}} onChange={(schema) => console.log(schema)} />
  , document.getElementById('builder')
);
```

### FormEdit

The [FormEdit](https://formio.tsed.io/?path=/story/reactformio-formedit--sandbox) component wraps 
the [FormBuilder]([FormsTable](https://formio.tsed.io/?path=/story/reactformio-formbuilder--sandbox)) component and adds the title, display, name and path fields at the top along with a save button.

#### Props

| Name | Type | Default | Description |
|---|---|---|---|
| `form` | object | {display: 'form' \| 'wizard'} | The form definition of the exiting form that is to be modified. |
| `options` | object | {} | The options to be passed to FormBuilder |
| `saveText` | string | '' | The string that will be displayed in the save-button |

#### Event Props

| Name | Parameters | Description |
|---|---|---|
| `onSubmit` | form | Called when the save button is pressed. Will pass the form definition to the callback. |

### FormsTable

The [FormsTable](https://formio.tsed.io/?path=/story/reactformio-formstable--sandbox) component can be used to render a list of forms with buttons to edit, view, delete, etc on each row.

#### Props

| Name | Type | Default | Description |
|---|---|---|---|
| `data` | array of forms | [] | A list of forms to be rendered in the grid. 

### SubmissionsTable

The submisison grid will render a list of submissions and allow clicking on one row to select it.

#### Props

| Name | Type | Default | Description |
|---|---|---|---|
| `data` | array of submissions | [] | A list of submissions to be rendered in the grid. |
| `form` | object | {} | The form definition for the submissions. This is used to render the submissions. |

## Redux

@tsed/react-formio contain Redux actions, reducers and selectors to simplify the API requests made for `form.io` forms.
reducers, actions and selectors.
The following reducers have names:

- formsReducers: manage the forms,
- formReducers: manage the current form,
- submissionsReducers: manage the submissions of a form.
- submissionReducers: manage the current submission of a form

This provides namespaces so the same actions and reducers can be re-used within the same redux state.

In addition, the package provides the follwing reducers

- actionsReducers: Manage actions of a form.
- actionReducers: Manage the current action of a form.
- actionInfoReducers: Manage the available actions for all forms and resources.
- authReducers: Manage formio authentication.

By default, `@tsed/react-formio` provides defaults combined reducers as following:

```typescript
export const defaultFormioReducer = combine(
  authReducer,
  actionsReducer,
  actionReducer,
  actionInfoReducer,
  formReducer("form"),
  formsReducer("forms", { query: { type: "form" } }),
  formReducer("resource"),
  formsReducer("resources", { query: { type: "resource" } }),
  submissionReducer("submission"),
  submissionsReducer("submissions")
);
```

This `defaultFormioReducer` can be added and configured in your rootReducer as following :

```typescript
import { combine } from "@tsed/redux-utils";
import { defaultFormioReducer, formsReducer } from "@tsed/react-formio";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

export const rootReducers = (history: any) =>
combineReducers({
  router: connectRouter(history),
  ...defaultFormioReducer,
  // override defaultFormioReducer can done as following
  ...combine(
    formsReducer("forms", { query: { type: "form", tags: ['common'] } }), // return only forms with the common tags
    formsReducer("resources", { query: { type: "resource", tags: ['common'] } }) // return only resources with the common tags
  )
});
```

## Contributors
Please read [contributing guidelines here](./CONTRIBUTING.md).

<a href="https://github.com/TypedProject/tsed/graphs/contributors"><img src="https://opencollective.com/tsed/contributors.svg?width=890" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/tsed#backer)]

<a href="https://opencollective.com/tsed#backers" target="_blank"><img src="https://opencollective.com/tsed/tiers/backer.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/tsed#sponsor)]

## License

The MIT License (MIT)

Copyright (c) 2016 - 2021 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[travis]: https://travis-ci.org/

