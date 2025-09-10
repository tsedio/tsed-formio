import {defineConfig} from "vitest/config";
import react from '@vitejs/plugin-react';
import path from 'path';
import {fileURLToPath} from 'node:url';
import {storybookTest} from '@storybook/addon-vitest/vitest-plugin';

const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
  plugins: [
    react()
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      all: true,
      include: ['packages/**/*.{tsx,ts}'],
      exclude: [
        "**/integration/**",
        '**/packages/**/node_modules/**',
        '**/packages/**/dist/**',
        '**/packages/**/lib/atoms/icons/**',
        '**/*.spec.{ts,tsx}',
        '**/*.stories.{ts,tsx}',
        '**/*.d.ts',
        '**/*.interface.ts',
        "**/interfaces/**",
        "tailwind.config.ts",
        '**/__mocks__/**',
        '**/__fixtures__/**',
        '**/tests/**',
        '**/index.ts',
      ],
      thresholds: {}
    },
    projects: [
      'packages/react-formio/vitest.config.{mts,ts}',
      'packages/react-formio-stores/vitest.config.{mts,ts}',
      'packages/redux-utils/vitest.config.{mts,ts}',
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.ts']
        },
      }
    ]
  }
})
