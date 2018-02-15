import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';

const Option = Select.Option;

const children = [];
for (let i = 10; i < 36; i++) {
  children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
}

class AutomaticTokenization extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Automatic tokenization</h3>

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
      </section>
    );
  }
}
 
export default AutomaticTokenization;