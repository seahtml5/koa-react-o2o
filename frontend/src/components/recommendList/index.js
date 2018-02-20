import React, { Component } from 'react'
import './style.less'

export default class HomeList extends Component {
    constructor(){
        super()
        this.state = {
            list:[
                {
                    imgUrl:require('../../assets/images/rec1.jpg'),
                    range: 2,
                    desc:'春节优惠，欢乐分享',
                    price:40,
                    oldPrice:89.30,
                    sale:30
                },
                {
                    imgUrl:require('../../assets/images/rec2.jpg'),
                    range: 1,
                    desc:'欢乐大放送，新春送祝福',
                    price:75,
                    oldPrice:100,
                    sale:88
                }
            ]
        }
    }
    render() {
        return (
            <ul className='rec-list'>
                {
                    this.state.list.length === 0 ? '' 
                    : this.state.list.map((item,idx)=>{
                        return (
                            <li className="list-item" key={idx}>
                                <img src={item.imgUrl} alt=""/>
                                <h3 className="title">【{item.range}店通用】</h3>
                                <p className='desc'>{item.desc}</p>
                                <div className="price-wrapper">
                                    <span className="price">￥{item.price}</span>
                                    <span className="old-price">
                                        <span>价值</span>
                                        <span className='old-price-num'>{item.oldPrice}</span> 
                                    </span>
                                </div>
                                <p className="sale">已售{item.sale}</p>
                            </li>
                        )
                    })
                }  
            </ul>
        )
    }
}
