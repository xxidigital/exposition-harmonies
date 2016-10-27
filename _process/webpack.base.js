'use strict'
const path = require('path')
const webpack = require('webpack')
const config = require('./config')

const postcss = [
  require("cssnano")({
    browsers: ['last 2 versions', 'ie > 10']
  }),
  require("css-mqpacker")(),
]

let webpack_base = {
  entry: config.entry,
  output: {
    path: config.assets_path,
    filename: '[name].js',
    publicPath: config.assets_url
  },
  resolve: {
    extensions: ['', '.js', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../_sources/scripts/'),
      //vendors: path.join(__dirname, '../vendors/'),
    },
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: [/node_modules/, /libs/]
      },
      {
        test: /\.scss$/,
        vue: 'scss',
        loaders: ['css', 'postcss', 'sass']
      },
      {
        test: /\.(png|jpe?g|gif|svg|wav)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10,
          name: '[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.css$/,
        vue:'css',
        loaders: ['css', 'postcss']
      },
      {
        test: /\.(woff|ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'base64-font'
      }
    ]
  },
  babel: {
    babelrc: false,
    presets: [
      'es2015',
      'stage-2'
    ],
    plugins: ["transform-runtime"]
  },
  postcss,
  plugins: [],
  devServer: {
    headers: { "Access-Control-Allow-Origin": "*" }
  }
}

if (config.html) {
  const HtmlWebpackPlugin = require('html-webpack-plugin')
  webpack_base.plugins.push(
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    })
  )
}
module.exports = webpack_base
