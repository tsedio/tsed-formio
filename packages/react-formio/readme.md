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
| `formReady` | `formInstance`: Webform/Wizard - form class instance | Called when the form gets ready state |

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

@tsed/react-table contain Redux actions, reducers, constants and selectors to simplify the API requests made for form.io forms. Reducers, actions and selectors all have names. 
This provides namespaces so the same actions and reducers can be re-used within the same redux state.

### root

The root module is the container for things shared by other modules such as the selectRoot selector.

#### Selectors

| Name | Parameters | Description |
|---|---|---|
| `selectRoot` | name: string, state: object | Returns the state for a namespace |
| `selectError` | name: string, state: object | Returns any errors for a namespace |
| `selectIsActive` | name: string, state: object | Returns isActive state for a namespace |

### auth

The auth module is designed to make it easier to login, register and authenticate users within react using the form.io login system.

#### Reducers

| Name | Parameters | Description |
|---|---|---|
| `auth` | config: object | Mounts the user and access information to the state tree. Config is not currently used but is a placeholder to make it consistent to the other reducers.

[comment]: <> (#### Actions)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `initAuth` |  | This is usually used at the start of an app code. It will check the localStorage for an existing user token and if found, log them in and fetch the needed information about the user. |)

[comment]: <> (| `setUser` | user: object | When a user logs in, this will set the user and fetch the access information for that user. The user object is usually a submission from the login or register form. |)

[comment]: <> (| `logout` | | This action will reset everything to the default state, including removing any localStorage information. |)

[comment]: <> (### form)

[comment]: <> (The form module is for interacting with a single form.)

[comment]: <> (#### Reducers)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `form` | config: object | Mounts the form to the state tree. The config object should contain a name property defining a unique name for the redux state. |)

[comment]: <> (#### Actions)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `getForm` | name: string, id: string, done: function | Fetch a form from the server. If no id is provided, the name is used as the path. The `done` callback will be called when the action is complete. The first parameter is any errors and the second is the form definition. |)

[comment]: <> (| `saveForm` | name: string, form: object, done: function | Save a form to the server. It will use the _id property on the form to save it if it exists. Otherwise it will create a new form. The `done` callback will be called when the action is complete. The first parameter is any errors and the second is the form definition. |)

[comment]: <> (| `deleteForm` | name: string, id: string, done: function | Delete the form on the server with the id. |)

[comment]: <> (| `resetForm` | Reset this reducer back to its initial state. This is automatically called after delete but can be called other times as well. |)

[comment]: <> (#### Selectors)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `selectForm` | name: string, state: object | Select the form definition from the state. |)

[comment]: <> (### forms)

[comment]: <> (The forms module handles multiple forms like a list of forms.)

[comment]: <> (#### Reducers)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `forms` | config: object | Mounts the forms to the state tree. The config object should contain a name property defining a unique name for the redux state. The config object can also contain a query property which is added to all requests for forms. For example: {tags: 'common'} would limit the lists of forms to only forms tagged with 'common'.|)

[comment]: <> (#### Actions)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `getForms` | name: string, page: integer, params: object | Fetch a list of forms from the server. `params` is a query object to filter the forms. |)

[comment]: <> (| `resetForms` | Reset this reducer back to its initial state. This is automatically called after delete but can be called other times as well. |)

[comment]: <> (#### Selectors)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `selectForms` | name: string, state: object | Select the list of forms from the state. |)

[comment]: <> (### submission)

[comment]: <> (The submission module is for interacting with a single submission.)

[comment]: <> (#### Reducers)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `submission` | config: object | Mounts the submission to the state tree. The config object should contain a name property defining a unique name for the redux state. |)

[comment]: <> (#### Actions)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `getSubmission` | name: string, id: string, formId: string, done: function | Fetch a submission from the server. The `done` callback will be called when the action is complete. The first parameter is any errors and the second is the submission. |)

[comment]: <> (| `saveSubmission` | name: string, submission: object, formId: string, done: function | Save a submission to the server. It will use the _id property on the submission to save it if it exists. Otherwise it will create a new submission. The `done` callback will be called when the action is complete. The first parameter is any errors and the second is the submission. |)

[comment]: <> (| `deleteSubmission` | name: string, id: string, formId: string, done: function | Delete the submission on the server with the id. |)

[comment]: <> (| `resetSubmission` | Reset this reducer back to its initial state. This is automatically called after delete but can be called other times as well. |)

[comment]: <> (#### Selectors)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `selectSubmission` | name: string, state: object | Select the submission data from the state. |)


[comment]: <> (### submissions)

[comment]: <> (The submissions module handles multiple submissions within a form, like for a list of submissions.)

[comment]: <> (#### Reducers)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `submissions` | config: object | Mounts the submissions to the state tree. The config object should contain a name property defining a unique name for the redux state. |)

[comment]: <> (#### Actions)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `getSubmissions` | name: string, page: integer, params: object, formId: string | Fetch a list of submissions from the server. `params` is a query object to filter the submissions. |)

[comment]: <> (| `resetSubmissions` | Reset this reducer back to its initial state. This is automatically called after delete but can be called other times as well. |)

[comment]: <> (#### Selectors)

[comment]: <> (| Name | Parameters | Description |)

[comment]: <> (|---|---|---|)

[comment]: <> (| `selectSubmissions` | name: string, state: object | Select the list of submissions from the state. |)

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

