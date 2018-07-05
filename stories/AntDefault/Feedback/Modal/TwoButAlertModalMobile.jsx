import React, { Component } from 'react';
import { Button } from 'antd';
import { TwoButModal } from '../../../../src/components/Modals/TwoButModal';

class TwoButAlertModalMobile extends Component {
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
      <section className="example">
        <h3 className="ex-title">Two But Alert Modal Mobile</h3>
        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <TwoButModal
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
          </TwoButModal>
        </div>
      </section>
    );
  }
}

export default TwoButAlertModalMobile;
