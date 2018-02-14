import React, { Component } from 'react';
import { Affix, Button } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>
        <Affix className="mb20">
          <Button type="primary">Affix top</Button>
        </Affix>
        
        <Affix offsetBottom={0}>
          <Button type="primary">Affix bottom</Button>
        </Affix>
      </section>
    );
  }
}
 
export default Basic;