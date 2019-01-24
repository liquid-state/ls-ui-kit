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
      <section className="example">
        <h3 className="ex-title">Custom Render</h3>
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
      </section>
    );
  }
}

export default CustomRender;
