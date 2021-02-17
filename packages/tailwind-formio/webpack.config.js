const path = require('path');

module.exports = {
  entry: path.join(path.resolve(__dirname, 'lib'), 'index.js'),
  output: {
    library: 'tailwind',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    filename: 'tailwind.js',
  },
  mode: 'production',
  performance: { hints: false },
};