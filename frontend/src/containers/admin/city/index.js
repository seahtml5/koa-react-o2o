import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;



export default class City extends Component {
    constructor(){
        super()
    }
    componentDidMount() {
    }
    render() {
        return (
            <div className='city'>
                城市管理
            </div>
        )
    }
}
