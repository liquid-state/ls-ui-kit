import React, { Component } from 'react';
import { Avatar } from 'antd';
import Example from '../../utils/Example';

class Type extends Component {
  render() {
    return (
      <Example title="Type">
        <Avatar icon="user" />
        <Avatar className="ml20">U</Avatar>
        <Avatar className="ml20">USER</Avatar>
        <Avatar className="ml20" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        <Avatar className="ml20" style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        <Avatar className="ml20" style={{ backgroundColor: '#87d068' }} icon="user" />
      </Example>
    );
  }
}
 
export default Type;
