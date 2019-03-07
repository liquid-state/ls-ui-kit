import React, { Component } from 'react';
import { Button, notification } from 'antd';
import Example from '../../utils/Example';

class Icon extends Component {
  render() {
    return (
      <Example title="Notification with icon">
        <div>
          <Button className="mr20 mb20" onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button className="mr20 mb20" onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button className="mr20 mb20" onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </div>
      </Example>
    );
  }

  openNotificationWithIcon = (type) => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
}
 
export default Icon;
