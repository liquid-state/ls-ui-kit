import React, { Component } from 'react';
import { InputNumber } from 'antd';

class Sizes extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Sizes</h3>
        <InputNumber size="large" min={1} max={100000} defaultValue={3} />
        <br/><br/>
        <InputNumber min={1} max={100000} defaultValue={3} />
        <br/><br/>
        <InputNumber size="small" min={1} max={100000} defaultValue={3} />
      </section>
    );
  }
}
 
export default Sizes;