import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import Example from '../../utils/Example';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3" disabled>3rd menu item（disabled）</Menu.Item>
  </Menu>
);

class OtherElements extends Component {
  render() {
    return (
      <Example title="Other elements">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </Example>
    );
  }
}
 
export default OtherElements;
