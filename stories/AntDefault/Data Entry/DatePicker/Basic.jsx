import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';

class Basic extends Component {
  render() {
    const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>


        <Row>
          <Col md={12} lg={6}>
            <DatePicker className="mb20" style={{width: '100%'}} />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <MonthPicker className="mb20" style={{width: '100%'}} placeholder="Select month" />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <RangePicker className="mb20" style={{width: '100%'}} />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <WeekPicker className="fw" placeholder="Select week" />
          </Col>
        </Row>

      </section>
    );
  }
}
 
export default Basic;