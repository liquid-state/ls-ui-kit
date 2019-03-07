import React, { Component } from 'react';
import { Avatar } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() {
    return (
      <Example title="Basic">
          <Avatar size="large" icon="user" />
          <Avatar className="ml20" icon="user" />
          <Avatar className="ml20" size="small" icon="user" />
          <Avatar className="ml20" shape="square" size="large" icon="user" />
          <Avatar className="ml20" shape="square" icon="user" />
          <Avatar className="ml20" shape="square" size="small" icon="user" />
      </Example>
    );
  }
}

export default Basic;
