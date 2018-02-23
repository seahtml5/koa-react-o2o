import React, { Component } from 'react'
import { Table, Icon, Button } from 'antd';

export default class Category extends Component {
    render() {
        const columns = [{
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
        }];

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

        return (
            <div className='category'>
                <div className="btn-wrapper">
                    <Button type="primary">新增</Button>
                </div>
                <Table columns={columns} dataSource={data} />
            </div>
        )
    }
}
