import React, { Component } from 'react';
import { Avatar, Badge } from 'antd';
import Example from '../../utils/Example';

class BadgeAvatar extends Component {
  render() { 
    return (
      <Example title="With Badge">
        <div>
          <span style={{ marginRight: 24 }}>
            <Badge count={1}><Avatar shape="square" icon="user" /></Badge>
          </span>
          <span>
            <Badge dot><Avatar shape="square" icon="user" /></Badge>
          </span>
        </div>
      </Example>
    );
  }
}
 
export default BadgeAvatar;
