import React, { Component, Fragment } from 'react';
import { Row, Col, Card as CardDefault } from 'antd';

import './style.less';

import Card from '../../../../src/Data Display/Card/Card';

const { Meta } = CardDefault;

class CardPage extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Card</h1>

        <p className="text">
          Simple rectangular container.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          A card can be used to display content related to a single subject. The content can consist of multiple elements of varying types and sizes.
        </p>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <h3 className="ex-title">Icons</h3>
          <Row gutter={24} className="ls-ui-kit-icons-cards">
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello World" className="elem-1" icon="smile-o" >
                <Meta title="Hello world" />
              </Card>
            </Col>
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello World" className="elem-2" icon="smile-o" >
                <Meta title="Hello world" />
              </Card>
            </Col>
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello World" className="elem-3" icon="smile-o" >
                <Meta title="Hello world" />
              </Card>
            </Col>
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello World" className="elem-4" icon="smile-o" >
                <Meta title="Hello world" />
              </Card>
            </Col>
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello World" className="elem-5" icon="smile-o" >
                <Meta title="Hello world" />
              </Card>
            </Col>
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello World" className="elem-6" icon="smile-o" >
                <Meta title="Hello world" />
              </Card>
            </Col>
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello World" className="elem-7" icon="smile-o" >
                <Meta title="Hello world" />
              </Card>
            </Col>
            <Col className="mb20" lg={4} md={4} sm={8} xs={12}>
              <Card className="elem-8" icon="smile-o" />
            </Col>
          </Row>
        </section>

        <section className="example">
          <h3 className="ex-title">Images</h3>
          <Row gutter={24} className="ls-ui-kit-image-cards">
            <Col lg={4} md={4} sm={8} xs={12}>
              <Card image="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" className="mb20">
                <Meta title="Hello world" />
              </Card>
            </Col>

            <Col lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello world" image="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" className="eg2 mb20" >
                <Meta title="Hello world" />
              </Card>
            </Col>

            <Col lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello world" image="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" className="eg3 mb20" >
                <Meta title="Hello world" />
              </Card>
            </Col>

            <Col lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello world" image="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" className="eg4 mb20" >
                <Meta title="Hello world" />
              </Card>
            </Col>

            <Col lg={4} md={4} sm={8} xs={12}>
              <Card text="Hello world" image="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" className="eg5 mb20" >
                <Meta title="Hello world" />
              </Card>
            </Col>

            <Col lg={4} md={4} sm={8} xs={12}>
              <Card image="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" className="eg6" />
            </Col>
          </Row>
        </section>

      </Fragment>
    );
  }
}
 
export default CardPage;