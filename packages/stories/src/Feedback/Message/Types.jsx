import React, { Component } from 'react';
import { message, Button } from 'antd';
import Example from '../../utils/Example';

class Types extends Component {
  render() { 
    return (
      <Example title="Normal prompt">
        <Button onClick={this.success}>Success</Button>
        <Button className="ml20" onClick={this.error}>Error</Button>
        <Button className="ml20" onClick={this.warning}>Warning</Button>
      </Example>
    );
  }

  success = () => {
    message.success('This is a message of success');
  };

  error = () => {
    message.error('This is a message of error');
  };

  warning = () => {
    message.warning('This is message of warning');
  };
}
 
export default Types;
