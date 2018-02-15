import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class ContextMenu extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Context Menu</h3>

        <Dropdown overlay={menu} trigger={['contextMenu']}>
          <span style={{ userSelect: 'none' }}>Right Click on Me</span>
        </Dropdown>
      </section>
    );
  }
}
 
export default ContextMenu;