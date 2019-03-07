import React, { Component } from 'react';
import { Pagination } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() {
    return (
      <Example title="Basic pagination">
        <div className="mb20">
          <Pagination defaultCurrent={1} total={50} />
        </div>
        <Pagination defaultCurrent={6} total={500} />
      </Example>
    );
  }
}

export default Basic;
