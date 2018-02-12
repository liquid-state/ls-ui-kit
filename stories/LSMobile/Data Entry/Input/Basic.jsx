import React, { Component } from 'react';
import { Input, Row, Col } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Input style={{width: '100%'}} placeholder="Basic usage" />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Basic;