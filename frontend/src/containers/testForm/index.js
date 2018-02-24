import React, { Component } from 'react'
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;
 class Test extends Component {
    constructor(props){
        super(props)
    }

    render() {
        console.log(this.props.form)
        return (
            <div>
                testform
            </div>
        )
    }
}
const TestForm = Form.create()(Test);
export default TestForm