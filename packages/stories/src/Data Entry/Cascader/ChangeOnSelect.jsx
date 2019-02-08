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

class ChangeOnSelect extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Change On Select</h3>
        <Row>
          <Col sm={16} lg={7} >
            <Cascader
              style={{width: '100%  '}}
              options={options}
              placeholder="Please select"
              changeOnSelect
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default ChangeOnSelect;
