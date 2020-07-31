import React, {Component} from 'react'
import {Route} from "react-router-dom";
import {inject,observer} from "mobx-react";
import loadable from '@loadable/component';
@inject('user')
@observer
class PrivateRouter extends Component {
    constructor() {
        super();
        this.state={
            routerList:[],
        }
    }
    bindRouter(routerList){
        let myRouterList= routerList.map(item=>{
            if (item.menuChilds===0){//没有子菜单
                return <Route path={item.menuUrl} key={item.menuId} component={loadable(()=>import(`./${item.componentPath}`))}></Route>
            }else{//有子菜单
                return <Route key={item.menuId} path={item.menuUrl} render={()=>{
                    let ComponentName=loadable(()=>import(`./${item.componentPath}`))
                    return <ComponentName {...this.props}>
                        {this.bindRouter(item.menuChilds)}
                    </ComponentName>
                }
                }></Route>
            }
        });
        return myRouterList;
    }
    UNSAFE_componentWillMount() {
        // 获取数据,调用bindRouter函数
        let routerList=this.bindRouter(this.props.user.user.menuInfo);
        //更新数据,重新渲染页面
        this.setState({
            routerList:routerList
        })
    }
    render() {
        return (
            <div>
                {this.state.routerList}
            </div>
        )
    }
}

export default PrivateRouter