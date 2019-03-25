import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import Example from '../../utils/Example';

const { Option, OptGroup } = Select;

class Group extends Component {
  render() {
    return (
      <Example title="Option Group">

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
      </Example>
    );
  }
}
 
export default Group;
