import React, { Component } from 'react';
import { DatePicker } from 'antd';
import moment from 'moment';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class Format extends Component {
  render() {
    const { MonthPicker, RangePicker } = DatePicker;
    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';

    return (
      <Example title="Date Format">
        <Row className="mb20">
          <Col md={12} lg={6}>
            <DatePicker style={{width: '100%'}} defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
          </Col>
        </Row>

        <Row className="mb20">
          <Col md={12} lg={6}>
          <MonthPicker style={{width: '100%'}} defaultValue={moment('2015/01', monthFormat)} format={monthFormat} />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <RangePicker style={{width: '100%'}}
              defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
              format={dateFormat}
            />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Format;
