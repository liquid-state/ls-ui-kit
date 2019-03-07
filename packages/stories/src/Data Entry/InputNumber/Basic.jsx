import React, { Component } from 'react';
import { InputNumber } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">
        <InputNumber min={1} max={10} defaultValue={3} />
      </Example>
    );
  }
}
 
export default Basic;
