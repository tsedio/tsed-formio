<p style="text-align: center" align="center">
 <a href="https://tsed.io" target="_blank"><img src="https://tsed.io/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">

   <h1>Ts.ED - React Formio container</h1>

[![Build & Release](https://github.com/tsedio/tsed-formio/actions/workflows/build.yml/badge.svg)](https://github.com/tsedio/tsed-formio/actions/workflows/build.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)

</div>

<div align="center">
  <a href="https://tsed.io/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://tsed.io/tutorials/prisma.html">Tutorial</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://api.tsed.io/rest/slack/tsedio/tsed">Slack</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/TsED_io">Twitter</a>
</div>

<hr />

A [React](http://facebook.github.io/react/) library for rendering out forms based on the [Form.io](https://www.form.io) platform.

This module is based on the original [react-formio](https://github.com/formio/react-formio) and add extra features listed above.

See our [storybook](https://formio.tsed.io/) to see all available components.

## Features

- Provide extends component to create your formio backoffice

## Install

`@tsed/react-formio-container` can be used on the server, or bundled for the client using a
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```bash
npm install --save @tsed/react-formio-container file-saver
npm install --save-dev @types/file-saver
```

Peer dependencies:

- react
- react-dom
- react-router
- react-router-dom
- react-table
- react-redux
- connected-react-router
- file-saver

## Examples

```javascript
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path='/formio/:formType' exact={false}>
              <FormioContainer
                basePath={"/formio/:formType"}
                operationsSettings={{
                  edit: true,
                  access: true,
                  actions: true,
                  submissions: true,
                  exports: true,
                  delete: true
                }}
                onSuccess={(eventObj) => {
                  console.log(eventObj);
                }}
                onInfo={(eventObj) => {
                  console.log(eventObj);
                }}
                onError={(eventObj) => {
                  console.log(eventObj);
                }}
              />
            </Route>
          </Switch>
        </ConnectedRouter>
        <ToastContainer />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
```

### Options

```typescript
export interface FormioContainerOptions extends Record<string, unknown> {
  className?: string;
  /**
   * The base path
   */
  basePath: string;
  /**
   * The formType
   */
  formType?: string;
  /**
   * The formType
   */
  formId?: string;
  /**
   * Permitted operationsSettings
   */
  operationsSettings: Record<string, boolean>;
  /**
   * List of routes/tabs displayed on the FormEdit page.
   */
  formRoutes?: FormRoute[];
  /**
   * Handler called when an event is a success
   */
  onInfo?: FormioEventHandler;
  /**
   * Handler called when an event is a success
   */
  onSuccess?: FormioEventHandler;
  /**
   * Handler called when an event is an error
   */
  onError?: FormioErrorHandler;
  /**
   * i18n function to translate sentences
   */
  i18n?: (f: string) => string;

  // override components
  FormsComponent?: React.ComponentType;
  FormComponent?: React.ComponentType;
  FormActionsComponent?: React.ComponentType;
  FormActionComponent?: React.ComponentType;
  FormExportComponent?: React.ComponentType;
  FormEditComponent?: React.ComponentType;
  FormAccessComponent?: React.ComponentType;
  SubmissionComponent?: React.ComponentType;
  SubmissionsComponent?: React.ComponentType;
  RemoveModalComponent?: React.ComponentType;
}
```

### formRoutes

Form routes are a list of available operations/routes displayed in the FormComponent.
The default routes are the following:

```typescript
export const defaultFormRoutes: FormRoute[] = [
  {
    action: "back",
    exact: true,
    icon: "chevron-left",
    back: true
  },
  {
    action: "edit",
    exact: true,
    icon: "edit",
    label: "Edit",
    component: FormEditView
  },
  {
    action: "submissions",
    exact: false,
    icon: "data",
    label: "Data",
    component: SubmissionsView
  },
  {
    action: "preview",
    exact: true,
    icon: "test-tube",
    label: "Preview",
    component: FormPreviewView
  },
  {
    action: "actions",
    exact: false,
    icon: "paper-plane",
    label: "Actions",
    component: FormActionsView,
    roles: ["administrator", "owner"]
  },
  {
    action: "access",
    exact: true,
    icon: "lock",
    label: "Access",
    component: FormAccessView,
    roles: ["administrator", "owner"]
  },
  {
    action: "export",
    exact: true,
    icon: "download",
    label: "Export",
    component: FormExportView
  },
  {
    action: "delete",
    exact: true,
    icon: "trash",
    label: "Delete",
    roles: ["administrator", "owner"]
  }
];
```

You can change the form routes as following:

```javascript
<FormioContainer basePath={"/formio/:formType"} formRoutes={defaultFormRoutes} />
```

### onInfo, onSuccess, onError

FormioContainer emit some events when message must be displayed to the user. You can use any library to display the message like `react-toastify`.

Example:

```javascript
<FormContainer
  onSuccess={(eventObj) => {
    toastr.success(eventObj.title, eventObj.message);
  }}
  onInfo={(eventObj) => {
    toastr.info(eventObj.title, eventObj.message);
  }}
  onError={(eventObj) => {
    toastr.error(eventObj.title, eventObj.message);
  }}
/>
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
