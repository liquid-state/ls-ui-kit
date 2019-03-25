import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import Example from '../../utils/Example';
import moment from 'moment';

class Disabled extends Component {
  render() {
    return (
      <Example title="Disabled">
        <Row>
          <Col sm={16} lg={7}>
          <TimePicker style={{width: '100%'}} defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default Disabled;
