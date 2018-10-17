const webpack = require('webpack');
const config = require('./webpack.config');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = Object.assign({}, config, {
  mode: 'production',
  entry: {
    app: ['./src/app'],
  },
  optimization: {
    minimize: true,
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: 'assets',
        from: '**/*',
      },
    ]),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./manifest.json'),
      sourceType: 'var',
    }),
  ],
});
