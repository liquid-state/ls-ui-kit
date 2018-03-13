import React, { Component } from 'react';
import { Table } from 'antd';

import './style.less';

const columns = [
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    width: '25%'
  },
  {
    title: 'Form',
    dataIndex: 'form',
    key: 'form',
    width: '54%'
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: '21%'
  }
];

class TableHeader extends Component {
  render() {
    return (
      <Table className="ls header hide" columns={columns} />
    );
  }
}
 
export default TableHeader;