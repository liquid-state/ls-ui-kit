import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const Option = Select.Option;

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic Usage</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Select defaultValue="lucy" style={{ width: '100%', marginBottom: 20 }}>
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="disabled" disabled>Disabled</Option>
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select defaultValue="lucy" style={{ width: '100%' }} allowClear disabled>
              <Option value="lucy">Lucy</Option>
            </Select>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Basic;