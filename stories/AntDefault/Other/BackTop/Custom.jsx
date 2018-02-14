import React, { Component } from 'react';
import { BackTop } from 'antd';

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
          <strong style={{ color: '#1088e9' }}> blue </strong>
          button.
        </div>
      </section>
    );
  }
}
 
export default Custom;