import React, { Component } from 'react';
import { Progress } from 'antd';
import Example from '../../utils/Example';

class TextFormat extends Component {
  render() {
    return (
      <Example title="Custom text format">
        <Progress type="circle" percent={75} format={percent => `${percent} Days`} />
        <Progress className="ml20" type="circle" percent={100} format={() => 'Done'} />
      </Example>
    );
  }
}

export default TextFormat;
