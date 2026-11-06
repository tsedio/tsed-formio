# Tailwind theme

Formio.js allows you to install different themes. This package provides a theme based on Tailwind CSS v4.

## Install

The theme requires **Tailwind CSS v4** (Safari 16.4+, Chrome 111+, Firefox 128+).
Coming from Tailwind CSS v3? Read the [Tailwind CSS v4 migration guide](/migrations/tailwind-v4).

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

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Formio, Templates } from "@tsed/react-formio";
import tailwind from "@tsed/tailwind-formio";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Formio.use(tailwind);
Templates.framework = "tailwind";

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