import React, { Component } from 'react';
import { Select, Row, Col } from 'antd';
import Example from '../../utils/Example';

const Option = Select.Option;

class AutomaticCompletion extends Component {
  state = {
    options: []
  };

  render() { 
    return (
      <Example title="Automatic completion">

        <Row>
          <Col sm={16} lg={7}>
            <Select
              mode="combobox"
              style={{ width: '100%' }}
              onChange={this.handleChange}
              filterOption={false}
              placeholder="Enter the account name"
            >
              {this.state.options}
            </Select>
          </Col>
        </Row>
      </Example>
    );
  }

  handleChange = (value) => {
    let options;
    if (!value || value.indexOf('@') >= 0) {
      options = [];
    } else {
      options = ['gmail.com', '163.com', 'qq.com'].map((domain) => {
        const email = `${value}@${domain}`;
        return <Option key={email}>{email}</Option>;
      });
    }
    this.setState({ options });
  }
}
 
export default AutomaticCompletion;
