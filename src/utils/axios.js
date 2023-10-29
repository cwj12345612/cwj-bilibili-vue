import axios from "axios";
//请求前设置响应头
axios.interceptors.request.use(
    config=>{
        //设置token
        if(sessionStorage.getItem('Authorization')){
            config.headers.Authorization=sessionStorage.getItem('Authorization')
        }else if(localStorage.getItem('Authorization')){
            config.headers.Authorization=localStorage.getItem('Authorization')
        }
    //    console.log(new Date().getTime());
    /**
     * get请求加上时间戳 防止缓存
     */
      if(config.method=='get'){
        // console.log("时间")
        config.params={
            _t:new Date().getTime(),
            ...config.params
        }
      }
        return config
    }
)
export default axios;