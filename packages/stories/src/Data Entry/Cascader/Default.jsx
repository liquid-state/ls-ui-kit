import React, { Component } from 'react';
import { Cascader, Col, Row } from 'antd';

const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [{
      value: 'hangzhou',
      label: 'Hangzhou',
      children: [{
        value: 'xihu',
        label: 'West Lake',
      }],
    }],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua Men',
      }],
    }],
  }
];

class Default extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Default Value</h3>
        <Row>
          <Col sm={16} lg={7} >
            <Cascader  defaultValue={['zhejiang', 'hangzhou', 'xihu']} style={{width: '100%  '}} options={options} placeholder="Please select" />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Default;