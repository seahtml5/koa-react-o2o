import React, { Component } from 'react'
import './style'

export default class Header extends Component {
    constructor(){
        super()
        
        this.state = {
            hover:false,
            hotCity:[ '北京','上海','广州','厦门','福州', '南京', '天津', '西安', '贵州', '石家庄', '洛阳', '郑州']
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
        // 热门城市列表
        const renderHotCity = ()=>{
            if(this.state.hover){
                return ( 
                    <div className="city-list">
                        <h2 className='title'>热门城市</h2>
                        <ul className='list-item-wrapper'>
                            {
                                this.state.hotCity.map((e, idx) => {
                                    return (
                                        <li className='list-item' key={idx}>
                                            <a href="javascript:;">{e}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>)
            }else {
                return ''
            }
        }

        return (
            <div className="container">
                <div className='header'>
                    <div className="city-wrapper">
                        <span>北京</span>
                        <span>|</span>
                        <div className={'toggle-city ' +  (this.state.hover ? 'focus' : '') }
                            onMouseEnter={()=>this.onMouseEnterHandler()}
                            onMouseLeave={()=>this.onMouseLeaveHandler()}
                        >
                            <span>切换城市</span> 
                            <i className={this.state.hover? 'on': ''}></i>
                            {
                                renderHotCity()
                            }
                        </div>
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
