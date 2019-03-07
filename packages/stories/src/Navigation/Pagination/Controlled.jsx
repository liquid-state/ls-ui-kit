import React, { Component } from 'react';
import { Pagination } from 'antd';
import Example from '../../utils/Example';

class Controlled extends Component {
  state = {
    current: 3
  };

  render() { 
    return (
      <Example title="Controlled pagination">
        <Pagination current={this.state.current} onChange={this.onChange} total={50} />
      </Example>
    );
  }

  onChange = page => this.setState({ current: page });
}
 
export default Controlled;
