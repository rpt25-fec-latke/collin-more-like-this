const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './client/dist',
    open: true,
    proxy: {
      '/': 'http://localhost:3002',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          { loader: 'css-loader', options: { sourceMap: true } },
          { loader: 'postcss-loader', options: { sourceMap: true } },
        ],
      },
    ],
  },
});
