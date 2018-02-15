import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const Option = Select.Option;

class GetValue extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Get value of selected item</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: '100%' }}>
              <Option value="jack">Jack (100)</Option>
              <Option value="lucy">Lucy (101)</Option>
            </Select>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default GetValue;