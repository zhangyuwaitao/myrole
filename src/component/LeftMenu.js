import React, {Component} from 'react'
import {Menu} from "antd";
import {UserOutlined,  NotificationOutlined} from '@ant-design/icons';
import {inject, observer} from "mobx-react";
import {Link} from "react-router-dom";

const {SubMenu} = Menu;

@inject('user')
@observer
class LeftMenu extends Component {
    //将状态管理器中的数据存入组件数据(库)
    constructor() {
        super();
        this.state = {
            leftMenu: [],

        }
    }

    //获取数据,动态生成
    bindMenu(menulist) {
        console.log(menulist);
        let MenuList = menulist.map((item) => {
            if (item.menuChilds.length === 0) {
                return <Menu.Item key={item.menuId} icon={<NotificationOutlined/>}>
                    <Link to={item.menuUrl}>
                        {item.menuName}
                    </Link>
                </Menu.Item>
            }else{
                return <SubMenu key={item.menuId} icon={<UserOutlined/>} title={item.menuName}>
                     {/*使用递归循环*/}
                    {this.bindMenu(item.menuChilds)}
                </SubMenu>
            }
        });
        return MenuList;
    }

    UNSAFE_componentWillMount() {
        // console.log(this.props.user.user.menuInfo);
        let menulist=this.bindMenu(this.props.user.user.menuInfo);
        this.setState({
            leftMenu:menulist
        })
    }

    render() {
        return (
            <div>
                <Menu
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    style={{height: '100%', borderRight: 0}}
                >
                    {this.state.leftMenu}
                </Menu>
            </div>
        )
    }
}

export default LeftMenu