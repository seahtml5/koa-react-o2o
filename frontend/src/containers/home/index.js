import React, { Component } from 'react'
import './style'
import { HOME } from '@/api'

import NavHeader from '@/components/navHeader'
import Banner from '@/components/banner'
import SubTitle from '@/components/subTitle'
import RecommendList from '@/components/recommendList'

import { Button } from 'antd'

const LOGO = require('../../assets/images/logo.png') 

export default class Home extends Component {
    constructor(){
        super()
    }

    getHome(){
        HOME().then(res=>{
            console.log('home')
            console.log(res)
        },err=>{
            console.log(err)
        })
    }

    componentDidMount() {
        this.getHome()
    }

    render() {
        return (
            <div className='home'>
                <NavHeader />
                {/* logo */}
                <div className="logo-wrapper">
                    <img src={require('../../assets/images/logo.png')} alt="" className='logo'/>
                </div>
                <Banner />
                {/* 推荐列表 */}
                <SubTitle />
                <RecommendList />
            </div>
        )
    }
}
