<p style="text-align: center" align="center">
 <a href="https://tsed.dev" target="_blank"><img src="https://tsed.dev/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">

   <h1>Ts.ED - React Formio stores</h1>

[![Build & Release](https://github.com/tsedio/tsed-formio/actions/workflows/build.yml/badge.svg)](https://github.com/tsedio/tsed-formio/actions/workflows/build.yml)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![backers](https://opencollective.com/tsed/tiers/badge.svg)](https://opencollective.com/tsed)

</div>

<div align="center">
  <a href="https://tsed.dev/">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://tsed.dev/tutorials/prisma.html">Tutorial</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://slack.tsed.dev">Slack</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/TsED_io">Twitter</a>
</div>

<hr />

A [React](http://facebook.github.io/react/) library for rendering out forms based on the [Form.io](https://www.form.io)
platform.

This module is based on the original [react-formio](https://github.com/formio/react-formio) and add extra features
listed above.

See our [storybook](https://formio.tsed.dev/) to see all available components.

## Install

`@tsed/react-formio-stores` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```bash
npm install @tsed/react-formio @tsed/react-formio-stores react-table --save
npm install formiojs @formio/choices.js --save // Install formiojs since it is a peerDependency
```

## Usage

`@tsed/react-formio-stores` contain Redux actions, reducers and selectors to simplify the API requests made for `form.io` forms.
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

By default, `@tsed/react-formio-stores` provides defaults combined reducers as following:

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
import { defaultFormioReducer, formsReducer } from "@tsed/react-formio-stores";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";

export const rootReducers = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    ...defaultFormioReducer,
    // override defaultFormioReducer can done as following
    ...combine(
      formsReducer("forms", { query: { type: "form", tags: ["common"] } }), // return only forms with the common tags
      formsReducer("resources", { query: { type: "resource", tags: ["common"] } }) // return only resources with the common tags
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

Support this project by becoming a sponsor. Your logo will show up here with a link to your
website. [[Become a sponsor](https://opencollective.com/tsed#sponsor)]

## License

The MIT License (MIT)

Copyright (c) 2016 - 2021 Romain Lenzotti

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
