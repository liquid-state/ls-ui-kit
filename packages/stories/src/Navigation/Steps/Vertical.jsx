import React, { Component } from 'react';
import { Steps } from 'antd';
import Example from '../../utils/Example';

class Vertical extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <Example title="Vertical Steps">
        <Steps direction="vertical" current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </Example>
    );
  }
}

export default Vertical;
