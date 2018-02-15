import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';

class ChooseTime extends Component {
  render() {
    const { RangePicker } = DatePicker;

    return (
      <section className="example">
        <h3 className="ex-title">Choose Time</h3>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <DatePicker
              style={{width: '100%'}}
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              placeholder="Select Time"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <RangePicker
              style={{width: '100%'}}
              showTime={{ format: 'HH:mm' }}
              format="YYYY-MM-DD HH:mm"
              placeholder={['Start Time', 'End Time']}
            />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default ChooseTime;