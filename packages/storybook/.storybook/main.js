import svgr from 'vite-plugin-svgr'
import {mergeConfig} from 'vite'
import remarkGfm from 'remark-gfm'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  staticDirs: ['../../tailwind/build'],
  stories: [
    '../stories/Getting-started.mdx',
    '../stories/**/*.mdx',
    '../../{tailwind-formio,react-formio}/src/**/*.mdx',
    '../../{tailwind-formio,react-formio}/src/**/*.stories.@(js|jsx|ts|tsx)',
    '../../{tailwind-formio,react-formio}/src/**/*.story.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    {name: '@storybook/addon-essentials', options: {docs: false}},
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm]
          }
        }
      }
    },
    '@storybook/addon-interactions'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal (config) {
    // return the customized config
    return mergeConfig(config, {
      // customize the Vite config here
      base: './',
      define: {
        'process.env.NODE_ENV': `'${process.env.NODE_ENV}'`
      },
      plugins: [svgr()]
    })
  }
}
export default config
