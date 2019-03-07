import React, { Component } from 'react';
import { Button } from 'antd';
import { AlertModal } from '@liquid-state/ui-kit';
import Example from '../../utils/Example';

class AlertModalMobile extends Component {
  state = { visible: false };

  onCancel = () => {
    this.setState({
      visible: false,
    });
  }

  onOk = () => {
    this.setState({
      visible: false,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  render() {
    return (
      <Example title="Alert Modal Mobile">
        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <AlertModal
            buttonType="danger"
            visible={this.state.visible}
            footer={null}
            title="Modal Alert"
            okText="Danger"
            icon="check-circle"
            onCancel={this.onCancel}
            onOk={this.onOk}
          >
            Body here is a notice reminder that the price of the shirt is nine.
          </AlertModal>
        </div>
      </Example>
    );
  }
}

export default AlertModalMobile;
