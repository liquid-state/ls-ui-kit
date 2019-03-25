import React, { Component } from 'react';
import { Steps } from 'antd';
import Example from '../../utils/Example';

class Error extends Component {
  render() {
    const Step = Steps.Step;
    return (
      <Example title="Error Status">

        <Steps current={1} status="error">
          <Step title="Finished" description="This is a description" />
          <Step title="In Process" description="This is a description" />
          <Step title="Waiting" description="This is a description" />
        </Steps>
      </Example>
    );
  }
}
 
export default Error;
