import React, { Component } from 'react';
import { Table } from 'antd';
import Example from '../../utils/Example';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    width: 150,
  }, {
    title: 'Age',
    dataIndex: 'age',
    width: 150,
  }, {
    title: 'Address',
    dataIndex: 'address',
  }
];

const data = [];
for (let i = 0; i < 100; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}

class FixedHeader extends Component {
  render() { 
    return (
      <Example title="Fixed Header">
        <Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} />
      </Example>
    );
  }
}
 
export default FixedHeader;
