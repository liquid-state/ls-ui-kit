import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

import Radio from '../../../../src/Data Entry/Radio';

class RadioPage extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Radio</h1>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Used to select a single state in multiple options.</li>
          <li>The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <h3 className="ex-title">Mobile</h3>
          <div className="radio-mobile">
            <Row>
              <Col span={12}>
                <Radio />
              </Col>
            </Row>
          </div>
        </section>

        <section className="example">
          <h3 className="ex-title">Desktop</h3>
          <div className="radio-desktop">
            <Row>
              <Col span={12}>
                <Radio />
              </Col>
            </Row>
          </div>
        </section>

        <section className="example">
          <h3 className="ex-title">Vertical</h3>
          <div className="radio-group">
            <Row>
              <Col span={12}>
                <Radio />
              </Col>
            </Row>
          </div>
        </section>

      </Fragment>
    );
  }
}
 
export default RadioPage;