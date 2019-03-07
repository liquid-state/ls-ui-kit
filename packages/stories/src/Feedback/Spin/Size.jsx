import React, { Component } from 'react';
import { Spin } from 'antd';
import Example from '../../utils/Example';

class Size extends Component {
  render() {
    return (
      <Example title="Size">
        <Spin size="small" />
        <Spin className="ml20" />
        <Spin className="ml20" size="large" />
      </Example>
    );
  }
}
 
export default Size;
