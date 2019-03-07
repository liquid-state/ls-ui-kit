import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Example from '../../utils/Example';

class Info extends Component {
  render() { 
    return (
      <Example title="Information modal dialog">
        <Button className="mb20 mr20" onClick={this.info}>Info</Button>
        <Button className="mr20 mb20" onClick={this.success}>Success</Button>
        <Button className="mr20 mb20" onClick={this.error}>Error</Button>
        <Button onClick={this.warning}>Warning</Button>
      </Example>
    );
  }

  info() {
    Modal.info({
      title: 'This is a notification message',
      content: (
        <div>
          <p>some messages...some messages...</p>
          <p>some messages...some messages...</p>
        </div>
      ),
      onOk() {},
    });
  }

  success() {
    Modal.success({
      title: 'This is a success message',
      content: 'some messages...some messages...',
    });
  }

  error() {
    Modal.error({
      title: 'This is an error message',
      content: 'some messages...some messages...',
    });
  }

  warning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  }
}
 
export default Info;
