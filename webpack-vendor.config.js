const path = require('path');
const webpack = require('webpack');

const isProduction = process.env.NODE_ENV === 'production';
console.log(`Production vendor build: ${isProduction}`);

module.exports = {
  mode: isProduction ? 'production' : 'development',
  entry: {
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'react-router-redux',
      'redux',
      'redux-thunk',
    ],
  },
  output: {
    path: path.resolve('./assets'),
    filename: '[name].js',
    library: '[name]_[hash]',
    libraryTarget: 'var',
  },
  optimization: {
    minimize: isProduction,
  },
  devtool: 'source-map',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.DllPlugin({
      path: './manifest.json',
      name: '[name]_[hash]',
      context: __dirname,
    }),
  ],
};
