import React, { Component } from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '@/containers/app'
import NotFound from '@/containers/404'
import Home from '@/containers/home'

export default class RouterMap extends Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='*' component={NotFound} />
                </Route>
            </Router>
        )
    }
}
