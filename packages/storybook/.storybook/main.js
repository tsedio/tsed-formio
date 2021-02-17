const { dirname, join } = require('path')
const { plugins } = require('@tsed/config/postcss.config')

const rootDir = join(__dirname, '..', 'src')
const formioDir = dirname(require.resolve('@tsed/react-formio'))
const tailwindDir = dirname(require.resolve('@tsed/tailwind-formio'))

const scanDirs = (dir) => [
  join(dir, '**/*.stories.mdx'),
  join(dir, '**/*.story.mdx'),
  join(dir, '**/*.story.@(js|jsx|ts|tsx)'),
  join(dir, '**/*.stories.@(js|jsx|ts|tsx)')
]

module.exports = {
  stories: [
    join(rootDir, '**/*.stories.mdx'),
    join(rootDir, '**/*.stories.@(js|jsx|ts|tsx)'),
    ...scanDirs(join(formioDir, '..', 'src', 'components')),
    ...scanDirs(join(tailwindDir, '..', 'src', 'templates'))
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
  ],
  webpackFinal: (config) => {
    const rules = config.module.rules

    // const svgLoaderRule = rules.find((rule) => rule.test.test(".svg"));
    // svgLoaderRule.exclude = pathToInlineSvg;
    //
    rules.forEach((rule) => {
      if (rule.test.test('.css')) {
        rule.use[2] = {
          loader: require.resolve('postcss-loader'),
          options: {
            ident: 'postcss',
            plugins,
            sourceMap: true
          }
        }
      }

      if (rule.test.test('.js')) {
        rule.use[0].loader = require.resolve('babel-loader')
      }
    })

    // rules.unshift({
    //   test: /\.svg$/,
    //   exclude: [`${pathToFonts}/**`],
    //   use: [require.resolve("@svgr/webpack"), require.resolve("url-loader")]
    // });

    return config
  }
}
 console.log(module.exports)
