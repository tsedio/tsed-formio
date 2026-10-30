---
layout: home

hero:
  name: "Ts.ED Formio"
  text: "React components and a Tailwind theme for Form.io"
  tagline: Render, build and manage Form.io forms and submissions in your React back office.
  image:
    src: https://tsed.dev/tsed-og.png
    alt: Ts.ED
  actions:
    - theme: brand
      text: Getting started
      link: /getting-started
    - theme: alt
      text: Components
      link: /components/form
    - theme: alt
      text: Open Storybook
      link: /storybook/
      target: _self

features:
  - title: Form & Form Builder
    details: Render a form from its JSON definition or a Form.io URL, and embed the Form.io builder in your app.
    link: /components/form
  - title: Tailwind theme
    details: "@tsed/tailwind-formio provides a Formio.js template based on TailwindCSS v3, with dark mode support."
    link: /guide/tailwind-theme
  - title: Back office building blocks
    details: Tables for forms, submissions and actions, form access, settings, exports and a complete FormViews component.
    link: /components/form-views
  - title: Tree-shakable & typed
    details: ESM-only atomic imports, TypeScript types and a registry to replace any internal component.
    link: /guide/optimize-your-bundle-size
---
