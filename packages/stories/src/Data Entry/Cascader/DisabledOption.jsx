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
  disabled: true,
  children: [{
    value: 'perth',
    label: 'Perth',
    children: [{
      value: 'freemantle',
      label: 'Freemantle',
    }],
  }],
}];

class DisabledOption extends Component {
  render() { 
    return (
      <Example title="Disabled option">
        <Row>
          <Col sm={16} lg={7} >
            <Cascader style={{width: '100%  '}} options={options} placeholder="Please select" />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default DisabledOption;
