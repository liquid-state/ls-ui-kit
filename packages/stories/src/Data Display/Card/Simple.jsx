import React, { Component } from 'react';
import { Card } from 'antd';
import Example from '../../utils/Example';

class SimpleCard extends Component {
  render() { 
    return (
      <Example title="Simple Card">

        <Card style={{ width: 300 }}>
          <p>Card content</p>
          <p>Card content</p>
          <p>Card content</p>
        </Card>
      </Example>
    );
  }
}
 
export default SimpleCard;
