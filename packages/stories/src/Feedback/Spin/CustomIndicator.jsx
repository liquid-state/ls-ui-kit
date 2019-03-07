import React, { Component } from 'react';
import { Spin, Icon } from 'antd';
import Example from '../../utils/Example';

class CustomIndicator extends Component {
  render() {
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

    return (
      <Example title="Custom spinning indicator">
        <Spin indicator={antIcon} />
      </Example>
    );
  }
}

export default CustomIndicator;
