import React, { Component } from 'react';
import { Slider } from 'antd';
import Example from '../../utils/Example';

function formatter(value) {
  return `${value}%`;
}

class EventSlider extends Component {
  render() { 
    return (
      <Example title="Event">
        <div>
          <Slider defaultValue={30}/>
          <Slider range step={10} defaultValue={[20, 50]} />
        </div>
      </Example>
    );
  }
}
 
export default EventSlider;
