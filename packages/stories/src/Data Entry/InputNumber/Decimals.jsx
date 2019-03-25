import React, { Component } from 'react';
import { InputNumber } from 'antd';
import Example from '../../utils/Example';

class Decimals extends Component {
  render() { 
    return (
      <Example title="Decimals">
        <InputNumber min={0} max={10} step={0.1} />
      </Example>
    );
  }
}
 
export default Decimals;
