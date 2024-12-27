import { defineConfig } from "vitest/config";

export const presets = defineConfig({
  resolve: {
    // alias
  },
  test: {
    globals: true,
    environment: "happy-dom",
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
