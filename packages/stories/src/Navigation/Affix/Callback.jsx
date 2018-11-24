import React, { Component } from 'react';
import { Affix, Button } from 'antd';

class Callback extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Callback</h3>
        
        <Affix offsetTop={120}>
          <Button>120px to affix top</Button>
        </Affix>
      </section>
    );
  }
}
 
export default Callback;