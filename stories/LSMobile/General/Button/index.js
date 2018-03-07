import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

import { ButtonDefault, ButtonBox, ButtonRounded, ButtonRadius, ButtonShadow, ButtonGhost } from '../../../../src/General/Button';

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
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonDefault type="primary">Primary</ButtonDefault>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonDefault>Default</ButtonDefault>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonDefault type="dashed">Dashed</ButtonDefault>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonDefault type="primary" icon="search">Icon</ButtonDefault>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ButtonDefault type="danger">Danger</ButtonDefault>
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Box</h3>
          <Row gutter={24}>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonBox type="primary">Primary</ButtonBox>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonBox>Default</ButtonBox>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonBox type="dashed">Dashed</ButtonBox>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonBox type="primary" icon="search">Icon</ButtonBox>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ButtonBox type="danger">Danger</ButtonBox>
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Rounded</h3>
          <Row gutter={24}>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRounded type="primary">Primary</ButtonRounded>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRounded>Default</ButtonRounded>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRounded type="dashed">Dashed</ButtonRounded>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRounded type="primary" icon="search">Icon</ButtonRounded>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ButtonRounded type="danger">Danger</ButtonRounded>
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Radius</h3>
          <Row gutter={24}>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRadius type="primary">Primary</ButtonRadius>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRadius>Default</ButtonRadius>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRadius type="dashed">Dashed</ButtonRadius>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonRadius type="primary" icon="search">Icon</ButtonRadius>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ButtonRadius type="danger">Danger</ButtonRadius>
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Drop Shadow</h3>
          <Row gutter={24}>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonShadow type="primary">Primary</ButtonShadow>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonShadow>Default</ButtonShadow>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonShadow type="dashed">Dashed</ButtonShadow>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonShadow icon="search" type="primary">Icon</ButtonShadow>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ButtonShadow type="danger">Danger</ButtonShadow>
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Ghost</h3>
          <Row gutter={24} className="ghost-bg">
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonGhost type="primary" ghost>Primary</ButtonGhost>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonGhost ghost>Default</ButtonGhost>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonGhost type="dashed" ghost>Dashed</ButtonGhost>
            </Col>
            <Col className="mb20" lg={12} md={12} sm={24} xs={24}>
              <ButtonGhost icon="search" type="primary" ghost>Icon</ButtonGhost>
            </Col>
            <Col lg={12} md={12} sm={24} xs={24}>
              <ButtonGhost type="danger" ghost>Danger</ButtonGhost>
            </Col>
          </Row>
        </section>

      </Fragment>
    );
  }
}
 
export default Button;