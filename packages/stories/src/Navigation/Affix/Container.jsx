import React, { Component } from 'react';
import { Affix, Button } from 'antd';
import Example from '../../utils/Example';

class Container extends Component {
  render() {
    return (
      <Example title="Container to scroll.">
        <div className="scrollable-container" ref={(node) => { this.container = node; }}>
          <div className="background">
            <Affix target={() => this.container}>
              <Button type="primary">
                Fixed at the top of container
              </Button>
            </Affix>
          </div>
        </div>
      </Example>
    );
  }
}

export default Container;
