import React, { Component, Fragment } from 'react';
import { Row, Col, Icon } from 'antd';


import Header from '../../../../src/Data Display/Table/Header';
import Rows from '../../../../src/Data Display/Table/Rows';
import Table from '../../../../src/Data Display/Table/Table';

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

class TablePage extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Table</h1>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <h3 className="ex-title">Header</h3>
          <Header />
        </section>

        <section className="example">
          <h3 className="ex-title">Rows</h3>
          <Rows />
        </section>

        <section className="example">
          <h3 className="ex-title">Generic Table</h3>
          <Table data={dataSource} columns={columns} />
        </section>

      </Fragment>
    );
  }
}
 
export default TablePage;