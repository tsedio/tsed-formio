# Ts.ED Formio documentation

The website is made of two parts, deployed together on GitHub Pages by `.github/workflows/website.yml`:

| Path          | Source                                     | Build                  |
| ------------- | ------------------------------------------ | ---------------------- |
| `/`           | VitePress, this `docs/` folder             | `yarn docs:build`      |
| `/storybook/` | Storybook, `stories/` + `packages/**/*.stories.tsx` | `yarn storybook:build` |

`docs/` is a standalone Yarn project (own `yarn.lock`), like the Ts.ED main documentation.

## Commands (from the repository root)

```sh
yarn docs:install        # install VitePress dependencies
yarn docs:dev            # VitePress dev server
yarn website:build       # build Storybook + VitePress, check links, assemble into ./website
npx serve website        # preview the assembled site
```

During `yarn docs:dev`, the `/storybook/` links point to the docs dev server. Run Storybook (`yarn storybook:start`)
and point the links to it:

```sh
STORYBOOK_URL=http://localhost:6006/ yarn docs:dev
```

## Linking to Storybook

- Markdown link: `[Form](storybook:/docs/organisms-form-form--docs)`, `[Story](storybook:organisms-form-form--basic-usage-with-form)` or `[Storybook](storybook:)`.
- Component link: `<StorybookLink to="organisms-form-form--docs">Form</StorybookLink>`.
- Live example (iframe): `<StoryEmbed id="organisms-form-form--basic-usage-with-form" height="500px" />`.

Story ids come from Storybook (`storybook-static/index.json`). `yarn docs:check-links` fails when a docs page
references an unknown id.
