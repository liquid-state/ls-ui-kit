import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';

const { toString, toContentState } = Mention;

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              style={{ width: '100%' }}
              defaultValue={toContentState('@afc163')}
              suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', '中文', 'にほんご']}
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Basic;