import React, { Component } from 'react';
import { Slider, Switch } from 'antd';

class Basic extends Component {
  state = {
    disabled: false,
  };

  render() {
    const { disabled } = this.state;

    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <div>
          <Slider defaultValue={30} disabled={disabled} className="mobile mb20" />
          <Slider range defaultValue={[20, 50]} disabled={disabled} className="mobile"  />
          Disabled: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
        </div>
      </section>
    );
  }

  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
}
 
export default Basic;