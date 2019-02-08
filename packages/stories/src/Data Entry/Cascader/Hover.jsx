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

function displayRender(label) {
  return label[label.length - 1];
}

class Hover extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Hover</h3>
        <Row>
          <Col sm={16} lg={7} >
            <Cascader
              style={{width: '100%'}}
              expandTrigger="hover"
              displayRender={displayRender}
              options={options}
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Hover;
