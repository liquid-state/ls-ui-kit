import React, { Component } from 'react';
import { Carousel } from 'antd';

class Basic extends Component {
  state = {}
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Carousel>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </section>
    );
  }
}
 
export default Basic;