import React, { Component } from 'react';
import { Select } from 'antd';
import Example from '../../utils/Example';

const Option = Select.Option;

class Search extends Component {
  render() {
    return (
      <Example title="Select with search field">

        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="Select a person"
          optionFilterProp="children"
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </Example>
    );
  }
}
 
export default Search;
