import React, { Component } from 'react';
import { Popconfirm, Switch, message } from 'antd';
import Example from '../../utils/Example';

class Trigger extends Component {
  state = {
    visible: false,
    condition: true
  };

  render() {
    return (
      <Example title="Conditional trigger">

        <div>
          <Popconfirm
            title="Are you sure delete this task?"
            visible={this.state.visible}
            onVisibleChange={this.handleVisibleChange}
            onConfirm={this.confirm}
            onCancel={this.cancel}
            okText="Yes"
            cancelText="No"
          >
            <a href="#">Delete a task</a>
          </Popconfirm>
          <br />
          <br />
          Whether directly execute：<Switch defaultChecked onChange={this.changeCondition} />
        </div>
      </Example>
    );
  }

  changeCondition = (value) => {
    this.setState({ condition: value });
  }

  confirm = () => {
    this.setState({ visible: false });
    message.success('Next step.');
  }

  cancel = () => {
    this.setState({ visible: false });
    message.error('Click on cancel.');
  }

  handleVisibleChange = (visible) => {
    if (!visible) {
      this.setState({ visible });
      return;
    }
    if (this.state.condition) {
      this.confirm();
    } else {
      this.setState({ visible });
    }
  }
}
 
export default Trigger;
