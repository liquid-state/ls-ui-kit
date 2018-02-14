import React, { Component } from 'react';
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Dialog extends Component {
  state = {
    visible: false
  };

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Controlling the close of the dialog</h3>

        <Popover
          content={<a onClick={this.hide}>Close</a>}
          title="Title"
          trigger="click"
          visible={this.state.visible}
          onVisibleChange={this.handleVisibleChange}
        >
          <Button type="primary">Click me</Button>
        </Popover>
      </section>
    );
  }

  hide = () => {
    this.setState({
      visible: false,
    });
  }

  handleVisibleChange = (visible) => {
    this.setState({ visible });
  }
}
 
export default Dialog;