import React, { Component } from 'react';
import { Card, Col, Row } from 'antd';
import Example from '../../utils/Example';

class Columns extends Component {
  render() { 
    return (
      <Example title="Card in column">

        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>Card content</Card>
            </Col>
          </Row>
        </div>
      </Example>
    );
  }
}
 
export default Columns;
