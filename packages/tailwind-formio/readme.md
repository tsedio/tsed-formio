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

```bash
npm install @tsed/tailwind-formio --save
npm install --save-dev postcss-nested@4
```

### Tailwind and create-react-app

If you use `create-react-app`, you'll need to follow the official tailwind guide installation here: https://tailwindcss.com/docs/guides/create-react-app

### Configure postcss

Edit the `craco.config.js` (or `postcss.config.js`) and add the `postcss-nested` to the postcss plugins list:

```diff
module.exports = {
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
+       require('postcss-nested')
        require('autoprefixer')
      ]
    }
  }
}
```

Or:

```diff
export default {
  plugins: {
    'tailwindcss/nesting': {},
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### Configure tailwind

Generate the initial `tailwind.config.js` with the following command:

```bash
npx tailwindcss-cli@latest init
```

Edit the `tailwind.config.js` and copy the following content:

```js
import { tailwindPreset } from "@tsed/tailwind-formio/tailwind.preset";

const primary = "hsla(208, 100%, 43%, 1)";
const secondary = "hsla(190, 81%, 42%, 1)";

module.exports = {
  content: [
    "./node_modules/**/*.{js,jsx,ts,tsx,ejs}"
    // add your paths
  ],
  presets: [],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: primary,
          50: "hsla(208, 100%, 91%, 1)",
          100: "hsla(208, 100%, 83%, 1)",
          200: "hsla(208, 100%, 75%, 1)",
          300: "hsla(208, 100%, 67%, 1)",
          400: "hsla(208, 100%, 59%, 1)",
          500: "hsla(208, 100%, 51%, 1)",
          600: primary,
          700: "hsla(208, 100%, 35%, 1)",
          800: "hsla(208, 100%, 27%, 1)",
          900: "hsla(208, 100%, 19%, 1)"
        },
        secondary: {
          DEFAULT: secondary,
          50: "hsla(190, 81%, 90%, 1)",
          100: "hsla(190, 81%, 82%, 1)",
          200: "hsla(190, 81%, 74%, 1)",
          300: "hsla(190, 81%, 66%, 1)",
          400: "hsla(190, 81%, 58%, 1)",
          500: "hsla(190, 81%, 50%, 1)",
          600: secondary,
          700: "hsla(190, 81%, 34%, 1)",
          800: "hsla(190, 81%, 28%, 1)",
          900: "hsla(190, 81%, 20%, 1)"
        },
        "gray-darker": "#504747"
      }
    }
  }
};
```

Then create a `tailwind.css` in `styles` directory and add the following lines:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Import the `tailwind.css` in the `index.css` created by create-react-app:

```css
@import "~formiojs/dist/formio.full.css";
@import "./tailwind.css";
@import "~@tsed/tailwind-formio/styles/index.css";
```

Optionally, you can import fonts and icons:

```diff
@import "~formiojs/dist/formio.full.css";
@import "./tailwind.css";
+@import "./fonts/source-sans-pro/index.css";
+@import "./fonts/inconsolata/index.css";
+@import "./fonts/bxicons/index.css";
@import "~@tsed/tailwind-formio/styles/index.css";
```

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
