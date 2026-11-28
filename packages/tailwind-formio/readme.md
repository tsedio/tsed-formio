<p style="text-align: center" align="center">
 <a href="https://tsed.dev" target="_blank"><img src="https://tsed.dev/tsed-og.png" width="200" alt="Ts.ED logo"/></a>
</p>

<div align="center">

   <h1>Ts.ED - Tailwind Formio</h1>

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

This repository will change the rendering of forms in formio.js so that it uses html and classes compatible with the [Semantic UI](https://semantic-ui.com/) framework.

## Install

The theme requires **Tailwind CSS v4** (Safari 16.4+, Chrome 111+, Firefox 128+).
Coming from Tailwind CSS v3? Read the [Tailwind CSS v4 migration guide](https://formio.tsed.dev/migrations/tailwind-v4).

```shell
npm install @tsed/tailwind-formio --save
npm install tailwindcss @tailwindcss/vite --save-dev
```

## Configure Tailwind CSS

Tailwind CSS v4 has no `tailwind.config.js` and no PostCSS setup to maintain. Add the Vite plugin:

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [tailwindcss(), react()]
});
```

Not using Vite? Use `@tailwindcss/postcss` or `@tailwindcss/cli` instead (see the [Tailwind CSS installation guide](https://tailwindcss.com/docs/installation)).

Then create (or edit) your main stylesheet, for example `src/index.css`:

```css
@import "tailwindcss";
@import "@tsed/tailwind-formio/theme.css";

/* Tailwind does not scan node_modules: register the packages that ship classes */
@source "../node_modules/@tsed/react-formio";

@import "@formio/js/dist/formio.full.css";
@import "@tsed/tailwind-formio/styles/index.css";
```

`theme.css` declares the theme tokens (colors, fonts, sizes), registers the Form.io templates as a source and adds the `dark` class variant.
Import `styles/index.css` from this stylesheet: its rules use `@apply` and need the theme loaded before them.

Optionally, you can import fonts and icons:

```diff
@import "tailwindcss";
@import "@tsed/tailwind-formio/theme.css";
@source "../node_modules/@tsed/react-formio";
@import "@formio/js/dist/formio.full.css";
+@import "@tsed/tailwind-formio/fonts/source-sans-pro/index.css";
+@import "@tsed/tailwind-formio/fonts/inconsolata/index.css";
+@import "lucide-static/font/lucide.css"; /* if you want to use lucide icons (you have to install it) */
@import "@tsed/tailwind-formio/styles/index.css";
```

### Customize the theme

Override any token in your own `@theme` block, after the theme import:

```css
@import "tailwindcss";
@import "@tsed/tailwind-formio/theme.css";

@theme {
  --color-primary: hsla(260, 80%, 45%, 1);
  --color-primary-600: hsla(260, 80%, 45%, 1);
  --font-sans: "Inter", sans-serif;
}
```

The full list of tokens is in [`theme.css`](https://github.com/tsedio/tsed-formio/blob/master/packages/tailwind-formio/theme.css).

Now, we can configure formio to use the tailwind template in our React application.
So edit the `index.js` (or `index.ts`):

```diff
import React from 'react';
import ReactDOM from 'react-dom';
+import { Formio, Templates } from "@tsed/react-formio";
+import tailwind from "@tsed/tailwind-formio";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

+Formio.use(tailwind);
+Templates.framework = "tailwind";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Finally, start the application!

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
