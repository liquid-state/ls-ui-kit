import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';
import Example from '../../utils/Example';

class Sizes extends Component {
  render() { 
    return (
      <Example title="Three Sizes">

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%', marginBottom: 20}} defaultValue={moment('12:08:23', 'HH:mm:ss')} size="large" />
          </Col>
        </Row>

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%', marginBottom: 20}} defaultValue={moment('12:08:23', 'HH:mm:ss')} />
          </Col>
        </Row>

        <Row>
          <Col sm={16} lg={7}>
          <TimePicker style={{width: '100%'}} defaultValue={moment('12:08:23', 'HH:mm:ss')} size="small" />
          </Col>
        </Row>

      </Example>
    );
  }
}
 
export default Sizes;
