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
              suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai', 'Jason', 'Mike', 'Sven', 'James']}
              notFoundContent="Results not found"
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Basic;
