// 合并插件
const {merge} = require('webpack-merge');
const path =require('path');
const baseconfig = require('./webpack.base.config');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const publicPath = '/';
let resolve = function (dir) {
  // __dirname 当前文件绝对地址
  return path.join(__dirname, '..', dir);
};
let plugins=[];
plugins.push(
      new CleanWebpackPlugin()
  );
let devConfig={
  output:{
    filename: 'static/js/[name].[chunkhash:4].js',
    chunkFilename: 'static/lib/[name].[chunkhash:4].js',
    path:resolve('/dist/'),
    publicPath
  },
  plugins:plugins
};
module.exports = merge(baseconfig, devConfig);