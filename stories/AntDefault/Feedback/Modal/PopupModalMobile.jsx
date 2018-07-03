import React, { Component } from 'react';
import { Button } from 'antd';
import PopupModal from '../../../../src/components/PopupModal';

class PopupModalMobile extends Component {
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
        <h3 className="ex-title">Popup Modal Mobile</h3>

        <div>
          <Button type="primary" onClick={this.showModal}>Show Modal</Button>
          <PopupModal
            visible={this.state.visible}
            footer={false}
            title="Popup Modal"
            buttonTitle="Primary"
            icon="question-circle-o"
            onClose={this.onClose}
            handleOk={this.handleOk}
          >
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
            Here the body of the modal window will be transmitted as a child.
          </PopupModal>
        </div>
      </section>
    );
  }
}

export default PopupModalMobile;
