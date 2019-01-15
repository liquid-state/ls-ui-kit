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
        code: 752100,
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
        code: 453400,
      }],
    }],
  }
];

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
              defaultValue={['zhejiang', 'hangzhou', 'xihu']}
              displayRender={displayRender}
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default CustomRender;