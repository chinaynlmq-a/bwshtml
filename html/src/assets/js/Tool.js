import http from '@/assets/js/gethttp';
(function(win,http){
  class T{
    constructor(){
    }
    get(){
    }
    post(config){
      return http(config)
    }
  }
  win.Tool= new T();
})(window,http)
