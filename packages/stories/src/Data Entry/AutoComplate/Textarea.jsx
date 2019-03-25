import React, { Component } from 'react';
import { AutoComplete, Input } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class Textarea extends Component {
  state = {
    dataSource: []
  };

  render() {
    const { TextArea } = Input;
    const { dataSource } = this.state;
    return (
      <Example title="Customize Input Component">

        <Row>
          <Col md={12} lg={6}>
            <AutoComplete
              dataSource={dataSource}
              style={{ width: '100%' }}
              onSearch={this.handleSearch}
            >
              <TextArea
                placeholder="input here"
                className="custom"
                style={{ height: '100%' }}
                onKeyPress={this.handleKeyPress}
              />
            </AutoComplete>
          </Col>
        </Row>
      </Example>
    );
  }

  handleSearch = (value) => this.setState({
      dataSource: !value ? [] : [
        value,
        value + value,
        value + value + value,
      ],
    });
}
 
export default Textarea;
