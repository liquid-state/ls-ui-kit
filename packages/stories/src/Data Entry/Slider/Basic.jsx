import React, { Component } from 'react';
import { Slider, Switch } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  state = {
    disabled: false,
  };

  render() {
    const { disabled } = this.state;

    return (
      <Example title="Basic">
        <Slider defaultValue={30} disabled={disabled} />
        <Slider range defaultValue={[20, 50]} disabled={disabled} />
        Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
      </Example>
    );
  }

  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
}
 
export default Basic;
