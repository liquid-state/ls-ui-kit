import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';
import Example from '../../utils/Example';

class IconComponent extends Component {
  render() { 
    return (
      <Example title="With an Icon">
        <Breadcrumb>
          <Breadcrumb.Item href="">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="">
            <Icon type="user" />
            <span>Application List</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            Application
          </Breadcrumb.Item>
        </Breadcrumb>
      </Example>
    );
  }
}
 
export default IconComponent;
