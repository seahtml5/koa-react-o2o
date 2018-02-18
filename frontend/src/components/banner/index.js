import React, { Component } from 'react'
import './style'

import { Carousel } from 'antd';

export default class Banner extends Component {
    constructor(){
        super()
        this.state = {
            category:['美食', '电影', '健身', '美发', '旅游']
        }
    }
    
    next(){
        console.log('next')
        console.log(this.refs.carousel)
    }

    render() {
        const settings = {
            dots: true,
            arrows:true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <div className='banner'>
                <div className="side-bar">
                    <h2 className='title'>全部分类</h2>
                    <div className="category-wrapper">
                        <ul className="category-list">
                            {
                                this.state.category.map((e,idx)=>{
                                    return (
                                        <li className="category-item" key={idx}>{e}</li>
                                    )
                                })
                            }
                        </ul>
                        <div className="sub-category">
                        </div>
                    </div>
                </div>

                <div className="main">
                    <div className="title">
                        <a href="javascript:;" className="title-item">首页</a>
                        <a href="javascript:;" className="title-item">团购</a>
                        <a href="javascript:;" className="title-item">商户</a>
                    </div>
                    <div className="carousel-wrapper">
                        <div className="arrow arrow-prev"></div>
                        <div className="arrow arrow-next" onClick={()=>{this.next()}} ></div>
                        <Carousel {...settings} className='carousel' ref='carousel'>
                            <div><img src={require('../../assets/images/banner1.jpg')} alt=""/></div>
                            <div><img src={require('../../assets/images/banner2.jpg')} alt=""/></div>
                        </Carousel> 
                    </div>   
                </div>
            </div>
        )
    }
}
