import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import Example from '../../utils/Example';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class AutomaticTokenization extends Component {
  render() { 
    return (
      <Example title="Automatic tokenization">

        <Row>
          <Col sm={16} lg={7}>
            <Select
              mode="tags"
              style={{ width: '100%' }}
              tokenSeparators={[',']}
            >
              {children}
            </Select>
          </Col>
        </Row>
      </Example>
    );
  }
}
 
export default AutomaticTokenization;
