import React, { Component } from 'react';
import { Radio } from 'antd';
import Example from '../../utils/Example';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class Size extends Component {
  render() { 
    return (
      <Example title="Size">

        <div>
          <RadioGroup defaultValue="a" size="large">
            <RadioButton value="a">Sydney</RadioButton>
            <RadioButton value="b">Brisbane</RadioButton>
            <RadioButton value="c">Perth</RadioButton>
            <RadioButton value="d">Melbourne</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup defaultValue="a">
            <RadioButton value="a">Sydney</RadioButton>
            <RadioButton value="b">Brisbane</RadioButton>
            <RadioButton value="c">Perth</RadioButton>
            <RadioButton value="d">Melbourne</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup defaultValue="a" size="small">
            <RadioButton value="a">Sydney</RadioButton>
            <RadioButton value="b">Brisbane</RadioButton>
            <RadioButton value="c">Perth</RadioButton>
            <RadioButton value="d">Melbourne</RadioButton>
          </RadioGroup>
        </div>
      </Example>
    );
  }
}
 
export default Size;
