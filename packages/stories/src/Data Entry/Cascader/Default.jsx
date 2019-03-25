import React, { Component } from 'react';
import { Cascader, Col, Row } from 'antd';
import Example from '../../utils/Example';

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
      <Example title="Default Value">
        <Row>
          <Col sm={16} lg={7} >
            <Cascader  defaultValue={['nsw', 'sydney', 'north-sydney']} style={{width: '100%  '}} options={options} placeholder="Please select" />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Default;
