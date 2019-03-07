import React, { Component } from 'react';
import { Pagination } from 'antd';
import Example from '../../utils/Example';

class Simple extends Component {
  render() {
    return (
      <Example title="Simple mode">
        <Pagination simple defaultCurrent={2} total={50} />
      </Example>
    );
  }
}

export default Simple;
