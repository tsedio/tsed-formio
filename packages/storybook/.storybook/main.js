const {dirname, join} = require('path')

const rootDir = join(__dirname, '..', 'src')
const formioDir = dirname(require.resolve('@tsed/react-formio'))
const formioContainerDir = dirname(require.resolve('@tsed/react-formio-container'))
const tailwindDir = dirname(require.resolve('@tsed/tailwind-formio'))

const scanDirs = (dir) => [
  join(dir, '**/*.stories.mdx'),
  join(dir, '**/*.story.mdx'),
  join(dir, '**/*.story.@(js|jsx|ts|tsx)'),
  join(dir, '**/*.stories.@(js|jsx|ts|tsx)')
]

module.exports = {
  staticDirs: ['../../tailwind/build'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    //'@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1
        },
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss')
        }
      }
    }
  ],
  stories: [
    join(rootDir, '**/*.stories.mdx'),
    join(rootDir, '**/*.stories.@(js|jsx|ts|tsx)'),
    ...scanDirs(join(formioDir, '..', 'src', 'components')),
    ...scanDirs(join(formioContainerDir, '..', 'src')),
    ...scanDirs(join(tailwindDir, '..', 'src', 'templates'))
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true)
    }
  },
  webpackFinal: (config) => {
    const rules = config.module.rules

    rules.forEach((rule) => {
      if (rule.test?.test('.js')) {
        rule.use[0].loader = require.resolve('babel-loader')
      }
    })

    return config
  }
}
