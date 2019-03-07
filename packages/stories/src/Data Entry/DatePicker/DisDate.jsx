import React, { Component } from 'react';
import moment from 'moment';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

const { MonthPicker, RangePicker } = DatePicker;

function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

function disabledDate(current) {
  // Can not select days before today and today
  return current && current < moment().endOf('day');
}

function disabledDateTime() {
  return {
    disabledHours: () => range(0, 24).splice(4, 20),
    disabledMinutes: () => range(30, 60),
    disabledSeconds: () => [55, 56],
  };
}

function disabledRangeTime(_, type) {
  if (type === 'start') {
    return {
      disabledHours: () => range(0, 60).splice(4, 20),
      disabledMinutes: () => range(30, 60),
      disabledSeconds: () => [55, 56],
    };
  }
  return {
    disabledHours: () => range(0, 60).splice(20, 4),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56],
  };
}

class DisDate extends Component {
  render() { 
    return (
      <Example title="Disabled Date & Time">
        <Row className="mb20">
          <Col md={12} lg={6}>
            <DatePicker
              style={{width: '100%'}}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={disabledDate}
              disabledTime={disabledDateTime}
              showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
            />
          </Col>
        </Row>


        <Row className="mb20">
          <Col md={12} lg={6}>
            <MonthPicker style={{width: '100%'}} disabledDate={disabledDate} placeholder="Select month" />
          </Col>
        </Row>


        <Row>
          <Col md={12} lg={6}>
            <RangePicker
              style={{width: '100%'}}
              disabledDate={disabledDate}
              disabledTime={disabledRangeTime}
              showTime={{
                hideDisabledOptions: true,
                defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
              }}
              format="YYYY-MM-DD HH:mm:ss"
            />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default DisDate;
