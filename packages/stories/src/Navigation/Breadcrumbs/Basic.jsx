import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import Example from '../../utils/Example';

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic Usage">
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application Center</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href="">Application List</a></Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Example>
    );
  }
}
 
export default Basic;
