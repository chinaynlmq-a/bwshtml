const merge = require('webpack-merge');
const baseconfig = require('./base.config');
let devConfig ={
  publicPath:'/',
  devServer:{
    proxy:{
    '/api':{
      target:'http://127.0.0.1:8000'
    }
   }
  }
}
module.exports = merge(baseconfig,devConfig)