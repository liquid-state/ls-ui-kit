import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class NonCase extends Component {
  render() {
    const dataSource = ['Burns Bay Road', 'Downing Street', 'Wall Street'];
    return (
      <Example title="A non-case-sensitive AutoComplete">
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
    </Example>
    );
  }
}
 
export default NonCase;
