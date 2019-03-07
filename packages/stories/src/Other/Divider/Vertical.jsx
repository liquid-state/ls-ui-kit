import Example from '../../utils/Example'import React, { Component } from 'react';;

import { Divider } from 'antd';

class Vertical extends Component {
  render() {
    return (
      <Example title="Vertical">
        <div>
          Text
          <Divider type="vertical" />
          <a href="#">Link</a>
          <Divider type="vertical" />
          <a href="#">Link</a>
        </div>
      </Example>
    );
  }
}

export default Vertical;
