import React, { Component } from 'react';
import { Button } from 'antd';
import AlertModal from '../../../../src/components/AlertModal';

class AlertModalMobile extends Component {
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

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Alert Modal Mobile</h3>
        <div >
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <AlertModal
            visible={this.state.visible}
            footer={null}
            title="Modal Alert"
            buttonTitle="Primary"
            icon="question-circle-o"
            onClose={this.onClose}
            handleOk={this.handleOk}
          >
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
          </AlertModal>
        </div>
      </section>
    );
  }
}

export default AlertModalMobile;
