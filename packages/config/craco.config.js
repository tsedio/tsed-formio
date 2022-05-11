// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ESLINT_MODES } = require("@craco/craco");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { configure, ensureReact } = require("@tsed/yarn-workspaces");

module.exports = (name, config = {}, ensure = true) => ({
  style: {
    postcss: {
      plugins: require("./postcss.config").plugins
    }
  },
  eslint: {
    mode: ESLINT_MODES
  },
  jest: {
    configure: {
      ...(config.jest || {}),
      rootDir: "./",
      globals: {
        CONFIG: true
      },
      resetMocks: false,
      setupFilesAfterEnv: [require.resolve("./jest/setupTests.js")],
      // Indicates whether the coverage information should be collected while executing the test
      collectCoverage: true,

      // An array of glob patterns indicating a set of files for which coverage information should be collected
      collectCoverageFrom: ["<rootDir>/src/**"],

      // The directory where Jest should output its coverage files
      coverageDirectory: "coverage",

      // An array of regexp pattern strings used to skip coverage collection
      coveragePathIgnorePatterns: [
        "index.ts",
        "/node_modules/",
        "__mock__",
        ".stories.tsx",
        "src/config",
        "src/bin",
        "fixture.ts",
        "/interfaces",
        "__fixtures__"
      ]
    }
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig = configure(webpackConfig, { env, paths });
      return ensure ? ensureReact(webpackConfig) : webpackConfig;
    }
  }
});
