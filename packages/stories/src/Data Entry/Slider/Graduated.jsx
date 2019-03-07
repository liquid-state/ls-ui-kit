import React, { Component } from 'react';
import { Slider } from 'antd';
import Example from '../../utils/Example';

const marks = {
  0: '0°C',
  26: '26°C',
  77: '77°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};

class Graduated extends Component {
  render() { 
    return (
      <Example title="Graduated slider">

        <div>
          <h4>included=true</h4>
          <Slider marks={marks} defaultValue={77} />
          <Slider range marks={marks} defaultValue={[26, 77]} />

          <h4>included=false</h4>
          <Slider marks={marks} included={false} defaultValue={37} />

          <h4>marks & step</h4>
          <Slider marks={marks} step={10} defaultValue={37} />

          <h4>step=null</h4>
          <Slider marks={marks} step={null} defaultValue={37} />
        </div>
      </Example>
    );
  }
}
 
export default Graduated;
