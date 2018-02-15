import React, { Component } from 'react';
import { Progress } from 'antd';

class CircularProgressBar extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Circular progress bar</h3>

        <Progress className="mb20 mr20" type="circle" percent={75} />
        <Progress className="mb20 mr20" type="circle" percent={70} status="exception" />
        <Progress type="circle" percent={100} />
      </section>
    );
  }
}
 
export default CircularProgressBar;