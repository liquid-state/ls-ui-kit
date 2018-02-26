import React, { Component } from 'react';
import { Steps, Button, Row, Col } from 'antd';

import './steps.less';

const Step = Steps.Step;

const steps = [
  {
    title: 'Title 1'
  },
  {
    title: 'Title 2'
  },
  {
    title: 'Title 3'
  }
];

class StepsComponent extends Component {
  state = {
    current: 0
  };

  render() {
    const { current } = this.state;

    return (
      <div className="steps mobile">
        <Steps current={current}>
          {steps.map(item => <Step key={item.title} title={item.title} />)}
        </Steps>
        <div className="steps-action">
          <Row gutter={24}>
            <Col lg={4} md={4} sm={12} xs={24}>
              {
                this.state.current < steps.length - 1
                &&
                <Button type="primary" onClick={() => this.next()}>Next</Button>
              }
              {
                this.state.current === steps.length - 1
                &&
                <Button type="primary">Done</Button>
              }
            </Col>

            <Col lg={4} md={4} sm={12} xs={24}>
              {
                this.state.current > 0
                &&
                <Button onClick={() => this.prev()}>
                  Previous
                </Button>
              }
            </Col>
          </Row>
        </div>
      </div>
    );
  }


  next() {
    const current = this.state.current + 1;
    this.setState({ current });
  }

  prev() {
    const current = this.state.current - 1;
    this.setState({ current });
  }
}
 
export default StepsComponent;