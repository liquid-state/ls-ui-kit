import React, { Component } from 'react';
import { Cascader, Col, Row } from 'antd';

const options = [{
  value: 'nsw',
  label: 'NSW',
  children: [{
    value: 'sydney',
    label: 'Sydney',
    children: [{
      value: 'north-sydney',
      label: 'North Sydney',
    }],
  }],
}, {
  value: 'wa',
  label: 'WA',
  children: [{
    value: 'perth',
    label: 'Perth',
    children: [{
      value: 'freemantle',
      label: 'Freemantle',
    }],
  }],
}];

class Default extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Default Value</h3>
        <Row>
          <Col sm={16} lg={7} >
            <Cascader  defaultValue={['nsw', 'sydney', 'north-sydney']} style={{width: '100%  '}} options={options} placeholder="Please select" />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Default;
