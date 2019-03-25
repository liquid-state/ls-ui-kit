import React, { Component } from 'react';
import { DatePicker } from 'antd';
import { Row, Col } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

class Preset extends Component {
  state = {}
  
  render() {
    const RangePicker = DatePicker.RangePicker;
    return (
      <Example title="Presetted Ranges">

        <Row className="mb20">
          <Col md={12} lg={6}>
            <RangePicker
              style={{width: '100%'}}
              ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={6}>
            <RangePicker
              style={{width: '100%'}}
              ranges={{ Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] }}
              showTime
              format="YYYY/MM/DD HH:mm:ss"
            />
          </Col>
        </Row>
        
      </Example>
    );
  }
}
 
export default Preset;
