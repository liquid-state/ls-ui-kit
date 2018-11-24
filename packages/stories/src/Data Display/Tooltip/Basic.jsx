import React, { Component } from 'react';
import { Tooltip } from 'antd';

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Tooltip title="prompt text">
          <span>Tooltip will show when mouse enter.</span>
        </Tooltip>
      </section>
    );
  }
}
 
export default Basic;