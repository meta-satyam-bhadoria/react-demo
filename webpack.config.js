const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.PORT || 3000;
const ASSET_PATH = process.env.ASSET_PATH || '/';

module.exports = {
  mode: 'development',
  entry: {
    "app": './src/index.js',
    "script": './src/scripts/play.js'
  },
  output: {
    publicPath: ASSET_PATH,
    filename: '[name].min.js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.sass$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            { loader: 'css-loader'},
            {
              loader:  'sass-loader'
            }
          ]
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    new ExtractTextPlugin({
      filename: '[name].min.css'
    })
  ],
  devServer: {
    host: '172.16.50.101',
    port: port,
    historyApiFallback: true,
    open: true
  }
};
