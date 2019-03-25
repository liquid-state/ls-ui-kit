import React, { Component } from 'react';
import { message, Button } from 'antd';
import Example from '../../utils/Example';

class Loading extends Component {
  render() {
    return (
      <Example title="Message of loading">
        <Button onClick={this.success}>Display a loading indicator</Button>
      </Example>
    );
  }

  success = () => {
    const hide = message.loading('Action in progress..', 0);
    setTimeout(hide, 2500);
  };
}

export default Loading;
