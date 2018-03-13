import React, { Component } from 'react';
import { Steps, Button, Icon, Row, Col } from 'antd';

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
      <Row className={
          this.props.noText ? 
          'steps ls' : 'steps ls text'
      }>
        <Col className="button" span={1}>
          <Icon type="left" onClick={this.prev} />
        </Col>
        <Col span={22}>
          <Steps current={current} size={this.props.size}>
            {
              steps.map(
                item =>
                  <Step
                    key={item.title}
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
    let { current } = this.state;
    if ( current === steps.length - 1 ) return;
    current += 1;
    this.setState( { current } );
  }

  prev = () => {
    let { current } = this.state;
    if ( current === 0 ) return;
    current = current - 1;
    this.setState({ current });
  }
}
 
export default StepsComponent;