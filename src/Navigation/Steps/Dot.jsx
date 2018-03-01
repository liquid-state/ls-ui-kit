import React, { Component } from 'react';
import { Steps } from 'antd';

import './dot.less';

const Step = Steps.Step;

class Dot extends Component {
  render() { 
    return (
      <Steps className="mobile dot-style" progressDot current={1}>
        <Step title="Waiting" />
        <Step title="In Progress" />
        <Step title="In Progress" />
        <Step title="In Progress" />
        <Step title="Finished" />
      </Steps>
    );
  }
}
 
export default Dot;