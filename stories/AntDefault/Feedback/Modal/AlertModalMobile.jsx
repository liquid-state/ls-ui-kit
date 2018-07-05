import React, { Component } from 'react';
import { Button } from 'antd';
import { AlertModal } from '../../../../src/components/Modals';

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
      <section className="example">
        <h3 className="ex-title">Alert Modal Mobile</h3>
        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <AlertModal
            visible={this.state.visible}
            footer={null}
            title="Modal Alert"
            okText="Primary"
            icon="check-circle"
            onCancel={this.onCancel}
            onOk={this.onOk}
          >
            Body here is a notice reminder that the price of the shirt is nine.
          </AlertModal>
        </div>
      </section>
    );
  }
}

export default AlertModalMobile;
