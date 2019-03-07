import React, { Component } from 'react';
import { Popover, Button, Row, Col } from 'antd';
import Example from '../../utils/Example';

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
      <Example title="Arrow pointing">

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
      </Example>
    );
  }
}
 
export default ArrowPointing;
