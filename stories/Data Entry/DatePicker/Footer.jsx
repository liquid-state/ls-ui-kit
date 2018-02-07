import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';

class Footer extends Component {
  state = {}

  render() {
    const { RangePicker, MonthPicker } = DatePicker;
    return (
      <section className="example">
        <h3 className="ex-title">Extra Footer</h3>

        <Row gutter={24}>
          <Col md={12} lg={6}>
            <DatePicker className="fw mb20" renderExtraFooter={() => 'extra footer'} />
          </Col>

          <Col md={12} lg={6}>
            <DatePicker className="fw mb20" renderExtraFooter={() => 'extra footer'} showTime />
          </Col>
        </Row>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <RangePicker className="fw" renderExtraFooter={() => 'extra footer'} />
          </Col>
        </Row>

        <Row gutter={24}>
          <Col md={12} lg={6}>
            <RangePicker className="fw mb20" renderExtraFooter={() => 'extra footer'} showTime />
          </Col>

          <Col md={12} lg={6}>
          <MonthPicker className="fw mb20" renderExtraFooter={() => 'extra footer'} placeholder="Select month" />
          </Col>
        </Row>
        
      </section>
    );
  }
}
 
export default Footer;