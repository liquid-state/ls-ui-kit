import React, { Component } from 'react';
import { Steps } from 'antd';
import Example from '../../utils/Example';

class Mini extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <Example title="Mini version">
        <Steps size="small" current={1}>
          <Step title="Finished" />
          <Step title="In Progress" />
          <Step title="Waiting" />
        </Steps>
      </Example>
    );
  }
}

export default Mini;
