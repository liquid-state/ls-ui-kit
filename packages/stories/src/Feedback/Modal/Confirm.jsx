import React, { Component } from 'react';
import { Modal, Button } from 'antd';
import Example from '../../utils/Example';

const confirm = Modal.confirm;

class Confirm extends Component {
  state = { visible: false };

  render() { 
    return (
      <Example title="Confirmation modal dialog">

        <div>
          <Button className="mr20 mb20" onClick={this.showConfirm}>
            Confirm
          </Button>
          <Button className="mr20 mb20" onClick={this.showDeleteConfirm} type="dashed">
            Delete
          </Button>
          <Button onClick={this.showConfirm}>
            Confirm
          </Button>
        </div>
      </Example>
    );
  }

  showConfirm() {
    confirm({
      title: 'Do you Want to delete these items?',
      content: 'Some descriptions',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  showDeleteConfirm() {
    confirm({
      title: 'Are you sure delete this task?',
      content: 'Some descriptions',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  showConfirm() {
    confirm({
      title: 'Do you want to delete these items?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {},
    });
  }
}
 
export default Confirm;
