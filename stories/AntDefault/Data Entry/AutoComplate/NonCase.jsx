import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { Row, Col } from 'antd';

class NonCase extends Component {
  render() {
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
    return (
      <section className="example">
        <h3 className="ex-title">A non-case-sensitive AutoComplete</h3>
        <Row>
        <Col md={12} lg={6}>
          <AutoComplete
            style={{ width: '100%' }}
            dataSource={dataSource}
            placeholder="try to type `b`"
            filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
          />
        </Col>
      </Row>
      </section>
    );
  }
}
 
export default NonCase;