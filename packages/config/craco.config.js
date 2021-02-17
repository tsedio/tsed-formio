const { ESLINT_MODES } = require('@craco/craco')
const {configure, ensureReact} = require('@tsed/yarn-workspaces')

module.exports = {
  style: {
    postcss: {
      plugins: require('./postcss.config').plugins
    }
  },
  eslint: {
    mode: ESLINT_MODES
  },
  jest: {
    configure: {
      globals: {
        'CONFIG': true
      },
      setupFiles: [
        // 'react-app-polyfill/jsdom',
        require.resolve('./jest/setupTests.js')
      ]
    }
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      return ensureReact(configure(webpackConfig, { env, paths }))
    }
  }
}