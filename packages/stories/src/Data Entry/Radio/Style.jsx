import React, { Component } from 'react';
import { Radio } from 'antd';
import Example from '../../utils/Example';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class RadioButtonPage extends Component {
  render() {
    return (
      <Example title="RadioButton Style">

        <div>
          <RadioGroup defaultValue="a">
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
          <RadioGroup disabled defaultValue="a">
            <RadioButton value="a">Sydney</RadioButton>
            <RadioButton value="b">Brisbane</RadioButton>
            <RadioButton value="c">Perth</RadioButton>
            <RadioButton value="d">Melbourne</RadioButton>
          </RadioGroup>
        </div>
        <div style={{ marginTop: 16 }}>
          <RadioGroup defaultValue="a" buttonStyle="solid">
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

export default RadioButtonPage;
