import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import Example from '../../utils/Example';

const Option = Select.Option;

class GetValue extends Component {
  render() { 
    return (
      <Example title="Get value of selected item">

        <Row>
          <Col sm={16} lg={7}>
            <Select labelInValue defaultValue={{ key: 'lucy' }} style={{ width: '100%' }}>
              <Option value="jack">Jack (100)</Option>
              <Option value="lucy">Lucy (101)</Option>
            </Select>
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default GetValue;
