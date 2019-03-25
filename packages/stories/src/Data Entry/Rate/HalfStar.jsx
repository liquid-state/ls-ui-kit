import React, { Component } from 'react';
import { Rate } from 'antd';
import Example from '../../utils/Example';

class HalfStar extends Component {
  render() { 
    return (
      <Example title="Half Star">
        <Rate allowHalf defaultValue={2.5} />
      </Example>
    );
  }
}
 
export default HalfStar;
