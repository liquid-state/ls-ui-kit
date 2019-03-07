import React, { Component } from 'react';
import { Carousel } from 'antd';
import Example from '../../utils/Example';

class Auto extends Component {
  state = {}
  render() { 
    return (
      <Example title="Scroll automatically">
        <Carousel autoplay>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </Example>
    );
  }
}
 
export default Auto;
