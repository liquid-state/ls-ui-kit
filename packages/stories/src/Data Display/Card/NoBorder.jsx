import React, { Component } from 'react';
import { Card } from 'antd';
import Example from '../../utils/Example';

class NoBorder extends Component {
  render() { 
    return (
      <Example title="No border">

        <div style={{ background: '#ECECEC', padding: '30px' }}>
          <Card title="Card title" bordered={false} style={{ width: 300 }}>
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </div>
      </Example>
    );
  }
}
 
export default NoBorder;
