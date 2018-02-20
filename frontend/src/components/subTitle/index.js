import React, { Component } from 'react'
import './style'

export default class SubTitle extends Component {
    constructor(){
        super()
        this.state = {
            list:[ '川湘菜', '江浙菜', '烧烤', '素食' ]
        }
    }
    onChange(){
        console.log('onchange')
    }
    render() {
        return (
            <div className='sub-title'>
                <h2>美食推荐</h2>
                <div className="list-wrapper">
                    <ul>
                        {
                            this.state.list.map((e,idx)=>{
                                return (
                                    <li className="list-item" key={idx}>
                                        <a href='javascript:;'>{e}</a>
                                    </li>
                                )
                            })
                        }
                        <li className="all">
                            <a href="javascript:;">全部</a>
                            <i className="arrow-right"></i>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
