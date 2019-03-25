import React, { Component } from 'react';
import { message, Button } from 'antd';
import Example from '../../utils/Example';

class Normal extends Component {
  render() {
    return (
      <Example title="Normal prompt">
        <Button type="primary" onClick={this.info}>Display normal message</Button>
      </Example>
    );
  }

  info = () => {
    message.info('This is a normal message');
  };
}

export default Normal;
