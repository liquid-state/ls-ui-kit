import React, { Component } from 'react';
import { Popover, Button, Row, Col } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const text = <span>Title</span>;

class ArrowPointing extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Arrow pointing</h3>

        <Row getter={32}>
          <Col className="mb20" sm={16} lg={5}>
            <Popover placement="topLeft" title={text} content={content}>
              <Button>Align edge</Button>
            </Popover>
          </Col>

          <Col sm={16} lg={5}>
            <Popover placement="topLeft" title={text} content={content} arrowPointAtCenter>
              <Button>Arrow points to center</Button>
            </Popover>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default ArrowPointing;
