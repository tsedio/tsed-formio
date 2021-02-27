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
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return ensureReact(configure(webpackConfig, { env, paths }));
    },
  },
};
