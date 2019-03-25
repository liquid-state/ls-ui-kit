import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

class Interval extends Component {
  render() {
    return (
      <Example title="Interval Option">
        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} minuteStep={15} secondStep={10} />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Interval;
