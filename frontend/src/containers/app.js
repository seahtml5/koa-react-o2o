import React, { Component } from 'react'
import './app.less'

export default class App extends Component {
    render() {
        return (
            <div className='app'>
                {this.props.children}
            </div>
        )
    }
}
