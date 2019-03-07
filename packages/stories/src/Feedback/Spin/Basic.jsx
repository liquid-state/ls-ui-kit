import React, { Component } from 'react';
import { Spin } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() {
    return (
      <Example title="Basic Usage">
        <Spin />
      </Example>
    );
  }
}
 
export default Basic;
