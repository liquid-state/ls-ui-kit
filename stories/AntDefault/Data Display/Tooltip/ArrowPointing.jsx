import React, { Component } from 'react';
import { Tooltip, Button, Row, Col } from 'antd';

class ArrowPointing extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Arrow pointing at the center</h3>

        <Row getter={32}>
          <Col className="mb20" sm={16} lg={5}>
            <Tooltip placement="topLeft" title="Prompt Text">
              <Button>Align edge / 边缘对齐</Button>
            </Tooltip>
          </Col>

          <Col sm={16} lg={5}>
            <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
              <Button>Arrow points to center / 箭头指向中心</Button>
            </Tooltip>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default ArrowPointing;