import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

import Header from '../../../../src/Data Display/Table/Header';
import Rows from '../../../../src/Data Display/Table/Rows';
import TableGeneric from '../../../../src/Data Display/Table/TableGeneric';
import TableMedical from '../../../../src/Data Display/Table/TableMedical';

class TablePage extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Table</h1>

        <p className="text">
          A table displays rows of data.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>
            To display a collection of structured data.
          </li>
          <li>
            To sort, search, paginate, filter data.
          </li>
        </ul>

        <h2 className="title">Examples:</h2>

        {
          /*
          <section className="example">
            <h3 className="ex-title">Generic Table Header</h3>

            <Row>
              <Col span={24}>
                <Header />
              </Col>
            </Row>
          </section>

          <section className="example">
            <h3 className="ex-title">Generic Table Rows</h3>

            <Row>
              <Col span={24}>
                <Rows />
              </Col>
            </Row>
          </section> */
        }

        <section className="example">
          <h3 className="ex-title">Generic Table</h3>

          <Row>
            <Col span={24}>
              <TableGeneric />
            </Col>
          </Row>
        </section>

        {
          /*
            <section className="example">
              <h3 className="ex-title">Medical Table Header</h3>

              <Row>
                <Col span={24}>
                  <Header />
                </Col>
              </Row>
            </section>

            <section className="example">
              <h3 className="ex-title">Medical Table Rows</h3>

              <Row>
                <Col span={24}>
                  <Header />
                </Col>
              </Row>
            </section> */
        }

        <section className="example">
          <h3 className="ex-title">Medical Table</h3>

          <Row>
            <Col span={24}>
              <TableMedical />
            </Col>
          </Row>
        </section>

      </Fragment>
    );
  }
}
 
export default TablePage;