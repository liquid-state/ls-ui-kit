import React, { Component } from 'react';
import { Progress } from 'antd';
import Example from '../../utils/Example';

class CircularProgressBar extends Component {
  render() {
    return (
      <Example title="Circular progress bar">

        <Progress className="mb20 mr20" type="circle" percent={75} />
        <Progress className="mb20 mr20" type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </Example>
    );
  }
}
 
export default CircularProgressBar;
