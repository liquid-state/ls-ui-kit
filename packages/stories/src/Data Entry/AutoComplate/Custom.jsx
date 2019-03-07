import React, { Component } from 'react';
import { AutoComplete } from 'antd';
import { Row, Col } from 'antd';
import Example from '../../utils/Example';

class Custom extends Component {
  state = {
    result: []
  };

  render() {
    const Option = AutoComplete.Option;
    const { result } = this.state;
    const children = result.map((email) => {
      return <Option key={email}>{email}</Option>;
    });

    return (
      <Example title="Customized">

        <Row>
            <Col md={12} lg={6}>
            <AutoComplete
                style={{ width: '100%' }}
                onSearch={this.handleSearch}
                placeholder="input here"
              >
                {children}
              </AutoComplete>
            </Col>
          </Row>
      </Example>
    );
  }

  handleSearch = (value) => {
    let result;
    if (!value || value.indexOf('@') >= 0) {
      result = [];
    } else {
      result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
    }
    this.setState({ result });
  }
}
 
export default Custom;
