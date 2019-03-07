import React, { Component } from 'react';
import { message, Button } from 'antd';
import Example from '../../utils/Example';

class Custom extends Component {
  render() {
    return (
      <Example title="Customize duration">
        <Button onClick={this.success}>Customized display duration</Button>
      </Example>
    );
  }

  success = () => {
    message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
  };
}
 
export default Custom;
