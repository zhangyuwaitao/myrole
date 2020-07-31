//index为store的汇总组件
import userStore from './UserStore';

let user=new userStore();//实例化对象,因为在UserStore中创建的是一个类

export default {
    user,//===user:user
}