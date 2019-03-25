import React, { Component } from 'react';
import { Button, notification, Icon } from 'antd';
import Example from '../../utils/Example';

class CustomIcon extends Component {
  render() { 
    return (
      <Example title="Customized Icon">

        <Button type="primary" onClick={this.openNotification}>Open the notification box</Button>
      </Example>
    );
  }

  openNotification = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />,
    });
  };
}
 
export default CustomIcon;
