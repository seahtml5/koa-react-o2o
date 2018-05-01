/**
 * 二级分类
 */
import React, { Component } from 'react'
import { connect} from 'react-redux'
import { Table, Icon, Button, Modal, Form, Input, Select, notification } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import * as actionFile from '@/actions/action'

import { ADD_CATEGORY, CATEGORY_LEV_TWO, CATEGORY_LEV_ONE } from '@/api'

const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 10 },
}

// 成功/失败 提示
const notifiy = (type,msg) => {
    notification[type]({
        message: msg
    });
};

class Cate extends Component {
    constructor(props){
        super(props)
        this.state = {
            visible: false,
            loading: false,
            categoryName:'',
            parentId:'0',
            page:1,
        }

    }

    // 获取二级分类
    // getCategoryLevTwo(){
    //     let { categoryLevOne } = this.props
    //     let para = {
    //         parent_id: this.props.params.id !== undefined ? this.props.params.id : categoryLevOne[0].id,
    //         page: this.state.page
    //     }
    //     console.log(para)
        
    // }
    
    // 新增
    handleAdd(){
        this.setState({
            visible: true
        })
    }

    // 更新一级分类
    updateCategoryLevOne() {
        const { dispatch, categoryLevOne } = this.props
        CATEGORY_LEV_ONE().then(res => {
            if (res.data.code === 200) {
                let data = res.data.data
                // 更新redux
                dispatch(actionFile.updateCategoryLevOne(data))
            }
        })
    }

    // 获取二级分类
    getCategoryLevTwo() {
        const { dispatch, categoryLevOne, categoryLevTwo } = this.props
        // let para = {
        //     parent_id: this.props.params.id !== undefined ? this.props.params.id : categoryLevOne[0].id,
        //     page: this.state.page
        // }
        console.log(categoryLevOne)
        return
        CATEGORY_LEV_TWO(para).then(res => {
            if (res.data.code === 200) {
                let data = {
                    data: res.data.data,
                    total: res.data.total,
                }
                dispatch(actionFile.updateCategoryLevTwo(data))
                console.log('will', categoryLevTwo)
            }
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
            }
        });
    }

    // 提交新增分类
    submitAddCate(){
        let para = {
            parent_id:this.state.parentId === '0' ? this.state.parentId : this.props.params.id,
            name:this.state.categoryName
        }
        this.setState({
            loading: true
        })
        ADD_CATEGORY(para).then(res=>{
            this.setState({loading:false})
            if(res.data.code === 200){
                notifiy('success',res.data.msg)
                this.setState({
                    visible: false
                })
                // 获取一级分类 更新redux
                this.updateCategoryLevOne()
            }else {
                notifiy('error', res.data.msg)
            }
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

    // 输入categoryName
    inputName(e) {
        let categoryName = e.target.value
        this.setState({
            categoryName
        })
    }

    componentWillMount(){
        this.getCategoryLevTwo()

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

function mapPropsState(state) {
    return {
        categoryLevOne: state.categoryLevOne,
        categoryLevTwo: state.categoryLevTwo
    }
}

const Category = Form.create()(Cate);
export default connect(
    mapPropsState
)(Category)