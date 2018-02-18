import React, { Component } from 'react'
import './style'

import { Carousel } from 'antd';

export default class Banner extends Component {
    constructor(){
        super()
        this.state = {
            category:['美食', '电影', '健身', '美发', '旅游'],
            showSubCategory: false
        }
    }
    
    // 显示二级分类
    showSubCategory(){
        this.setState({
            showSubCategory: true
        })
    }
    
    // 隐藏二级分类
    hideSubCategory(){
        this.setState({
            showSubCategory: false
        })
    }

    subCategory(){
        return (<div className="sub-category">
            <h2>子分类</h2>
        </div>)
    }
    
    render() {
        // 下一张
        function SampleNextArrow(props) {
            const { className, style, onClick } = props
            return (
                <div
                    className={className}
                    onClick={onClick}
                ></div>
            );
        }
        
        // 前一张
        function SamplePrevArrow(props) {
            const { className, style, onClick } = props
            return (
                <div
                    className={className}
                    onClick={onClick}
                ></div>
            );
        }

        // carousel 配置
        const settings = {
            dots: true,
            arrows:true,
            infinite: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />
        }

        return (
            <div className='banner'>
                {/* sidebar */}
                <div className="side-bar">
                    <h2 className='title'>全部分类</h2>
                    <div className="category-wrapper" onMouseEnter={() => { this.showSubCategory() }} onMouseLeave={()=>{this.hideSubCategory()}}>
                        {/* category */}
                        <ul className="category-list">
                            {
                                this.state.category.map((e,idx)=>{
                                    return (
                                        <li className="category-item" key={idx}>{e}</li>
                                    )
                                })
                            }
                        </ul>

                        {/* sub-category */}
                        {
                            this.state.showSubCategory ? this.subCategory() : ''
                        }
                    </div>
                </div>

                {/* main */}
                <div className="main">
                    {/* title */}
                    <div className="title">
                        <a href="javascript:;" className="title-item">首页</a>
                        <a href="javascript:;" className="title-item">团购</a>
                        <a href="javascript:;" className="title-item">商户</a>
                    </div>
                    {/* carsuel */}
                    <div className="carousel-wrapper">
                        <Carousel {...settings} className='carousel' ref='carousel'>
                            <div><img src={require('../../assets/images/banner1.jpg')} alt=""/></div>
                            <div><img src={require('../../assets/images/banner2.jpg')} alt=""/></div>
                        </Carousel> 
                    </div> 
                    {/* ad */}
                    <img src={require('../../assets/images/ad.jpg')} alt="" className="ad"/>
                </div>
            </div>
        )
    }
}
