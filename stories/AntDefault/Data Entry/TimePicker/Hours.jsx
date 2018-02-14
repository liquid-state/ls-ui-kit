import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';

class Hours extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">12 hours</h3>

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

      </section>
    );
  }
}
 
export default Hours;