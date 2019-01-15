import React, { Component } from 'react';
import { BackTop } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <div>
          <BackTop />
          Scroll down to see the bottom-right
          <strong style={{ color: 'rgba(64, 64, 64, 0.6)' }}> gray </strong>
          button.
        </div>
      </section>
    );
  }
}
 
export default Basic;