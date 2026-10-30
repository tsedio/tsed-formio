# Getting started

`@tsed/react-formio` is a React library for rendering out forms based on the [Form.io](https://form.io) platform.

> This module is based on the original [react-formio](https://github.com/formio/react-formio) and add extra features
listed below.

## Features

Many components are provided to build your own backoffice based on Formio.js API. Each link opens the component in [Storybook](storybook:):

- [ActionsTable](storybook:/docs/organisms-table-actions-actionstable--docs),
- [FormAccess](storybook:/docs/organisms-form-access-formaccess--docs),
- [FormAction](storybook:/docs/organisms-form-action-formaction--docs),
- [Form](storybook:/docs/organisms-form-form--docs),
- [FormBuilder](storybook:/docs/organisms-form-builder-formbuilder--docs),
- [FormEdit](storybook:/docs/organisms-form-builder-formedit--docs),
- [FormsTable](storybook:/docs/organisms-table-forms-formstable--docs),
- [InputTags](storybook:/docs/molecules-forms-inputtags-react--docs),
- [InputText](storybook:/docs/molecules-forms-inputtext--docs),
- [Pagination](storybook:/docs/molecules-pagination--docs),
- Select: [Choicejs](storybook:/docs/molecules-forms-select-choicejs--docs), [HTML5](storybook:/docs/molecules-forms-select-html5--docs) or [ReactSelect](storybook:/docs/molecules-forms-select-react--docs),
- [SubmissionsTable](storybook:/docs/organisms-table-submissions-submissionstable--docs).
- [Table](storybook:/docs/molecules-table--docs),
- Predefined Reducers for Actions, Action, Form, Forms, Submission, Submissions, etc...,
- TypeScript support.
- Tailwind support.

## Install

`@tsed/react-formio` can be used on the server, or bundled for the client using an
npm-compatible packaging system such as [Vite](https://vite.dev/), [webpack](http://webpack.github.io/) or [Rollup](https://rollupjs.org/).


```sh
npm install @formio/js --save // Install formiojs since it is a peerDependency
npm install @tsed/react-formio react-table --save
```



## Migrate to v2

If you use redux actions with v2, you have to install `@tsed/redux-formio-stores` and replace your imports:

```diff
- import { defaultFormioReducer, formsReducer } from "@tsed/react-formio";
+ import { defaultFormioReducer, formsReducer } from "@tsed/react-formio-stores";
```

## Migrate to v3

See the [v2 to v3 migration guide](/migrations/v2-to-v3) for the full upgrade path. Highlights:

- **ESM-only outputs** – the package now ships ESM bundles exclusively. Update bundlers/tests and import components from their atomic paths (e.g. `@tsed/react-formio/organisms/form/Form`). Use `import "@tsed/react-formio/all"` only when you need legacy side-effects.
- **Tailwind 3 baseline** – upgrade to Tailwind ≥3.3 and install `@tsed/tailwind-formio@^3`; v2 tokens are removed.
- **Store packages removed** – uninstall `@tsed/react-formio-stores`, `@tsed/redux-utils`, and `@tsed/react-formio-container`. Replace them with the provided hooks (`useForm`, `useFormioContext`, `useFormBuilder`) or your own state layer.
- **Tables migrated to TanStack** – if you rely on the Table component or `UseTableProps`, read the [Table & `useTable` specifics](/migrations/v2-to-v3#table--usetable-specifics) for column definitions, prop mapping, and TanStack-only requirements.
- **New peer dependencies** – install `@formio/choices.js`, `@tanstack/react-table`, `react-select`, `react-table`, and `use-debounce`.

Example import change:

```diff
- import { Form } from "@tsed/react-formio";
+ import { Form } from "@tsed/react-formio/organisms/form/Form";
```

## Usage

```tsx
import React from "react";
import "@tsed/react-formio/all"; // load all library components
import { FormBuilder } from "@tsed/react-formio/organisms/form/builder/FormBuilder";

function App() {
  return (
    <div className='App'>
      <FormBuilder display={"form"} components={[/**/]} />
    </div>
  );
}

export default App;
```

<StoryEmbed id="organisms-form-builder-formbuilder--web-form" />

## Registering react components

See [Register react component](/guide/register-react-component) documentation.

## Optimize your bundle size

See [Optimize your bundle size](/guide/optimize-your-bundle-size) documentation.
