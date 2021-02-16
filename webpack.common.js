const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.jsx',
  devServer: {
    contentBase: './dist',
    open: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Development',
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  }
};