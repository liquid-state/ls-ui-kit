import React, { Component } from 'react';
import { Rate } from 'antd';

import './style.less';

class RateComponent extends Component {
  state = {
    value: 3,
  };

  render() {
    const { value } = this.state;

    return (
      <div>
        <Rate className="ls-ui-kit" onChange={this.handleChange} value={value} />
        <span className="ant-rate-text">{value} stars</span>
      </div>
    );
  }

  handleChange = value => this.setState({ value });
}
 
export default RateComponent;