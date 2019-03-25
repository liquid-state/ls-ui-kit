import React, { Component } from 'react';
import { Spin } from 'antd';
import Example from '../../utils/Example';

class Inside extends Component {
  render() {
    const style = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 100,
      backgroundColor: '#E5E9F2'
    };

    return (
      <Example title="Inside a container">
        <div style={style}>
          <Spin size="large" />
        </div>
      </Example>
    );
  }
}
 
export default Inside;
