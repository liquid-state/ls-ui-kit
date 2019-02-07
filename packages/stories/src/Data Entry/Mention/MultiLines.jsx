import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';

const { toString } = Mention;

class MultiLines extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Multi Lines Mode</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              style={{ width: '100%', height: 100 }}
              suggestions={['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai']}
              multiLines
              notFoundContent="Results not found"
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default MultiLines;
