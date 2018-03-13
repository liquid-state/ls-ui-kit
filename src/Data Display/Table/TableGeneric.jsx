import React, { Component } from 'react';
import { Table, Icon } from 'antd';



const dataSource = [
  {
    key: '1',
    type: <Icon className="type" type="solution" />,
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
    type: <Icon className="type" type="solution" />,
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
    type: <Icon className="type" type="solution" />,
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
    type: <Icon className="type" type="solution" />,
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
    type: <Icon className="type" type="solution" />,
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
    key: '6',
    type: <Icon className="type" type="solution" />,
    form: (
      <div>
        <h2 className="title">Lorem ipsum.</h2>
        <p className="sub-title">Lorem ipsum.</p>
      </div>
    ),
    address: <Icon className="status" type="check-circle-o" />
  },
  {
    key: '7',
    type: <Icon className="type" type="solution" />,
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
    key: '8',
    type: <Icon className="type" type="solution" />,
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
    key: '9',
    type: <Icon className="type" type="solution" />,
    form: (
      <div>
        <h2 className="title">Lorem ipsum.</h2>
        <p className="sub-title">Lorem ipsum.</p>
      </div>
    ),
    address: <Icon className="status" type="check-circle-o" />
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
class TableComponent extends Component {
  render() {
    return (
        <Table className="ls rows header table" dataSource={dataSource} columns={columns} />
    );
  }

  componentDidMount() {
    const elements = document.querySelectorAll('.ant-table-wrapper.ls.table .ant-table-row-level-0');

    dataSource.forEach((element, i) => {
      if(element.styleType !== 'warning') return;
      elements[i].classList.add('warning');
    });
  }
}
 
export default TableComponent;
