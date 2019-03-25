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

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">
        <Row>
          <Col sm={16} lg={7} >
            <Cascader options={options} placeholder="Please select" />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Basic;
