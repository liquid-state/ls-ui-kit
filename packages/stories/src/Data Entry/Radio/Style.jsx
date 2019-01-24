import React, { Component } from 'react';
import { Radio } from 'antd';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class RadioButtonPage extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">RadioButton Style</h3>

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
      </section>
    );
  }
}

export default RadioButtonPage;
