import React, { Component } from 'react'
import './style'

export default class Header extends Component {
    constructor(){
        super()
        
        this.state = {
            hover:false
        }
    }

    onMouseEnterHandler(){
        console.log('enter')
        this.setState({
            hover: true
        })
    }

    onMouseLeaveHandler(){
        console.log('leave')
        this.setState({
            hover: false
        })
    }
    render() {
        return (
            <div className="container">
                <div className='header'>
                    <div className="city-wrapper">
                        <span>北京</span>
                        <span>|</span>
                        <span className={'toggle-city ' +  (this.state.hover ? 'focus' : '') }
                            onMouseEnter={()=>this.onMouseEnterHandler()}
                            onMouseLeave={()=>this.onMouseLeaveHandler()}
                        >
                            切换城市
                            <i className={this.state.hover? 'on': ''}></i>
                        </span>
                        <span>商户中心</span>
                    </div>
                    <div className="login-wrapper">
                        <a href="javascript:;" className="login">登录</a>
                        <span>|</span>
                        <a href="javascript:;" className="register">注册</a>
                    </div>
                </div>
            </div>
        )
    }
}
