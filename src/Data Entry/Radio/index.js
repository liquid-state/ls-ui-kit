import React, { Component } from 'react';
import { Radio } from 'antd';

import './style.less';

const RadioGroup = Radio.Group;

class RadioComponent extends Component {
  state = {
    value: 1,
  };

  render() {
    return (
      <RadioGroup className="mobile" onChange={this.onChange} value={this.state.value}>
        <Radio value={1}>A</Radio>
        <Radio value={2}>B</Radio>
        <Radio value={3}>C</Radio>
        <Radio value={4}>D</Radio>
        <Radio value={5} disabled>E</Radio>
      </RadioGroup>
    );
  }

  onChange = e => this.setState({ value: e.target.value });
}

export default RadioComponent;