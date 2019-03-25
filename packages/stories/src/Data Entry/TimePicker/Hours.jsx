import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

class Hours extends Component {
  render() {
    return (
      <Example title="12 hours">
        <Row className="mb20">
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} use12Hours />
          </Col>
        </Row>

        <Row className="mb20">
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} use12Hours format="h:mm:ss A" />
          </Col>
        </Row>

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} use12Hours format="h:mm a" />
          </Col>
        </Row>

      </Example>
    );
  }
}
 
export default Hours;
