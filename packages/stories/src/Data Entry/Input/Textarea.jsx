import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';
import Example from '../../utils/Example';

const { TextArea } = Input;

class Textarea extends Component {
  render() { 
    return (
      <Example title="TextArea">
        <Row>
          <Col sm={16} lg={7}>
            <TextArea rows={4} placeholder="Basic usage" />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Textarea;
