import React, { Component } from 'react';
import { Popover, Button, Row, Col } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Ways extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Three ways to trigger</h3>

        <Row gutter={32}>
          <Col className="mb20" sm={16} lg={3}>
            <Popover content={content} title="Title" trigger="hover">
              <Button className="fw">Hover me</Button>
            </Popover>
          </Col>
          
          <Col className="mb20" sm={16} lg={3}>
            <Popover content={content} title="Title" trigger="focus">
              <Button className="fw">Focus me</Button>
            </Popover>
          </Col>

          <Col sm={16} lg={3}>
            <Popover content={content} title="Title" trigger="click">
              <Button className="fw">Click me</Button>
            </Popover>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Ways;