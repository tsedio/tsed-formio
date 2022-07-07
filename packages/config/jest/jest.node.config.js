/** @type {import("ts-jest/dist/types").InitialOptionsTsJest} */

module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts", "!src/mocks/**", "!src/__mock__/**"],
  coveragePathIgnorePatterns: [],
  testEnvironment: "node",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest", require("./swc.node.json")]
    // "^.+\\.(t|j)sx?$": ["ts-jest"]
  },
  transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$", "^.+\\.module\\.(css|sass|scss)$"],
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {},
  moduleFileExtensions: [
    // Place tsx and ts to beginning as suggestion from Jest team
    // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
    "tsx",
    "ts",
    "js",
    "json",
    "jsx",
    "node"
  ],
  watchPlugins: ["jest-watch-typeahead/filename", "jest-watch-typeahead/testname"]
};
