import React, { Component } from 'react'
import './style'
import { HOME } from '@/api/home'

import NavHeader from '@/components/navHeader'
import Banner from '@/components/banner'
import SubTitle from '@/components/subTitle'
import HomeList from '@/components/homeList'

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
                <div className="logo-wrapper">
                    <img src={require('../../assets/images/logo.png')} alt="" className='logo'/>
                </div>
                <Banner />
                <br />
                <SubTitle />
                <HomeList />
            </div>
        )
    }
}
