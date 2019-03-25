import React, { Component } from 'react';
import { Menu, Dropdown } from 'antd';
import Example from '../../utils/Example';

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
      <Example title="Context Menu">

        <Dropdown overlay={menu} trigger={['contextMenu']}>
          <span style={{ userSelect: 'none' }}>Right Click on Me</span>
        </Dropdown>
      </Example>
    );
  }
}
 
export default ContextMenu;
