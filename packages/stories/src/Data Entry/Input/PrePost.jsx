import React, { Component } from 'react';
import { Input, Select, Icon, Row, Col } from 'antd';
import Example from '../../utils/Example';

const Option = Select.Option;

const selectBefore = (
  <Select defaultValue="Http://" style={{ width: 90 }}>
    <Option value="Http://">Http://</Option>
    <Option value="Https://">Https://</Option>
  </Select>
);

const selectAfter = (
  <Select defaultValue=".com" style={{ width: 80 }}>
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

class PrePost extends Component {
  render() { 
    return (
      <Example title="Pre and Post tab">

        <Row>
          <Col span={24} className="mb20">
            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
          </Col>
          <Col span={24} className="mb20">
            <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue="mysite" />
          </Col>
          <Col span={24}>
            <Input addonAfter={<Icon type="setting" />} defaultValue="mysite" />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default PrePost;
