import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';

const users = ['afc163', 'benjycui', 'yiminghe', 'jljsj33', 'dqaria', 'RaoHai'];

class Disabled extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">disabled or readOnly</h3>

        <Row>
          <Col sm={16} lg={7}>
            <div className="mb20">
              <Mention
                style={{ width: '100%' }}
                placeholder="this is disabled Mention"
                suggestions={users}
                disabled
              />
            </div>
            <Mention
              style={{ width: '100%' }}
              placeholder="this is readOnly Mention"
              suggestions={users}
              readOnly
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Disabled;