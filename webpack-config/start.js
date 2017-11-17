const webpack = require('webpack');

module.exports = {
  watch: true,
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
  ],
  output: {
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 1 } },
          'postcss-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      debug: true
    }),
    //new webpack.HotModuleReplacementPlugin()
  ]
};