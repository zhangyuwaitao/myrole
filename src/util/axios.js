//创建axios配置
import Axios from "axios";
import {config} from "dotenv";

//配置axios默认请求路径
Axios.defaults.baseURL='http://localhost:8888';
console.log(config);
//=====Axios请求拦截=====
Axios.interceptors.request.use(
    config=>{//配置
        //把token添加到header中
        return config;
    },
    error => {//错误信息返回
        return Promise.reject(error)
    }
);
//=====Axios响应拦截=====
Axios.interceptors.response.use((config)=>{
//将返回的token值储存
        return config;
    }
);
export default Axios