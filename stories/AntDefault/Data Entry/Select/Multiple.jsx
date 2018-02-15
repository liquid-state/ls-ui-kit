import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const Option = Select.Option;

const children = [];

for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class Multiple extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Multiple Selection</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Select
              mode="multiple"
              style={{ width: '100%' }}
              placeholder="Please select"
              defaultValue={['a10', 'c12']}
            >
              {children}
            </Select>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Multiple;