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
      }, {
        value: 'xiasha',
        label: 'Xia Sha',
        disabled: true,
      }],
    }],
  }, {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [{
      value: 'nanjing',
      label: 'Nanjing',
      children: [{
        value: 'zhonghuamen',
        label: 'Zhong Hua men',
      }],
    }],
  }
];

class Search extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Search</h3>
        <Row>
          <Col sm={16} lg={7} >
            <Cascader
              style={{width: '100%'}}
              options={options}
              placeholder="Please select"
              showSearch
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Search;