import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

class Basic extends Component {
  render() {
    return (
      <Example title="Basic">
        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
          </Col>
        </Row>
      </Example>
    );
  }
}

export default Basic;
