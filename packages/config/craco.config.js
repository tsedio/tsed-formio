// eslint-disable-next-line @typescript-eslint/no-var-requires
const { ESLINT_MODES } = require("@craco/craco");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { configure, ensureReact } = require("@tsed/yarn-workspaces");

module.exports = {
  style: {
    postcss: {
      plugins: require("./postcss.config").plugins,
    },
  },
  eslint: {
    mode: ESLINT_MODES,
  },
  jest: {
    configure: {
      rootDir: "./",
      globals: {
        CONFIG: true,
      },
      setupFiles: [
        // 'react-app-polyfill/jsdom',
        require.resolve("./jest/setupTests.js"),
      ],
      collectCoverageFrom: [
        "**/*.{js,jsx,ts,tsx}",
        "!**/*.stories.{js,jsx,ts,tsx}",
        "!**/node_modules/**",
        "!**/vendor/**",
      ],
      coverageThreshold: {
        global: {
          branches: 35.73,
          functions: 51.76,
          lines: 50.49,
          statements: 50.91,
        },
      },
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return ensureReact(configure(webpackConfig, { env, paths }));
    },
  },
};
