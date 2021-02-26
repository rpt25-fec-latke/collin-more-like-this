const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(
        __dirname,
        'client',
        'public',
        'index.html',
      ),
      title: 'Steam',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'moreLikeBundle.js',
    path: path.resolve(__dirname, 'client', 'dist'),
  },
};
