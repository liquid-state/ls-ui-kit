import React, { Component } from 'react';
import { Button, notification } from 'antd';
import Example from '../../utils/Example';

class CustomStyle extends Component {
  render() { 
    return (
      <Example title="Customized style">

        <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
      </Example>
    );
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      style: {
        width: 600,
        marginLeft: 335 - 600,
      },
    });
  };
}
 
export default CustomStyle;
