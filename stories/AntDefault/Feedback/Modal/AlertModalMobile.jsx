import React, { Component } from 'react';
import { Modal, Button, Icon as AntIcon } from 'antd';

class AlertModalMobile extends Component {
  state = { visible: false };

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
        <h3 className="ex-title">Alert Modal Mobile</h3>

        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <Modal
            visible={this.state.visible}
            width={300}
            footer={false}
            onCancel={this.handleCancel}
          >
            <div className="modal-container-alert-mobile">
              <div className="modal-icon-ontainer-alert-mobile">
                <AntIcon type="question-circle-o" />
                <h2 className="modal-title-alert-mobile">Alert Modal Mobile</h2>
              </div>
              <span className="modal-text-alert-mobile">Body here is a notice reminder that the price of the shirt is nine.</span>
              <Button className="modal-button-alert-mobile" type="primary" onClick={this.handleOk}>PRIMARY</Button>
            </div>
          </Modal>
        </div>
      </section>
    );
  }
}

export default AlertModalMobile;
