let path = require('path');
let resolve = function (dir) {
  return path.join(__dirname, '..', dir);
};
module.exports = {
  configureWebpack:{
    // 配置别名
    resolve:{
      alias: {
        '@': resolve('src'),
      }
    }
  },
  css:{
    loaderOptions:{
      less:{
        additionalData: `@import "~@/assets/css/comm.less";`
      }
    }
  }
}