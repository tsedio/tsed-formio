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
      setupFilesAfterEnv: [require.resolve("./jest/setupTests.js")]
    }
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig = configure(webpackConfig, { env, paths });
      return ensure ? ensureReact(webpackConfig) : webpackConfig;
    }
  }
});
