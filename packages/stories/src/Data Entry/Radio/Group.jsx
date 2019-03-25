import React, { Component } from 'react';
import { Radio } from 'antd';
import Example from '../../utils/Example';

const RadioGroup = Radio.Group;

class Group extends Component {
  state = {
    value: 1
  }

  render() { 
    return (
      <Example title="Radio Group">
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio value={1}>A</Radio>
          <Radio value={2}>B</Radio>
          <Radio value={3}>C</Radio>
          <Radio value={4}>D</Radio>
        </RadioGroup>
      </Example>
    );
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }
}
 
export default Group;
