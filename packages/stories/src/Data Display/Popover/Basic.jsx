import React, { Component } from 'react';
import { Popover, Button } from 'antd';
import Example from '../../utils/Example';

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

class Basic extends Component {
  render() {
    return (
      <Example title="Basic">

        <Popover content={content} title="Title">
          <Button type="primary">Hover me</Button>
        </Popover>
      </Example>
    );
  }
}
 
export default Basic;
