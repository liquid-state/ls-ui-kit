import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

import Steps from '../../../../src/Navigation/Steps/Steps.jsx';
import Arrow from '../../../../src/Navigation/Steps/Arrow.jsx';
import Dot from '../../../../src/Navigation/Steps/Dot.jsx';

class StepsPage extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Steps</h1>

        <p className="text">
          Steps is a navigation bar that guides users through the steps of a task.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          When the task is complicated or has a certain sequence in the series of subtasks, we can decompose it into several steps to make things easier.
        </p>

        <h2 className="title">Examples:</h2>
        
        <section className="example">
          <h3 className="ex-title">Dot Style</h3>
          <Row>
            <Col span={24}>
              <Dot />
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title mb20">Steps with Arrows</h3>
          <Row>
            <Col span={24}>
              <Arrow />
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title mb20">Dark</h3>
          <div className="steps dark">
            <Row>
              <Col span={24}>
                <Arrow />
              </Col>
            </Row>
          </div>
        </section>

        <section className="example">
          <h3 className="ex-title">Steps</h3>
          <Row>
            <Col span={24}>
              <Steps />
            </Col>
          </Row>
        </section>

      </Fragment>
    );
  }
}
 
export default StepsPage;