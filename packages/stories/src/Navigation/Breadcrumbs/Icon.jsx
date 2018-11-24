import React, { Component } from 'react';
import { Breadcrumb, Icon } from 'antd';

class IconComponent extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">With an Icon</h3>
        
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
      </section>
    );
  }
}
 
export default IconComponent;