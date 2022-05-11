const { ESLINT_MODES } = require("@craco/craco");
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
  babel: {
    plugins: [
      process.env.NODE_ENV === "test" &&
        require.resolve("babel-plugin-require-context-hook")
    ].filter(Boolean),
    presets: [
      ["@babel/preset-react", { runtime: "automatic" }],
      "@babel/preset-typescript"
    ]
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
      reporters: ["default", "jest-junit"]
    }
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig = configure(webpackConfig, { env, paths });
      return ensure ? ensureReact(webpackConfig) : webpackConfig;
    }
  }
});
