'use strict'
const path = require('path')
const webpack = require('webpack')
const config = require('./config')

const postcss = [
  require("postcss-import")(),
  require("postcss-url")(),
  require("postcss-cssnext")({
    browsers: ['last 2 versions', 'ie > 10']
  }),
  require("cssnano")({
    autoprefixer: false
  }),
  require("css-mqpacker")(),
  // require("postcss-browser-reporter")(),
  // require("postcss-reporter")(),
]

let webpack_base = {
  //devtool: 'inline-source-map',
  entry: config.entry,
  output: {
    path: config.assets_path,
    filename: '[name].js',
    publicPath: config.assets_url
  },
  resolve: {
    extensions: ['', '.js', '.css', '.json'],
    alias: {
      root: path.join(__dirname, '../_static/scripts/'),
      vendors: path.join(__dirname, '../vendors/'),
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
        test: /\.css$/,
        loaders: ['css', 'postcss']
      }, {
        test: /\.(png|jpe?g|gif|svg|woff2?|eot|ttf|otf|wav)(\?.*)?$/,
        loader: 'url',
        query: {
          limit: 10,
          name: '[name].[hash:7].[ext]'
          //name: '[name].[ext]'
        }
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
  vue: {
    loaders: {},
    postcss
  },
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
