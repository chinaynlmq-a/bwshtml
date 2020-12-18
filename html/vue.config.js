
// if(process.env.VUE_APP_ENV ==='dev'){
//   console.log(1);
//   let mymoduleExports= require('./build/dev.config.js');
// }else{
//   let mymoduleExports= require('./build/prd.config.js');
// }
// console.log(2)
// module.exports=mymoduleExports;
// console.log(process.env.VUE_APP_ENV)
let runConfig = process.env.VUE_APP_ENV;
if(!runConfig){
  runConfig='dev'
}
let envConfig = require(`./build/${runConfig}.config.js`);
module.exports=envConfig;



