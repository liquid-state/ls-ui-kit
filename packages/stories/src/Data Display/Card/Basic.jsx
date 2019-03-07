import React, { Component } from 'react';
import { Card } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic Card">

        <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Example>
    );
  }
}
 
export default Basic;
