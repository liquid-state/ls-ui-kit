import React, { Component } from 'react';
import { InputNumber } from 'antd';
import Example from '../../utils/Example';

class Sizes extends Component {
  render() { 
    return (
      <Example title="Sizes">
        <InputNumber size="large" min={1} max={100000} defaultValue={3} />
        <br/><br/>
        <InputNumber min={1} max={100000} defaultValue={3} />
        <br/><br/>
        <InputNumber size="small" min={1} max={100000} defaultValue={3} />
      </Example>
    );
  }
}
 
export default Sizes;
