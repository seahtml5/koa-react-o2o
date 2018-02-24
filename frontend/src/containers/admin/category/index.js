import React, { Component } from 'react'
import { Table, Icon, Button, Modal, Form, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;


const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
}


export default class Category extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            loading: false
        }

    }
    
    // 新增
    handleAdd(){
        this.setState({
            visible: true
        })
    }

    // 确定
    handleOk(){
        console.log("ok")
        this.setState({
            loading: true
        })

        setTimeout(() => {
            this.setState({
                visible: false,
                loading:false
            })
            
        }, 1000);
    }

    // 取消
    handleCancel(){
        this.setState({
            visible: false
        })
    }
    
    componentDidMount() {
        // To disabled submit button at the beginning.
        // this.props.form.validateFields();
        // console.log(this.props)

    }
    render() {
        const columns = [
            {
            title: 'ID',
            dataIndex: 'ID',
            width: 150
            }, 
            {
                title: '分类',
                dataIndex: 'categoryName',
                width: 150
            },
            {
                title: '排列序号',
                dataIndex: 'sort',
                width: 150
            }, 
            {
                title: '新增时间',
                dataIndex: 'addTime',
                width: 150
            }, 
            {
                title: '发布状态',
                dataIndex: 'status',
            }, 
            {
                title: '操作',
                dataIndex: 'action',
                width: 150,
                render: (text, record) => (
                    <span>
                        <a href="javascript:;"><Icon type='edit'/></a>
                        <span className="ant-divider" />
                        <a href="javascript:;"><Icon type='delete'/></a>
                    </span>
                ),
            }
        ];

        const data = [
            {
                key: '1',
                ID:1,
                categoryName: '外卖',
                sort: 1,
                addTime:'2018-2-18',
                status: 1
            },
            {
                key: '2',
                ID:2,
                categoryName: '美食',
                sort: 2,
                addTime:'2018-2-18',
                status: 1
            },
            {
                key: '3',
                ID:3,
                categoryName: '租车',
                sort: 3,
                addTime:'2018-2-18',
                status: 1
            },
        ];
        
        // const { getFieldDecorator } = this.props.form;
        // console.log(this.props.form)
        return (
            <div className='category'>
                <div className="btn-wrapper">
                    <Button type="primary" onClick={e=>{this.handleAdd()}}>新增</Button>
                </div>
                <Table columns={columns} dataSource={data} />
                <Modal
                    title="新增"
                    visible={this.state.visible}
                    onOk={e=>{this.handleOk()}}
                    onCancel={e=>{this.handleCancel()}}
                    confirmLoading={this.state.loading}                    
                >
                    <Form>
                        <FormItem {...formItemLayout} label="生活服务类名称">
                        <Input placeholder="请输入名称" />

                            {/* {getFieldDecorator('categoryName', {
                                rules: [{
                                    required: true,
                                    message: '请输入名称',
                                }],
                            })(
                                <Input placeholder="请输入名称" />
                            )} */}
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}
