import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';


import Header from '../../../../src/Data Display/Table/Header';
import Rows from '../../../../src/Data Display/Table/Rows';
import TableGeneric from '../../../../src/Data Display/Table/TableGeneric';


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
          <TableGeneric />
        </section>

      </Fragment>
    );
  }
}
 
export default TablePage;