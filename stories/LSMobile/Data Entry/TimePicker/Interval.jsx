import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';

class Interval extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Interval Option</h3>

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} minuteStep={15} secondStep={10} />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Interval;