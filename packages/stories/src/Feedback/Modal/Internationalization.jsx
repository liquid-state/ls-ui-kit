import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Example from '../../utils/Example';

function confirm() {
  Modal.confirm({
    title: 'Confirm',
    content: 'Lorem Ipsum',
    okText: 'Ok',
    cancelText: 'Cancel',
  });
}

class Internationalization extends Component {
  state = { visible: false };

  render() { 
    return (
      <Example title="Internationalization">
        <Button onClick={confirm}>Confirm</Button>
      </Example>
    );
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  hideModal = () => {
    this.setState({
      visible: false,
    });
  }
}
 
export default Internationalization;
