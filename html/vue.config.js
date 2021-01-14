let runConfig = process.env.VUE_APP_ENV;
if(!runConfig){
  runConfig='production'
}
let envConfig = require(`./build/${runConfig}.config.js`);
module.exports=envConfig;



