import React, { Component } from 'react';
import { Button } from 'antd';
import { TwoButtonModal } from '@liquid-state/ui-kit';
import Example from '../../utils/Example';

class TwoButtonAlertModalMobile extends Component {
  state = { visible: false };

  onOk = () => {
    this.setState({
      visible: false,
    });
  }

  onCancel = () => {
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
      <Example title="Two But Alert Modal Mobile">
        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <TwoButtonModal
            visible={this.state.visible}
            footer={null}
            title="Modal Alert"
            cancelText="Default"
            okText="Primary"
            icon="check-circle"
            onCancel={this.onCancel}
            onOk={this.onOk}
          >
            Body here is a notice reminder that the price of the shirt is nine.
          </TwoButtonModal>
        </div>
      </Example>
    );
  }
}

export default TwoButtonAlertModalMobile;
