//引入mobx中需要用到的组件,observable用户观察组件或者数据,action用于更改状态
import {observable,action} from "mobx";
//引入配置好的axios发送请求获取数据存在状态中
import Axios from "../util/axios";
//引入配置好的接口文件
import Api from '../api/index';

//导出观察到的信息
export default class UserStore {
    //观察数据
    @observable user=[];//用户状态
    @observable isLogin=false;//登录状态
    @observable token='';

    //观察动作
    @action
    login=()=>{//如果有人登录,触发login方法,并将登录信息储存在被观察的状态中
       return  new Promise((resolve,reject)=>{
            Axios.post(Api.user.userLogin,{userName:'admin',userPwd:123})
                .then((res=>{
                    console.log(res);
                    if (res.data.returnCode===200){
                        this.user=res.data.data;//用户和用户菜单信息
                        this.token=res.data.token;
                        resolve('登录成功');
                    }else{
                        reject('登录失败')
                    }

                }))
       })
    }
}