import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const { Option, OptGroup } = Select;

class Group extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Option Group</h3>

        <Row>
          <Col sm={16} lg={7}>
            <Select
              defaultValue="lucy"
              style={{ width: '100%' }}
            >
              <OptGroup label="Manager">
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
              </OptGroup>
              <OptGroup label="Engineer">
                <Option value="Yiminghe">yiminghe</Option>
              </OptGroup>
            </Select>
          </Col>
        </Row>
      </section>
    );
  }
}
 
export default Group;