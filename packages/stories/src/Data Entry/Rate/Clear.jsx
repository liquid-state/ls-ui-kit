import React, { Component } from 'react';
import { Rate } from 'antd';
import Example from '../../utils/Example';

class Clear extends Component {
  render() { 
    return (
      <Example title="Clear Star">
        <Rate defaultValue={3} /> allowClear: true
        <br />
        <Rate allowClear={false} defaultValue={3} /> allowClear: false
      </Example>
    );
  }
}
 
export default Clear;
