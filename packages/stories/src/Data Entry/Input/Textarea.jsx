import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';

const { TextArea } = Input;

class Textarea extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">TextArea</h3>

        <Row>
          <Col sm={16} lg={7}>
            <TextArea rows={4} placeholder="Basic usage" />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Textarea;