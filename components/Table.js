import React from 'react'
import dayjs from 'dayjs'
import { Table as AntdTable } from 'antd'

const Table = ({ dataSource, onChange }) => {
  return <AntdTable showSorterTooltip={false} columns={columns} dataSource={dataSource} onChange={onChange} rowKey={(record) => record.mstar_id} />
}

export default Table

const columns = [
  {
    title: 'ชื่อกองทุน',
    dataIndex: 'thailand_fund_code',
    key: 'thailand_fund_code',
    ellipsis: true,
    width: '30%',
  },
  {
    title: 'อันดับของกองทุน',
    dataIndex: 'nav_index',
    key: 'nav_index',
    sorter: (a, b) => a.nav_index - b.nav_index,
    ellipsis: true,
    width: '15%',
    align: 'center',
  },
  {
    title: 'เวลาที่ข้อมูลถูกอัพเดต',
    dataIndex: 'nav_date',
    key: 'nav_date',
    sorter: (a, b) => new Date(a.nav_date).getTime() - new Date(b.nav_date).getTime(),
    ellipsis: true,
    render: (text) => dayjs(text).format('DD MMMM YYYY'),
    width: '25%',
    align: 'center',
  },
  {
    title: 'ผลตอบแทน',
    dataIndex: 'nav_return',
    key: 'nav_return',
    sorter: (a, b) => a.nav_return - b.nav_return,
    ellipsis: true,
    width: '15%',
    align: 'right',
  },
  {
    title: 'ราคา',
    dataIndex: 'nav',
    key: 'nav',
    sorter: (a, b) => a.nav - b.nav,
    ellipsis: true,
    width: '15%',
    align: 'right',
  },
]
