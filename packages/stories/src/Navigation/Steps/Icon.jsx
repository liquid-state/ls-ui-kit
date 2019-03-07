import React, { Component } from 'react';
import { Steps, Icon } from 'antd';
import Example from '../../utils/Example';

class StepIcon extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <Example title="Steps With Icon">
        <Steps>
          <Step status="finish" title="Login" icon={<Icon type="user" />} />
          <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
          <Step status="process" title="Pay" icon={<Icon type="loading" />} />
          <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
        </Steps>
      </Example>
    );
  }
}

export default StepIcon;
