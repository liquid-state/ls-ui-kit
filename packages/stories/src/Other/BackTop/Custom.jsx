import React, { Component } from 'react';
import { BackTop } from 'antd';
import './style.less';
import Example from '../../utils/Example';

class Custom extends Component {
  render() {
    return (
      <Example title="Custom Style">
        <div>
          <BackTop>
            <div className="backtop-blue">UP</div>
          </BackTop>
          Scroll down to see the bottom-right
          <span className="strongtext"> blue </span>
          button.
        </div>
      </Example>
    );
  }
}

export default Custom;
