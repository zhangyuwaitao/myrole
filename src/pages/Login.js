import React, {Component} from 'react'
import '../assets/css/Login.css'
//引入antd框架需要组件
import { Layout } from 'antd';
//引入antd表单需要组件
import { Form, Input, Button, Checkbox } from 'antd';//antd组件
//引入mobx组件
import {inject,observer} from "mobx-react";
const { Header, Footer, Content } = Layout;//antd框架
@inject('user')
@observer
class Login extends Component {
    onFinish = values => {
        console.log('Success:', values);
        this.props.user.login()
            .then(data=>{
                console.log(data);
                this.props.history.push('/index')
            })
            .catch(err=>{
                console.log(err)
            })
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };
    render() {
        const layout = {
            // layout:{offset:4,span:16},
            labelCol: { offset:3,span: 6 },
            wrapperCol: { span: 8 },
        };
        const tailLayout = {
            wrapperCol: { offset: 4, span: 16 },
        };
            return (
                <div>
                    <Layout>
                        <Header id={'header'}>班级管理系统</Header>
                        <Content id='content'>
                            {/*登录*/}
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{remember: true}}
                                onFinish={this.onFinish}
                                onFinishFailed={this.onFinishFailed}
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{required: true, message: '请输入用户名!'}]}
                                >
                                    <Input/>
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{required: true, message: '请输入密码!'}]}
                                >
                                    <Input.Password/>
                                </Form.Item>

                                <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                                    </Button>
                                </Form.Item>
                            </Form>
                        </Content>
                        <Footer id={'footer'}>Design By Zot</Footer>
                    </Layout>
                </div>
            )
        }

}
export default Login