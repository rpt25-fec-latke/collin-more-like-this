const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const S3Plugin = require('webpack-s3-plugin');
require('dotenv').config();
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
    new S3Plugin({
      s3Options: {
        exclude: /.*\.(html|txt)/,
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        region: 'us-east-2',
      },
      s3UploadOptions: {
        Bucket: 'steam-bundles',
      },
    }),
  ],
});
