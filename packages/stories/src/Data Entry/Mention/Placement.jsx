import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';
import Example from '../../utils/Example';

const { toString } = Mention;

class Placement extends Component {
  render() { 
    return (
      <Example title="Placement">

        <Row>
          <Col sm={16} lg={7}>
            <Mention
              style={{ width: '100%' }}
              suggestions={['afc163', 'benjycui', 'yiminghe', 'RaoHai']}
              placement="top"
              notFoundContent="Results not found"
            />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Placement;
