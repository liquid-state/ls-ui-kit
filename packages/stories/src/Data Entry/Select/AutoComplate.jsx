import React, { Component } from 'react';
import { Select } from 'antd';
import Example from '../../utils/Example';

const Option = Select.Option;

class AutoComplate extends Component {
  state = {
    options: []
  };

  render() {
    return (
      <Example title="Automatic completion">
        <Select
          mode="combobox"
          style={{ width: 200 }}
          onChange={this.handleChange}
          filterOption={false}
          placeholder="Enter the account name"
        >
          {this.state.options}
        </Select>
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
 
export default AutoComplate;
