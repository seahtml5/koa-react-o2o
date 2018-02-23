import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import './style'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Admin extends Component {
    constructor(){
        super()
    }
    // 路由跳转
    goRouter(path){
        hashHistory.push(path)
    }


    clickHandler(e){
        if(e.key){
            this.goRouter(e.key)
        }
    }
    render() {
        return (
            <div className='admin'>
                <Header className='head'>
                    <p className="title">O2O平台</p>
                    <div className="user-wrapper">
                        <span className="name">超级管理员</span>
                        <span>admin</span>
                    </div>
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: '#f0f0f0' }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0, fontSize: '14px', background: '#eee' }}
                            onClick={(e)=>{this.clickHandler(e)}}
                        >
                            <SubMenu key="sub1" title={<span><Icon type="appstore-o" />分类管理</span>}>
                                <Menu.Item key="admin/category">生活服务类</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="global" />城市管理</span>}>
                                <Menu.Item key="admin/city">城市列表</Menu.Item>
                                <Menu.Item key="6">option6</Menu.Item>
                                <Menu.Item key="7">option7</Menu.Item>
                                <Menu.Item key="8">option8</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" title={<span><Icon type="home"/>商家管理</span>}>
                                <Menu.Item key="9">option9</Menu.Item>
                                <Menu.Item key="10">option10</Menu.Item>
                                <Menu.Item key="11">option11</Menu.Item>
                                <Menu.Item key="12">option12</Menu.Item>
                                <Menu.Item key="13">option9</Menu.Item>
                                <Menu.Item key="14">option10</Menu.Item>
                                <Menu.Item key="15">option11</Menu.Item>
                                <Menu.Item key="16">option12</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="laptop" />团购商品管理</span>}></SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="file-add" />推荐位管理</span>}></SubMenu>
                            <SubMenu key="sub6" title={<span><Icon type="user" />会员管理</span>}></SubMenu>
                            <SubMenu key="sub7" title={<span><Icon type="file-text" />订单管理</span>}></SubMenu>
                        </Menu>
                    </Sider>
                    <Layout style={{ padding: '0 2px 24px' }}>
                        <Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}
