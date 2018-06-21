import React, { Component } from 'react';
import { Modal, Button } from 'antd';

class PopupModalMobile extends Component {
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
        <h3 className="ex-title">Popup Modal Mobile</h3>

        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <Modal
            visible={this.state.visible}
            width={300}
            footer={false}
            onCancel={this.handleCancel}
          >
            <div className="modal-container-popup-mobile">
              <h2 className="modal-title-popup-mobile">Popup Modal Mobile</h2>
              <span className="modal-text-popup-mobile">Body here is a notice reminder that the price of the shirt is nine.</span>
              <Button className="modal-button-popup-mobile" type="primary" onClick={this.handleOk}>PRIMARY</Button>
            </div>
          </Modal>
        </div>
      </section>
    );
  }
}

export default PopupModalMobile;
