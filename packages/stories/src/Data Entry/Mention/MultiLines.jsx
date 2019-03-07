import React, { Component } from 'react';
import { Mention, Row, Col } from 'antd';
import Example from '../../utils/Example';

const { toString } = Mention;

class MultiLines extends Component {
  render() { 
    return (
      <Example title="Multi Lines Mode">

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
      </Example>
    );
  }
}
 
export default MultiLines;
