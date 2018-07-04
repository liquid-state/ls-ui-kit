import React, { Component } from 'react';
import { Button } from 'antd';
import TwoButModal from '../../../../src/components/TwoButModal';

class TwoButAlertModalMobile extends Component {
  state = { visible: false };

  onClose = () => {
    this.setState({
      visible: false,
    });
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = () => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = () => {
    this.setState({
      visible: false,
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
            buttonTitleDefault="Default"
            buttonTitle="Primary"
            icon="check-circle"
            onClose={this.onClose}
            handleOk={this.handleOk}
            handleCancel={this.handleCancel}
          >
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
          </TwoButModal>
        </div>
      </section>
    );
  }
}

export default TwoButAlertModalMobile;
