import React, { Component } from 'react';
import { Carousel } from 'antd';
import Example from '../../utils/Example';

class Vertical extends Component {
  render() { 
    return (
      <Example title="Vertical">

        <Carousel vertical>
          <div><h3>1</h3></div>
          <div><h3>2</h3></div>
          <div><h3>3</h3></div>
          <div><h3>4</h3></div>
        </Carousel>
      </Example>
    );
  }
}
 
export default Vertical;
