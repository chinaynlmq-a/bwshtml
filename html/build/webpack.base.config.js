const fs = require('fs');
const glob = require('glob');
let path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {VueLoaderPlugin} = require('vue-loader');
let resolve = function (dir) {
  // __dirname 当前文件绝对地址
  return path.join(__dirname, '..', dir);
};

let baseconifg = ()=>{
  let srcPath = resolve('src');
  let htmlfiles = glob.sync('src/page/**/main.html');
  let entry = {};
  let plugins=[];
  htmlfiles.forEach(function(item,i){ 
    const chunkMatcher = item.match(/page\/(.+)\/main.html$/);
    const chunkName = chunkMatcher[1];
    const mainJSPath = `${srcPath}/page/${chunkName}/main.ts`;

    if (fs.existsSync(mainJSPath)) {
      // hasMainChunk = true;
      entry[chunkName] = './src/page/' + chunkName + '/main.ts';
    }
    const chunkConfigPath = `${srcPath}/page/${chunkName}/chunk-config.ts`;

    let excludeConfig = [];
    // 如果有exclude配置文件,去读取excludeChunk的配置
    if (fs.existsSync(chunkConfigPath)) {
      excludeConfig = require(chunkConfigPath).excludeChunks;
      console.log(excludeConfig);
    }
    
    plugins.push(
      new HtmlWebpackPlugin({
      filename:`${chunkName}.html`,
      template:item,
      // js 文件插入的位置
      inject: 'body',
      chunks:['vendor','vue-vendor','commons',chunkName],
      excludeChunks: excludeConfig,
      chunksSortMode:'manual',
      hash: false
    }),
    new MiniCssExtractPlugin());
    
  });
  plugins.push(
      // new CleanWebpackPlugin()
      new VueLoaderPlugin()
  )
  return [entry,plugins]
}

module.exports = {
  mode: process.env.ACCESS_ENV === 'dev' ? 'development' : 'production',
  entry:baseconifg()[0],
  plugins:baseconifg()[1],
  module:{
    rules:[
      {
        test: /\.vue$/,
        // loader: 'vue-loader',
        use: [{
          loader: 'vue-loader',
          options: {
            // js: 'happypack/loader?id=babel'
          }
        }]
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/i,
        loader: 'babel-loader'
      },
      // css
        {
          test: /\.css$/i,
          use:[{
            loader: MiniCssExtractPlugin.loader
          },
        //   {loader:'vue-style-loader'
        //  },
         {
            loader: 'css-loader'
          },],
        },
        // 图片
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10240, // 图片文件大小小于limit值;转换成base64
              name: 'static/images/[name].[hash:4].[ext]'
            }
          }
        ]

      },
      {
        test: /\.ts$/,
        use: [
            {
              loader: 'ts-loader',
              options: {
                  appendTsSuffixTo: [/\.vue$/],
                }
            }
            ]
       },
       // less
       {
        test: /\.less$/i,
        use:[
          {loader: MiniCssExtractPlugin.loader,},
          {
            loader: "css-loader",
          },
           {
            loader: 'less-loader',
          },
          {
            loader:'sass-resources-loader',
            options: {
              resources: [resolve('src/assets/css/common.less')]
        }
        }
        ,]
      },
    ],
  },
  optimization:{
    splitChunks:{
      //有效值为 all，async 和 initial
      // chunks:'all',
      minSize: 0,
      cacheGroups: {
        vue:{
          name:'vue-vendor',
          chunks:'initial',
          priority:3, // 优先级别
          test: /([\/]node_modules[\/]vue)/
          //enforce: true // 如果cacheGroup中没有设置minSize，则据此判断是否使用上层的
        },
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority:2,
          test: /[\\/]node_modules[\\/]/,
 	         //enforce: true 
        },
        commons:{
          name:'commons',
          chunks:'initial',
          minChunks:2,
          priority:1,
        }
      }
    }
  },
  resolve: {
    extensions: ['.vue', '.js', '.css', '.json','.ts'],
    alias: {
      '@': resolve('src')
    }
  }
}