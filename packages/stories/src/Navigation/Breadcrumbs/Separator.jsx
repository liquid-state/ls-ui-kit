import React, { Component } from 'react';
import { Breadcrumb } from 'antd';

class Separator extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Configuring the Separator</h3>

        <Breadcrumb separator=">">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application Center</Breadcrumb.Item>
          <Breadcrumb.Item href="">Application List</Breadcrumb.Item>
          <Breadcrumb.Item>An Application</Breadcrumb.Item>
        </Breadcrumb>
      </section>
    );
  }
}
 
export default Separator;