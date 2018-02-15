import React, { Component } from 'react';
import { Affix, Button } from 'antd';

class Container extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Container to scroll.</h3>
        
        <div className="scrollable-container" ref={(node) => { this.container = node; }}>
          <div className="background">
            <Affix target={() => this.container}>
              <Button type="primary">
                Fixed at the top of container
              </Button>
            </Affix>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Container;