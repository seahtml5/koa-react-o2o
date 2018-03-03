import React, { Component } from 'react'
import { Table, Icon, Button, Modal, Form, Input, Select } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;

import { ADD_CATEGORY } from '@/api/api'

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
}


class Cate extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            loading: false,
            categoryName:'',
            parentId:'0',
        }

    }
    
    // 新增
    handleAdd(){
        this.setState({
            visible: true
        })
    }

    // 确定
    handleOk(e){
        e.preventDefault();
        // 表单验证
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.setState({
                    loading: true
                })
                this.submitAddCate()
                // setTimeout(() => {
                //     this.setState({
                //         visible: false,
                //         loading:false
                //     })
                    
                // }, 1000);
            }
        });
    }

    // 输入categoryName
    inputName(e){
        let categoryName = e.target.value
        this.setState({
            categoryName
        })
    }

    // 新增分类
    submitAddCate(){
        let para = {
            parent_id:this.state.parentId,
            name:this.state.categoryName
        }
        ADD_CATEGORY(para).then(res=>{
            console.log(res)
        },rej=>{

        })
    }

    // 取消
    handleCancel(){
        this.setState({
            visible: false
        })
    }

    // 选择分类栏目
    handleSelect(value){
        this.setState({
            parentId:value
        })
    }
    
    componentDidMount() {
        
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
        
        const { getFieldDecorator } = this.props.form;

        return (
            <div className='category'>
                <div className="btn-wrapper">
                    <Button type="primary" onClick={e=>{this.handleAdd()}}>新增</Button>
                </div>
                <Table columns={columns} dataSource={data} />

                {/* 新增分类 */}
                <Modal
                    title="新增"
                    visible={this.state.visible}
                    onOk={e=>{this.handleOk(e)}}
                    onCancel={e=>{this.handleCancel()}}
                    confirmLoading={this.state.loading}                    
                >
                    <Form onSubmit={e => this.handleOk()}>
                        <FormItem {...formItemLayout} label="生活服务类名称">
                            {getFieldDecorator('categoryName', {
                                rules: [{
                                    required: true,
                                    message: '请输入名称',
                                }],
                            })(
                                <Input placeholder="请输入名称" onChange={(e)=>{this.inputName(e)}}/>
                            )}
                        </FormItem>
                        <FormItem {...formItemLayout} label="分类栏目">
                            <Select
                                value={this.state.parentId}
                                onChange={e => { this.handleSelect(e)}}
                            >
                                <Option value="0">一级分类</Option>
                                <Option value="1">二级分类</Option>
                            </Select>
                        </FormItem>
                    </Form>
                </Modal>
            </div>
        )
    }
}

const Category = Form.create()(Cate);
export default Category