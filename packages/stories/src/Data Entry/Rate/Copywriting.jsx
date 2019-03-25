import React, { Component } from 'react';
import { Rate } from 'antd';
import Example from '../../utils/Example';

class Copywriting extends Component {
  state = {
    value: 3,
  }

  render() {
    const { value } = this.state; 
    return (
      <Example title="Show copywriting">

        <Rate onChange={this.handleChange} value={value} />
        {value && <span className="ant-rate-text">{value} stars</span>}
      </Example>
    );
  }

  handleChange = (value) => {
    this.setState({ value });
  }
}
 
export default Copywriting;
