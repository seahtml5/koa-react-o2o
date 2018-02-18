import React, { Component } from 'react'
import { Button } from 'antd';
import { DatePicker } from 'antd';
const { MonthPicker, RangePicker } = DatePicker;

export default class SubTitle extends Component {
    constructor(){
        super()
    }
    onChange(){
        console.log('onchange')
    }
    render() {
        return (
            <div className='sub-title'>
                subTitle
                <Button type="primary">Primary</Button>
                <DatePicker onChange={()=>this.onChange()} />
                <br />
                <MonthPicker onChange={()=>this.onChange()} placeholder="Select month" />
                <br />
                <RangePicker onChange={()=>this.onChange()} />
            </div>
        )
    }
}
