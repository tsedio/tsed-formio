import { join } from "node:path";

import { defineConfig } from "vitest/config";

export const presets = defineConfig({
  resolve: {
    conditions: ["tsed-source"]
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: join(import.meta.dirname, "../setup/setup.ts"),
    coverage: {
      enabled: true,
      reporter: ["text", "json", "html"],
      include: ["src/**/*.{tsx,ts}"],
      exclude: [
        "**/node_modules/**",
        "**/@tsed/**",
        "**/exports.ts",
        "**/interfaces/**",
        "**/*fixtures.ts",
        "**/fixtures/**",
        "**/__fixtures__/**",
        "**/*.spec.{ts,tsx}",
        "**/*.stories.{ts,tsx}",
        "**/*.d.ts",
        "**/__mocks__/**",
        "**/__mock__/**",
        "**/tests/**",
        "**/index.ts"
      ]
    }
  },
  plugins: []
});
