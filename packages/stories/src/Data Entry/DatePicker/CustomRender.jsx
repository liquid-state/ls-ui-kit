import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class CustomRender extends Component {
  render() {
    const { RangePicker } = DatePicker;

    return (
      <Example title="Customized Date Rendering">

        <Row className="mb20">
          <Col md={12} lg={6}>
            <DatePicker
              style={{width: '100%'}}
              dateRender={(current) => {
                const style = {};
                if (current.date() === 1) {
                  style.border = '1px solid #1890ff';
                  style.borderRadius = '50%';
                }
                return (
                  <div className="ant-calendar-date" style={style}>
                    {current.date()}
                  </div>
                );
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <RangePicker
              style={{width: '100%'}}
              dateRender={(current) => {
                const style = {};
                if (current.date() === 1) {
                  style.border = '1px solid #1890ff';
                  style.borderRadius = '50%';
                }
                return (
                  <div className="ant-calendar-date" style={style}>
                    {current.date()}
                  </div>
                );
              }}
            />
          </Col>
        </Row>
        </Example>
    );
  }
}
 
export default CustomRender;
