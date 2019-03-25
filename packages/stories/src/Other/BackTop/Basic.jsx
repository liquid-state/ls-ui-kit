import React, { Component } from 'react';
import { BackTop } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() {
    return (
      <Example title="Basic">
        <div>
          <BackTop />
          Scroll down to see the bottom-right
          <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          button.
        </div>
      </Example>
    );
  }
}
 
export default Basic;
