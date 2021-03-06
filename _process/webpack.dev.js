'use strict'
const path = require('path')
const webpack = require('webpack')
const webpack_base = require('./webpack.base')
const CopyPlugin = require('copy-webpack-plugin')
const AssetsPlugin = require('assets-webpack-plugin')
const config = require('./config')

webpack_base.devtool = 'inline-source-map'
webpack_base.output.publicPath = config.local + ':' + config.port + config.assets_url
webpack_base.output.path = '/tmp/'
for (var name in webpack_base.entry) {
  webpack_base.entry[name] = [path.resolve(__dirname, './server-client'), ...webpack_base.entry[name]]
}
webpack_base.plugins.push(
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('development')
  }),
  new webpack.SourceMapDevToolPlugin(),
  new CopyPlugin( [
    {from: config.sources_path + 'graphics/', to: 'graphics/'},
  ]),
  new AssetsPlugin({filename: config.data_path + 'process.json'}),
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
)

webpack_base.module.loaders.forEach(function (loader) {
  if (loader.loaders && loader.loaders.includes('css')) {
    loader.loaders = ['style', ...loader.loaders]
  }
})

module.exports = webpack_base
