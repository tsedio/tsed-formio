module.exports = {
  'plugins': [
    require('tailwindcss')(require('@tsed/tailwind')),
    require('postcss-nested'),
    require('autoprefixer')
  ]
}