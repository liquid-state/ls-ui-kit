import React, { Component } from 'react';
import { Button } from 'antd';
import { PopupModal } from '../../../../src/components/Modals';

class PopupModalMobile extends Component {
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
        <h3 className="ex-title">Popup Modal Mobile</h3>
        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <PopupModal
            visible={this.state.visible}
            footer={null}
            title="Popup Modal"
            okText="Primary"
            onCancel={this.onCancel}
            onOk={this.onOk}
          >
            Body here is a notice reminder that the price of the shirt is nine.
          </PopupModal>
        </div>
      </section>
    );
  }
}

export default PopupModalMobile;
