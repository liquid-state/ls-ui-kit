import React, { Component } from 'react';
import { Steps } from 'antd';
import Example from '../../utils/Example';

class Dot extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <Example title="Dot Style">
        <Steps progressDot current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Example>
    );
  }
}

export default Dot;
