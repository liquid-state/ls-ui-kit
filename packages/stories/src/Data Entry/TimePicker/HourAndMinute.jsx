import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';

const format = 'HH:mm';

class HourAndMinute extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Hour and minute</h3>

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} defaultValue={moment('12:08', format)} format={format} />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default HourAndMinute;