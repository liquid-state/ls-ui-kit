import React, { Component } from 'react';
import { Radio } from 'antd';
import Example from '../../utils/Example';

const RadioGroup = Radio.Group;

class Name extends Component {
  render() {
    return (
      <Example title="RadioGroup With Name">
        <RadioGroup name="radiogroup" defaultValue={1}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </Example>
    );
  }
}
 
export default Name;
