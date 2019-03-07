import React, { Component } from 'react';
import { Radio, Input } from 'antd';
import Example from '../../utils/Example';

const RadioGroup = Radio.Group;

class Vertical extends Component {
  state = {
    value: 1,
  }

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };

    return (
      <Example title="Vertical RadioGroup">
        <RadioGroup onChange={this.onChange} value={this.state.value}>
          <Radio style={radioStyle} value={1}>Option A</Radio>
          <Radio style={radioStyle} value={2}>Option B</Radio>
          <Radio style={radioStyle} value={3}>Option C</Radio>
          <Radio style={radioStyle} value={4}>
            More...
            {this.state.value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
          </Radio>
        </RadioGroup>
      </Example>
    );
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  }
}
 
export default Vertical;
