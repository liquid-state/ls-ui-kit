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