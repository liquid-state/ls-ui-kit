import React, { Component } from 'react';
import { Progress } from 'antd';
import Example from '../../utils/Example';

class ProgressBar extends Component {
  render() {
    return (
      <Example title="Progress bar">
        <Progress percent={30} />
        <Progress percent={50} status="active" />
        <Progress percent={70} status="exception" />
        <Progress percent={100} />
        <Progress percent={50} showInfo={false} />
      </Example>
    );
  }
}

export default ProgressBar;
