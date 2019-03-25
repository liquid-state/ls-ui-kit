import React, { Component } from 'react';
import { Switch, Button } from 'antd';
import Example from '../../utils/Example';

class Disabled extends Component {
  state = {
    disabled: true,
  }

  render() {
    return (
      <Example title="Disabled">
        <div>
          <Switch className="mr20" disabled={this.state.disabled} defaultChecked />
          <Switch checkedChildren="On" unCheckedChildren="Off" disabled={this.state.disabled} defaultChecked />
          <br />
          <br/>
          <Button type="primary" onClick={this.toggle}>Toggle disabled</Button>
        </div>
      </Example>
    );
  }

  toggle = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}

export default Disabled;
