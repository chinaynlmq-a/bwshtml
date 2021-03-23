// 合并插件
const {merge} = require('webpack-merge');
const baseconfig = require('./webpack.base.config');
const webpack = require('webpack');
const publicPath = '/';

let plugins = [];// 插件入口
plugins.push(
  new webpack.HotModuleReplacementPlugin()
);
let devConfig={
  output:{
    filename: 'static/js/[name].[contenthash].js',
    chunkFilename: 'static/lib/[name].[contenthash].js',
    path:publicPath,
    publicPath
  },
  devtool: 'source-map',
  devServer:{
    publicPath: `/${publicPath}/`,
    compress: true,
    port:1445,
    hot: true
  },
  plugins: plugins
};
module.exports = merge(baseconfig, devConfig);