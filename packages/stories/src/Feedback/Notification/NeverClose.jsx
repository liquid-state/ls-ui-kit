import React, { Component } from 'react';
import { Button, notification } from 'antd';
import Example from '../../utils/Example';

class Never extends Component {
  render() { 
    return (
      <Example title="Duration after which the notification box is closed">

        <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
      </Example>
    );
  }

  openNotification = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };
}
 
export default Never;
