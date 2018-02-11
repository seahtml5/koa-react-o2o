import React, { Component } from 'react'
import './style'
import { HOME } from '@/api/home'


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
                <h2>Welcome</h2>
                <h3>To Project frontend</h3>
            </div>
        )
    }
}
