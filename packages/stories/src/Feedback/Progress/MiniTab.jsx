import React, { Component } from 'react';
import { Progress } from 'antd';
import Example from '../../utils/Example';

class MiniTab extends Component {
  render() {
    return (
      <Example title="Mini size progress bar">
        <div style={{ width: 170 }}>
          <Progress percent={30} size="small" />
          <Progress percent={50} size="small" status="active" />
          <Progress percent={70} size="small" status="exception" />
          <Progress percent={100} size="small" />
        </div>
      </Example>
    );
  }
}

export default MiniTab;
