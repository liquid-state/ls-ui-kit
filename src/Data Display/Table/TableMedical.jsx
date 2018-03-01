import React, { Component } from 'react';
import { Table, Icon } from 'antd';


const dataSource = [
  {
    key: '1',
    type: <Icon className="type" type="home" />,
    form: (
      <div>
        <h2 className="title">Lorem ipsum.</h2>
        <p className="sub-title">Lorem ipsum.</p>
      </div>
    ),
    address: <Icon className="status" type="check-circle-o" />,
  },
  {
    key: '2',
    type: <Icon type="setting" className="type" />,
    form: (
      <div>
        <h2 className="title">Lorem ipsum.</h2>
        <p className="sub-title">Lorem ipsum.</p>
      </div>
    ),
    address: <Icon className="status" type="exclamation-circle-o" />,
    styleType: 'warning'
  },
  {
    key: '3',
    type: <Icon className="type" type="eye-o" />,
    form: (
      <div>
        <h2 className="title">Lorem ipsum.</h2>
        <p className="sub-title">Lorem ipsum.</p>
      </div>
    ),
    address: <Icon className="status" type="check-circle-o" />
  },
  {
    key: '4',
    type: <Icon className="type" type="heart-o" />,
    form: (
      <div>
        <h2 className="title">Lorem ipsum.</h2>
        <p className="sub-title">Lorem ipsum.</p>
      </div>
    ),
    address: <Icon className="status" type="check-circle-o" />
  },
  {
    key: '5',
    type: <Icon className="type" type="global" />,
    form: (
      <div>
        <h2 className="title">Lorem ipsum.</h2>
        <p className="sub-title">Lorem ipsum.</p>
      </div>
    ),
    address: <Icon className="status" type="exclamation-circle-o" />,
    styleType: 'warning'
  }
];

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
    dataIndex: 'address',
    key: 'status',
    width: '21%'
  }
];

class TableMedical extends Component {
  render() {
    return (
      <Table className="mobile medical table" dataSource={dataSource} columns={columns} />
    );
  }

  componentDidMount() {
    const elements = document.querySelectorAll('.ant-table-wrapper.mobile.medical .ant-table-row-level-0');
    console.log(elements);
    dataSource.forEach((element, i) => {
      if(element.styleType !== 'warning') return;
      elements[i].classList.add('warning');
    });
  }
}
 
export default TableMedical;