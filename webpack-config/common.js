const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: ['es2015']
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: 'img/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            query: {
              name: 'font/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // new CopyWebpackPlugin([
    //   {
    //     from: path.resolve(__dirname, '../public'),
    //     to: path.resolve(__dirname, '../dist')
    //   }
    // ], {
    //   copyUnmodified: true
    // }),
    new ManifestPlugin(),
    // TODO: https://github.com/gajus/write-file-webpack-plugin
  ]
};