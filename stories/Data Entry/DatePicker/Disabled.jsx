import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import moment from 'moment';

class Disabled extends Component {
  render() {
    const { MonthPicker, RangePicker } = DatePicker;
    const dateFormat = 'YYYY-MM-DD';

    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <DatePicker style={{width: '100%'}} defaultValue={moment('2015-06-06', dateFormat)} disabled />
          </Col>
        </Row>

        <Row className="mb20">
          <Col md={12} lg={6}>
            <MonthPicker style={{width: '100%'}} defaultValue={moment('2015-06', 'YYYY-MM')} disabled />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <RangePicker
              style={{width: '100%'}}
              defaultValue={[moment('2015-06-06', dateFormat), moment('2015-06-06', dateFormat)]}
              disabled
            />
          </Col>
        </Row>
        
      </section>
    );
  }
}
 
export default Disabled;