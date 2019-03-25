import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import Example from '../../utils/Example';

const Option = Select.Option;

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic Usage">

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
      </Example>
    );
  }
}
 
export default Basic;
