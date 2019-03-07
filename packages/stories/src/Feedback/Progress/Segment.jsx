import React, { Component } from 'react';
import { Tooltip, Progress } from 'antd';
import Example from '../../utils/Example';

class Segment extends Component {
  render() {
    return (
      <Example title="Progress bar with success segment">
        <Tooltip title="3 done / 3 in progress / 4 to do">
          <Progress percent={60} successPercent={30} />
        </Tooltip>
      </Example>
    );
  }
}

export default Segment;
