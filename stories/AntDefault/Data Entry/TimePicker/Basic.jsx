import React, { Component } from 'react';
import { TimePicker, Row, Col } from 'antd';
import moment from 'moment';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Row>
          <Col sm={16} lg={7}>
            <TimePicker style={{width: '100%'}} defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} />
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Basic;