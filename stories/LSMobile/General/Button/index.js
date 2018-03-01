import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

import { Default, Box, Rounded, Radius, Shadow, Ghost } from '../../../../src/General/Button';

class Button extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Button</h1>

        <p className="text">
          To trigger an operation.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          A button means an operation (or a series of operations). Clicking a button will trigger corresponding business logic.
        </p>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <h3 className="ex-title">Default</h3>

          <Row gutter={24}>
            {
              Default.map(
                (Item, i) =>
                  <Col key={i} className="mb20" lg={12} md={12} sm={24} xs={24}>
                    <Item />
                  </Col>
              )
            }
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Box</h3>
          <Row gutter={24}>
            {
              Box.map(
                (Item, i) =>
                  <Col key={i} className="mb20" lg={12} md={12} sm={24} xs={24}>
                    <Item />
                  </Col>
              )
            }
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Rounded</h3>
          <Row gutter={24}>
            {
              Rounded.map(
                (Item, i) =>
                  <Col key={i} className="mb20" lg={12} md={12} sm={24} xs={24}>
                    <Item />
                  </Col>
              )
            }
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Radius</h3>
          <Row gutter={24}>
            {
              Radius.map(
                (Item, i) =>
                  <Col key={i} className="mb20" lg={12} md={12} sm={24} xs={24}>
                    <Item />
                  </Col>
              )
            }
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Drop Shadow</h3>
          <Row gutter={24}>
            {
              Shadow.map(
                (Item, i) =>
                  <Col key={i} className="mb20" lg={12} md={12} sm={24} xs={24}>
                    <Item />
                  </Col>
              )
            }
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Ghost</h3>
          <Row gutter={24} className="ghost-bg">
            {
              Ghost.map(
                (Item, i) =>
                  <Col key={i} className="mb20" lg={12} md={12} sm={24} xs={24}>
                    <Item />
                  </Col>
              )
            }
          </Row>
        </section>

      </Fragment>
    );
  }
}
 
export default Button;