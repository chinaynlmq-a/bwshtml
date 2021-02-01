import axios from 'axios';
import qs from 'qs';

class GetHttp{
  constructor(config,resolve){
    // this.config = config;
    this.ajax(config,resolve)
  }

  ajax(config,resolve){
    // console.log(config);
    // 约定一些预处理参数配置
    const defualtConfig={
      // 异常错误的回调方法
      fnErr:()=>{
        console.log(`网络异常`);
      },
      sendDataType: 'formData', // 发送数据类型，此类型将会被序列化成formData
      // 自定义参数，成功回调函数
      // fnSuc: () => false,
      // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
      responseType: 'json', // 默认的
    };
    
    const setting={...defualtConfig,...config};
    this.config = setting;
    if (typeof setting.data === 'object' && setting.sendDataType === 'formData') {
      setting.data = qs.stringify(setting.data);
    }
    // console.log(setting.data);
    // 实例化请求对象
    const axiosInstance = axios.create();
    // 拦截器
    // 添加请求拦截器
    axiosInstance.interceptors.request.use(config => {
      // 在发送请求之前做些什么
      // 可以做些什么呢？比如进度条，loading的展示
      console.log('准备发送！')
      return config;
    },(error) => {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    axiosInstance.interceptors.response.use((response) => {
      // closeLoading(tempVue);
      // 关闭进度条，loading等。。
      console.log('数据依据返回可以提前做一些事情')
      return response;
    }, (error) => {
      // closeLoading(tempVue);
      return Promise.reject(error);
    });

    axiosInstance(setting)
      .then((response) => {
        console.log('请求成功')
       // console.log(response);
       // resolve(response);
       this.responseDataSucess(response,resolve)
      })
      .catch((error) => {
        // 响应错误
        if (error.response) {
          // 网络层面接口异常
          this.config.fnErr(error);
          // console.log(error.response);
          // 请求错误
        } else if (error.request) {
          console.error(error.request);
          // 其他错误
        }else {
          // then方法里面捕获的异常
          console.error(error);
        }
      });
  }

  responseDataSucess(response,resolve){
    if(response && (response.status === 200 || response.status === 304 || response.status === 400 || response.status === 0)){
      // 正常的响应
      resolve(response.data)
    }else{
      // 没有响应
      console.log(response.statusText);
    }
  }
}

export default function(config){
  return new Promise(resolve=>{
    new GetHttp(config,resolve)
  }) 
  
}