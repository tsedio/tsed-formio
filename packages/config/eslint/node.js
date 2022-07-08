module.exports = {
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended", "plugin:prettier/recommended"],
  plugins: ["workspaces", "simple-import-sort"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  env: {
    node: true,
    es6: true
  },
  rules: {
    "@typescript-eslint/ban-ts-comment": 0,
    "@typescript-eslint/camelcase": 0,
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-non-null-assertion": 0,
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "workspaces/no-absolute-imports": "error"
  },
  overrides: [
    {
      files: ["**/*.spec.ts", "**/test/**", "**/__mock__/**"],
      rules: {
        "workspaces/no-absolute-imports": 0
      }
    },
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": 0
      }
    }
  ]
};
