import React, { Component } from 'react';
import { Card } from 'antd';
import Example from '../../utils/Example';

class Loading extends Component {
  render() { 
    return (
      <Example title="Loading card">

        <Card loading title="Card title" style={{ width: '34%' }}>
          Whatever content
        </Card>
      </Example>
    );
  }
}
 
export default Loading;
