import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">

        <Row>
          <Col sm={16} lg={7}>
            <Input style={{width: '100%'}} placeholder="Basic usage" />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Basic;
