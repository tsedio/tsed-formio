# Migrate to Tailwind CSS v4

`@tsed/tailwind-formio` now targets **Tailwind CSS v4**. The theme moves from a JavaScript preset to a CSS file (`theme.css`), and
the Tailwind setup in your application changes with it.

::: warning Browser support
Tailwind CSS v4 requires **Safari 16.4+, Chrome 111+ and Firefox 128+**. If you must support older browsers, stay on the
previous major version of `@tsed/tailwind-formio` with Tailwind CSS v3.
:::

## Breaking changes at a glance

| Before (Tailwind v3)                                       | After (Tailwind v4)                                     |
| ---------------------------------------------------------- | ------------------------------------------------------- |
| `@tsed/tailwind-formio/tailwind.preset` (JS preset)        | `@tsed/tailwind-formio/theme.css` (`@theme` variables)  |
| `tailwind.config.js` with `presets`, `content`, `darkMode` | No config file: `@import`, `@source`, `@custom-variant` |
| `postcss.config.js` with `tailwindcss`, `autoprefixer`…    | `@tailwindcss/vite` (or `@tailwindcss/postcss`)         |
| `@tailwind base; @tailwind components; @tailwind utilities;` | `@import "tailwindcss";`                              |

## Step-by-step

### 1. Dependencies

```bash
npm install tailwindcss@^4 @tailwindcss/vite --save-dev
npm uninstall autoprefixer postcss-normalize
```

### 2. Build setup

Add the Vite plugin and delete `postcss.config.js` (unless other PostCSS plugins still need it):

```ts
// vite.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()]
});
```

### 3. Main stylesheet

```diff
-@tailwind base;
-@tailwind components;
-@tailwind utilities;
+@import "tailwindcss";
+@import "@tsed/tailwind-formio/theme.css";
+@source "../node_modules/@tsed/react-formio";
+/* add a @source for every other folder Tailwind must scan */

 @import "@formio/js/dist/formio.full.css";
 @import "@tsed/tailwind-formio/styles/index.css";
```

- Tailwind v4 detects sources automatically but **ignores `node_modules`**. `theme.css` already registers the Form.io
  templates; add `@source` for `@tsed/react-formio` and any other package that ships classes.
- Keep `styles/index.css` in the same stylesheet, after `theme.css`: its rules use `@apply` with the theme tokens.
- Relative imports must start with `./` (`@import "./fonts.css"`), otherwise Tailwind resolves them as npm packages.

### 4. Remove `tailwind.config.js`

Move your customizations to CSS:

```diff
-import { tailwindPreset } from "@tsed/tailwind-formio/tailwind.preset";
-
-export default {
-  content: ["./src/**/*.{js,ts,jsx,tsx}", "./node_modules/**/*.{js,jsx,ts,tsx,ejs}"],
-  darkMode: "class",
-  presets: [tailwindPreset],
-  theme: {
-    extend: {
-      colors: { primary: { DEFAULT: "#6d28d9", 600: "#6d28d9" } }
-    }
-  }
-};
```

```css
@import "tailwindcss";
@import "@tsed/tailwind-formio/theme.css";

@theme {
  --color-primary: #6d28d9;
  --color-primary-600: #6d28d9;
}
```

- `darkMode: "class"` is provided by `theme.css` (`@custom-variant dark`).
- A JavaScript config can still be loaded with `@config "./tailwind.config.js";` while you migrate, but the preset is no longer
  published.

### 5. Update your own classes

Run the official upgrade tool on **your** code, then review the diff:

```bash
npx @tailwindcss/upgrade
```

Main renames: `shadow-sm` → `shadow-xs`, `shadow` → `shadow-sm`, `rounded-sm` → `rounded-xs`, `rounded` → `rounded-sm`,
`outline-none` → `outline-hidden`, `ring` → `ring-3`, `bg-opacity-50` → `bg-black/50`, `flex-shrink-0` → `shrink-0`.
See the [Tailwind CSS upgrade guide](https://tailwindcss.com/docs/upgrade-guide) for the full list.

::: tip
Check the tool's changes on props and variables: it rewrites any string that looks like a class (for example a prop named
`shadow`).
:::

## What the theme keeps for you

`theme.css` restores the Tailwind v3 defaults the templates were designed with:

- the default palette (`gray`, `blue`, `red`…) keeps the Tailwind v3 hex values instead of the v4 OKLCH colors, for your
  own classes too,
- borders default to `gray-200` instead of `currentColor`,
- placeholders use `gray-400`,
- buttons get `cursor: pointer`.

Override the base rules in your own `@layer base`, or a color in your own `@theme` block (for example
`--color-red-600: oklch(57.7% 0.245 27.325);`), if you prefer the Tailwind v4 defaults.

## Visual differences to check

- Font size utilities (`text-base`, `text-sm`…) now set a unitless line height. With `text-base` on `body`, smaller texts
  such as badges no longer inherit a fixed `1.5rem` line height: add `line-height: 1.5rem` to `body` to keep the v3 rendering.
- `hover:` variants only apply on devices that support hover.
- `space-x-*` / `space-y-*` use a new selector (margin on all children but the last).
- Styles written outside a CSS layer now always win over Tailwind utilities. Put global resets in `@layer base`.
