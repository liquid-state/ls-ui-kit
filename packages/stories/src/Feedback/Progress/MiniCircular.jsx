import React, { Component } from 'react';
import { Progress } from 'antd';
import Example from '../../utils/Example';

class MiniCircular extends Component {
  render() {
    return (
      <Example title="Mini size circular progress bar">
        <Progress type="circle" percent={30} width={80} />
        <Progress className="ml20" type="circle" percent={70} width={80} status="exception" />
        <Progress className="ml20" type="circle" percent={100} width={80} />
      </Example>
    );
  }
}

export default MiniCircular;
