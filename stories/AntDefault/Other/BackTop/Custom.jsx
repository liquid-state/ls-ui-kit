import React, { Component } from 'react';
import { BackTop } from 'antd';
import './style.less';

class Custom extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Custom Style</h3>

        <div>
          <BackTop>
            <div className="backtop-blue">UP</div>
          </BackTop>
          Scroll down to see the bottom-right
          <span className="strongtext"> blue </span>
          button.
        </div>
      </section>
    );
  }
}
 
export default Custom;