import React, { Component } from 'react';
import { Slider } from 'antd';
import Example from '../../utils/Example';

function formatter(value) {
  return `${value}%`;
}

class Custom extends Component {
  render() {
    return (
      <Example title="Customerize tooltip">
        <div>
          <Slider tipFormatter={formatter} />
          <Slider tipFormatter={null} />
        </div>
      </Example>
    );
  }
}
 
export default Custom;
