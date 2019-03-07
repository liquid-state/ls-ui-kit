import React, { Component } from 'react';
import { Breadcrumb } from 'antd';
import Example from '../../utils/Example';

class Separator extends Component {
  render() {
    return (
      <Example title="Configuring the Separator">
        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </Example>
    );
  }
}

export default Separator;
