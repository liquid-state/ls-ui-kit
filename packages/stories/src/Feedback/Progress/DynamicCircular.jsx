import React, { Component } from 'react';
import { Progress, Button } from 'antd';
import Example from '../../utils/Example';

const ButtonGroup = Button.Group;

class DynamicCircular extends Component {
  state = {
    percent: 0,
  };

  render() {
    return (
      <Example title="Dynamic circular progress bar">
        <Progress type="circle" percent={this.state.percent} />
        <ButtonGroup className="ml20">
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </Example>
    );
  }

  increase = () => {
    let percent = this.state.percent + 10;
    if (percent > 100) {
      percent = 100;
    }
    this.setState({ percent });
  }

  decline = () => {
    let percent = this.state.percent - 10;
    if (percent < 0) {
      percent = 0;
    }
    this.setState({ percent });
  }
}

export default DynamicCircular;
