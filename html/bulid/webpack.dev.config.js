// 合并插件
const merge = require('webpack-merge');
let devConfig={};
module.exports = merge(baseconfig, devConfig);