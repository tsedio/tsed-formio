module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-url': {},
    '@tailwindcss/nesting': {},
    tailwindcss: {
      config: require('@tsed/tailwind')
    },
    autoprefixer: {}
  }
}
