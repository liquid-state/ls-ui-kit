import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Example from '../../utils/Example';

class Destroy extends Component {
  state = { visible: false };

  render() {
    return (
      <Example title="Manual to destroy">
        <Button onClick={this.success}>Success</Button>
      </Example>
    );
  }

  success() {
    const modal = Modal.success({
      title: 'This is a notification message',
      content: 'This modal will be destroyed after 1 second',
    });
    setTimeout(() => modal.destroy(), 1000);
  }
}

export default Destroy;
