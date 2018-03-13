import React, { Component, Fragment } from 'react';
import { Row, Col, Checkbox } from 'antd';

import './style.less';

class CheckboxPage extends Component {

  state = {
    check: true
  };

  render() {

    return (
      <Fragment>
        <h1 className="title">Checkbox</h1>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Used for selecting multiple values from several options.</li>
          <li>
            If you use only one checkbox, it is the same as using
            Switch to toggle between two states. The difference is that
            Switch will trigger the state change directly, but Checkbox
            just marks the state as changed and this needs to
            be submitted.
          </li>
        </ul>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <Row>
            <Col span={24}>
              <Checkbox className="ls mb20">Default</Checkbox>
            </Col>

            <Col span={24}>
              <Checkbox className="ls mb20" onChange={this.handleChange} checked={this.state.check}>Selected</Checkbox>
            </Col>

            <Col span={24}>
              <Checkbox className="ls mb20" disabled>Disabled</Checkbox>
            </Col>

            <Col span={24}>
              <Checkbox className="ls" disabled checked>Disabled + Selected</Checkbox>
            </Col>
          </Row>
        </section>

      </Fragment>
    );
  }

  handleChange = () => this.setState({ check: !this.state.check });
}
 
export default CheckboxPage;