import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";
import pluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginSimpleImportSort from "eslint-plugin-simple-import-sort";
import pluginTestingLibrary from "eslint-plugin-testing-library";
// import vitest from "eslint-plugin-vitest";
import pluginWorkspaces from "eslint-plugin-workspaces";

export default [
  {
    ignores: ["**/coverage", "**/dist/**", "**/build/**", "**/storybook-static", "**/*.ejs.js"]
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    },
    languageOptions: {
      ...pluginReact.configs.flat.recommended.languageOptions
      // globals: {
      //   ...globals.serviceworker,
      //   ...globals.browser
      // }
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/no-unescaped-entities": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "warn"
    }
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: "latest",
        sourceType: "module"
      }
      // globals: {
      //   ...globals.browser
      // }
    },
    plugins: {
      "@typescript-eslint": typescriptEslint
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error"
    }
  },
  pluginJsxA11y.flatConfigs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      "react-hooks": pluginReactHooks,
      "simple-import-sort": pluginSimpleImportSort,
      workspaces: pluginWorkspaces
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "workspaces/no-absolute-imports": "error",
      "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
      "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies
    }
  },
  // {
  //   files: ["**/*.spec.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
  //   plugins: {
  //     vitest
  //   },
  //   rules: {
  //     ...vitest.configs.recommended.rules
  //   }
  // },
  // {
  //   files: ["**/*.spec.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"], // or any other pattern
  //   plugins: {
  //     vitest
  //   },
  //   rules: {
  //     ...vitest.configs.recommended.rules, // you can also use vitest.configs.all.rules to enable all rules
  //     "vitest/consistent-test-it": [
  //       "error",
  //       { fn: "it", withinDescribe: "it" }
  //     ],
  //     "vitest/no-alias-methods": "error"
  //   }
  // },
  {
    files: ["**/*.spec.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    plugins: {
      "testing-library": pluginTestingLibrary
    },
    rules: {
      "testing-library/await-async-events": ["error", { eventModule: "userEvent" }],
      "testing-library/await-async-queries": "error",
      "testing-library/await-async-utils": "error",
      "testing-library/no-await-sync-events": ["error", { eventModules: ["fire-event"] }],
      "testing-library/no-await-sync-queries": "error",
      "testing-library/no-container": "error",
      "testing-library/no-debugging-utils": "warn",
      "testing-library/no-dom-import": ["error", "react"],
      "testing-library/no-global-regexp-flag-in-query": "error",
      "testing-library/no-manual-cleanup": "error",
      "testing-library/no-node-access": "warn",
      "testing-library/no-promise-in-fire-event": "error",
      "testing-library/no-render-in-lifecycle": "error",
      "testing-library/no-unnecessary-act": "error",
      "testing-library/no-wait-for-multiple-assertions": "error",
      "testing-library/no-wait-for-side-effects": "error",
      "testing-library/no-wait-for-snapshot": "error",
      "testing-library/prefer-find-by": "error",
      "testing-library/prefer-presence-queries": "error",
      "testing-library/prefer-query-by-disappearance": "error",
      "testing-library/prefer-screen-queries": "error",
      "testing-library/render-result-naming-convention": "error"
    }
  },
  pluginPrettierRecommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    rules: {
      curly: ["error", "all"]
    }
  }
];
