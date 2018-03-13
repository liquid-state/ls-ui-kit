import React, { Component } from 'react';
import { Steps, Button, Icon, Row, Col } from 'antd';

import './steps.less';

const Step = Steps.Step;

const steps = [
  {
    title: 'Title 1',
    status: 'finish',
    icon: 'notification'
  },
  {
    title: 'Title 2',
    status: 'wait',
    icon: 'loading'
  },
  {
    title: 'Title 3',
    status: 'wait',
    icon: 'star-o'
  }
];

class IconSteps extends Component {
  state = {
    steps: [
      {
        title: 'Title 1',
        status: 'process',
        icon: 'notification'
      },
      {
        title: 'Title 2',
        status: 'wait',
        icon: 'loading'
      },
      {
        title: 'Title 3',
        status: 'wait',
        icon: 'star-o'
      }
    ]
  };

  render() {
    const { current } = this.state;
    return (
      <Row className={
          this.props.noText ? 
          'steps mobile steps-icon' : 'steps mobile steps-icon text'
      }>
        <Col className="button" span={1}>
          <Icon type="left" onClick={this.prev} />
        </Col>
        <Col span={22}>
          <Steps current={current} size={this.props.size}>
            {
              this.state.steps.map(
                item =>
                  <Step
                    key={item.title}
                    status={item.status}
                    icon={<Icon type={item.icon} />}
                    title={this.props.noText ? null : item.title}
                  />
              )
            }
          </Steps>
        </Col>
        <Col className="button" span={1}>
          <Icon type="right" onClick={this.next} />
        </Col>
      </Row>
    );
  }

  next = () => {
    const { steps } = this.state;
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      if (step.status === 'process') {
        if (steps[steps.length - 1] === step) break;
        step.status = 'finish';
        steps[++i].status = 'process';
        this.setState({ steps });
        break;
      }
    }
  };

  prev = () => {
    const {steps} = this.state;
    for (let i = steps.length - 1; i >= 0; i--) {
      const step = steps[i];

      if (step.status === 'process' && i != 0) {
        step.status = 'wait';
        steps[i - 1].status = 'process'
        this.setState({ steps });
        break;
      }
    }
  };
}
 
export default IconSteps;