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
      code: 2000,
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
      code: 4000,
    }],
  }],
}];

const displayRender = (labels, selectedOptions) => labels.map((label, i) => {
  const option = selectedOptions[i];
  if (i === labels.length - 1) {
    return (
      <span key={option.value}>
        {label} (<a href="#">{option.code}</a>)
      </span>
    );
  }
  return <span key={option.value}>{label} / </span>;
});


class CustomRender extends Component {
  render() {
    return (
      <Example title="Custom Render">
        <Row>
          <Col sm={16} lg={7} >
            <Cascader
              style={{width: '100%'}}
              options={options}
              defaultValue={['wa', 'perth', 'freemantle']}
              displayRender={displayRender}
            />
          </Col>
        </Row>
      </Example>
    );
  }
}

export default CustomRender;
