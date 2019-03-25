import React, { Component } from 'react';
import { Menu, Dropdown, Icon, message } from 'antd';
import Example from '../../utils/Example';

const menu = (
  <Menu onClick={onClick}>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd memu item</Menu.Item>
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const onClick = ({ key }) => {
  message.info(`Click on item ${key}`);
};

class ClickEvent extends Component {
  render() {
    return (
      <Example title="Click event">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me, Click menu item <Icon type="down" />
          </a>
        </Dropdown>
      </Example>
    );
  }
}
 
export default ClickEvent;
