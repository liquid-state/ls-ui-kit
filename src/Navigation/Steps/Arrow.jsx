import React, { Component } from 'react';
import { Steps, Button, Row, Col } from 'antd';

import './arrow.less';

const Step = Steps.Step;

class Arrow extends Component {

  state = {
    step: 0
  };

  steps = [
    <Step key={0} />,
    <Step key={1} />,
    <Step key={2} />,
    <Step key={3} />,
    <Step key={4} />,
    <Step key={5} />,
    <Step key={6} />,
    <Step key={7} />,
    <Step key={8} />,
    <Step key={9} />
  ];

  render() { 
    return (
      <Row className="mobile arrows">
        <Col span={1} className="button">
          <Button icon="caret-left" className="prev" onClick={this.prev} />
        </Col>

        <Col span={22} className="step">
          <Steps progressDot current={this.state.step}>
            {this.steps}
          </Steps>
        </Col>

        <Col span={1} className="button">
          <Button icon="caret-right" className="next" onClick={this.next} />
        </Col>
      </Row>
    );
  }

  next = () => {
    let {step} = this.state;
    if(step === this.steps.length - 1) return;

    this.setState({ step: step + 1 });
  };

  prev = () => {
    let {step} = this.state;
    if(step === 0) return;

    this.setState({ step: step - 1 });
  };
}
 
export default Arrow;