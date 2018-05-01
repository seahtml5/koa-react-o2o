import React, { Component } from 'react'
import { hashHistory } from 'react-router'
import { connect } from 'react-redux'
import * as actionFile from '@/actions/action'
import './style'
import { Layout, Menu, Breadcrumb, Icon, Spin } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

import { CATEGORY_LEV_ONE, CATEGORY_LEV_TWO } from '@/api'

class Admin extends Component {
    constructor(props){
        super()
        this.state = {
        }
    }

    // 获取一级分类
    getCategoryLevOne() {
        const { dispatch, categoryLevOne } = this.props
        CATEGORY_LEV_ONE().then(res => {
            if (res.data.code === 200) {
                let data = res.data.data
                // 更新一级分类
                dispatch(actionFile.updateCategoryLevOne(data))
            }
        })
    }

    // 获取二级分类
    getCategoryLevTwo(id){
        const { dispatch, categoryLevTwo } = this.props
        let para = {
            parent_id:id,
            page:1
        }
        CATEGORY_LEV_TWO(para).then(res=>{
            if(res.data.code === 200){
                let data = {
                    data:res.data.data,
                    total:res.data.total,
                }
                // TODO redux更新二级分类
                dispatch(actionFile.updateCategoryLevTwo(data))
            }      
        })
    }


    // 路由跳转
    goRouter(path){
        hashHistory.push(path)
    }

    // 点击一级分类
    clickHandler(e){
        if(e.key){
            // 二级分类id
            let idx = e.key.lastIndexOf('/')
            let id = e.key.slice(idx+1)

            // 获取二级分类
            this.getCategoryLevTwo(id)

            // 跳转二级分类页
            this.goRouter(e.key)
        }
    }

    componentWillMount() {
        this.getCategoryLevOne()
    }

    render() {
        // 一级分类
        const { categoryLevOne } = this.props
        // 默认选中标签
        const defaultSelectedKey = categoryLevOne.length > 0 ? 'admin/category/' + categoryLevOne[0].id : ''

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
                    <Sider width={200} style={{ background: '#f0f0f0',textAlign:'center' }}>
                        {
                            categoryLevOne.length > 0 ?
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={[defaultSelectedKey]}
                            defaultOpenKeys={['category']}
                            style={{ height: '100%', borderRight: 0, fontSize: '14px', background: '#eee' }}
                            onClick={(e)=>{this.clickHandler(e)}}
                            >
                            <SubMenu key="category" title={<span><Icon type="appstore-o" />分类管理</span>}>
                                {/* 一级分类 */}
                                {
                                    categoryLevOne.map(e=>{
                                        return <Menu.Item key={'admin/category/' + e.id}>{e.name}</Menu.Item>
                                    })
                                }
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
                            </SubMenu>
                            <SubMenu key="sub4" title={<span><Icon type="laptop" />团购商品管理</span>}></SubMenu>
                            <SubMenu key="sub5" title={<span><Icon type="file-add" />推荐位管理</span>}></SubMenu>
                            <SubMenu key="sub6" title={<span><Icon type="user" />会员管理</span>}></SubMenu>
                            <SubMenu key="sub7" title={<span><Icon type="file-text" />订单管理</span>}></SubMenu>
                        </Menu>
                            : <Spin style={{margin:'30px auto'}}/>
                        }
                    </Sider>
                    <Layout>
                        {/* 二级分类 */}
                        <Content style={{ background: '#fff', padding: 10, margin: 0, minHeight: 280 }}>
                            { this.props.children }
                        </Content>
                    </Layout>
                </Layout>
            </div>
        )
    }
}


function mapPropsState(state) {
    return {
        categoryLevOne: state.categoryLevOne,
        categoryLevTwo: state.categoryLevTwo
    }
}

export default connect(
    mapPropsState
)(Admin)