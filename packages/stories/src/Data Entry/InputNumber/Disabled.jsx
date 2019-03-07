import React, { Component } from 'react';
import { InputNumber, Button } from 'antd';
import Example from '../../utils/Example';

class Disabled extends Component {
  state = {
    disabled: true,
  };

  render() { 
    return (
      <Example title="Disabled">

        <InputNumber min={1} max={10} disabled={this.state.disabled} defaultValue={3} />
        <div style={{ marginTop: 20 }}>
          <Button onClick={this.toggle} type="primary">Toggle disabled</Button>
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
