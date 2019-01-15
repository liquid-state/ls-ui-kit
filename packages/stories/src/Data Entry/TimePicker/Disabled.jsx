import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';

class Disabled extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Disabled</h3>

        <Row>
          <Col sm={16} lg={7}>
          <TimePicker style={{width: '100%'}} defaultValue={moment('12:08:23', 'HH:mm:ss')} disabled />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Disabled;