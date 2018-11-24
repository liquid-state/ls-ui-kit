import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';

const { toString } = Mention;

class Placement extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Placement</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              style={{ width: '100%' }}
              suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
              placement="top"
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Placement;