<p style="text-align: center" align="center">
 <a href="https://tsed.dev" target="_blank"><img src="https://tsed.dev/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">

   <h1>Ts.ED - React Formio</h1>

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
  <a href="https://api.tsed.dev/rest/slack/tsedio/tsed">Slack</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/TsED_io">Twitter</a>
</div>

<hr />

A [React](http://facebook.github.io/react/) library for rendering out forms based on the [Form.io](https://www.form.io)
platform.

This module is based on the original [react-formio](https://github.com/formio/react-formio) and add extra features
listed above.

See our [storybook](https://formio.tsed.dev/?path=/docs/getting-started--docs) to see all available components and installation guide.

## Features

Many components are provided to build your own backoffice based on Formio.js API:

- ActionsTable,
- FormAccess,
- FormAction,
- Form,
- FormBuilder,
- FormEdit,
- FormsTable,
- InputTags,
- InputText,
- Pagination,
- Select,
- SubmissionsTable.
- Table,
- Predefined Reducers for Actions, Action, Form, Forms, Submission, Submissions, etc...,
- TypeScript support.
- Tailwind support.

## Migrate to v2

If you use redux actions from v1, you have to install `@tsed/redux-formio-stores` and remplace your imports:

```diff
- import { defaultFormioReducer, formsReducer } from "@tsed/react-formio";
+ import { defaultFormioReducer, formsReducer } from "@tsed/react-formio-stores";
```

## Migrate to v3

See [`docs/migrations/v2-to-v3.md`](../../docs/migrations/v2-to-v3.md) for the full guide. Highlights:

- **ESM only** – the package now exports ESM bundles exclusively. Update any `require()` calls and ensure your bundler/test runner supports native ESM.
- **Tree-shaken imports** – import components from their atomic folder (e.g. `@tsed/react-formio/organisms/form/Form`). Use `import "@tsed/react-formio/all"` once if you still need global side-effects/registrations.
- **Tailwind 3 baseline** – install `@tsed/tailwind-formio@^3` and upgrade to Tailwind ≥3.3; legacy Tailwind v2 tokens were removed.
- **Store packages removed** – uninstall `@tsed/react-formio-stores`, `@tsed/redux-utils`, and `@tsed/react-formio-container`. Use the provided hooks (`useForm`, `useFormBuilder`, `useFormioContext`) or your own state management.
- **New peer dependencies** – install the updated UI stack:
  ```bash
  yarn add @formio/choices.js @tanstack/react-table react-select react-table use-debounce
  ```
- **Tables** – if you rely on the Table component or `UseTableProps`, review the [Table & `useTable` specifics](../../docs/migrations/v2-to-v3.md#table--usetable-specifics) section for the TanStack-specific migration notes.

Example import diff:

```diff
- import { Form } from "@tsed/react-formio";
+ import { Form } from "@tsed/react-formio/organisms/form/Form";
```

## Install

`@tsed/react-formio` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as [Browserify](http://browserify.org/) or
[webpack](http://webpack.github.io/).

```bash
npm install @formio/js @tsed/react-formio react-table --save
```

## Usage

```tsx
import React from "react";
import { FormBuilder } from "@tsed/react-formio";

function App() {
  return (
    <div className='App'>
      <FormBuilder display={"form"} components={[]} />
    </div>
  );
}

export default App;
```

See more on http://formio.tsed.dev/?path=/docs/getting-started--docs

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
