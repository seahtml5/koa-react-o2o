import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '@/containers/app'
import NotFound from '@/containers/404'
import Home from '@/containers/home'
import Admin from '@/containers/admin'
import Category from '@/containers/admin/category'
import City from '@/containers/admin/city'

export default class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home} name='首页'/>
                    {/* 子路由 */}
                    <Route path='/admin' component={Admin} name='管理平台'>
                        <Route path='category' component={Category} name='生活服务类'/>
                        <Route path='city' component={City} name='城市列表'/>
                    </Route>
                    <Route path='*' component={NotFound} name='404'/>
                </Route>
            </Router>
        )
    }
}
