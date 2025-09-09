import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    projects: [
      'packages/react-formio/vitest.config.{mts,ts}',
      'packages/react-formio-stores/vitest.config.{mts,ts}',
      'packages/redux-utils/vitest.config.{mts,ts}',
    ]
  }
})
