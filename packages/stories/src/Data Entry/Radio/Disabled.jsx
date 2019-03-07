import React, { Component } from 'react';
import { Radio, Button } from 'antd';
import Example from '../../utils/Example';

class Disabled extends Component {
  state = {
    disabled: true,
  }

  render() {
    return (
      <Example title="Disabled">
        <Radio defaultChecked={false} disabled={this.state.disabled}>Disabled</Radio>
        <br />
        <Radio defaultChecked disabled={this.state.disabled}>Disabled</Radio>
        <div style={{ marginTop: 20 }}>
          <Button type="primary" onClick={this.toggleDisabled}>
            Toggle disabled
          </Button>
        </div>
      </Example>
    );
  }

  toggleDisabled = () => {
    this.setState({
      disabled: !this.state.disabled,
    });
  }
}
 
export default Disabled;
