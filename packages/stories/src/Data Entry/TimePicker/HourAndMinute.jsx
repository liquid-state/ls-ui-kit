import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

const format = 'HH:mm';

class HourAndMinute extends Component {
  render() { 
    return (
      <Example title="Hour and minute">

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} defaultValue={moment('12:08', format)} format={format} />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default HourAndMinute;
