import React, { Component } from 'react';
import { Tooltip, Button, Row, Col } from 'antd';
import Example from '../../utils/Example';

class ArrowPointing extends Component {
  render() {
    return (
      <Example title="Arrow pointing at the center">

        <Row getter={32}>
          <Col className="mb20" sm={16} lg={5}>
            <Tooltip placement="topLeft" title="Prompt Text">
              <Button>Align edge</Button>
            </Tooltip>
          </Col>

          <Col sm={16} lg={5}>
            <Tooltip placement="topLeft" title="Prompt Text" arrowPointAtCenter>
              <Button>Arrow points to center</Button>
            </Tooltip>
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default ArrowPointing;
