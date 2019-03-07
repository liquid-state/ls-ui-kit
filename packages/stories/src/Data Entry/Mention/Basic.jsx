import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';
import Example from '../../utils/Example';

const { toString, toContentState } = Mention;

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">

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
      </Example>
    );
  }
}
 
export default Basic;
