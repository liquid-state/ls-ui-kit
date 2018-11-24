import React, { Component } from 'react';
import { Popover, Button } from 'antd';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Basic extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>
      </section>
    );
  }
}
 
export default Basic;