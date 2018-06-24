import React, { Component } from 'react';
import { Modal, Button, Icon as AntIcon } from 'antd';

class TwoButAlertModalMobile extends Component {
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
        <h3 className="ex-title">Two But Alert Modal Mobile</h3>

        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <Modal
            visible={this.state.visible}
            width={300}
            footer={false}
            onCancel={this.handleCancel}
          >
            <div className="modal-container-twoalert-mobile">
              <div className="modal-icon-ontainer-twoalert-mobile">
                <AntIcon type="question-circle-o" />
                <h2 className="modal-title-twoalert-mobile">Two But Modal </h2>
              </div>
              <span className="modal-text-twoalert-mobile">Body here is a notice reminder that the price of the shirt is nine.</span>
              <div className="modal-btncontainer-twoalert-mobile">
                <Button className="modal-button-twoalert-mobile" onClick={this.handleOk}>Default</Button>
                <Button className="modal-button-twoalert-mobile" type="primary" onClick={this.handleOk}>PRIMARY</Button>
              </div>
            </div>
          </Modal>
        </div>
      </section>
    );
  }
}

export default TwoButAlertModalMobile;
