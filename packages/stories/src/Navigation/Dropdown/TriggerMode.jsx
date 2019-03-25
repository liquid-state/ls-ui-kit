import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import Example from '../../utils/Example';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class TriggerMode extends Component {
  render() {
    return (
      <Example title="Trigger mode">
        <Dropdown overlay={menu} trigger={['click']}>
          <a className="ant-dropdown-link" href="#">
            Click me <Icon type="down" />
          </a>
        </Dropdown>
      </Example>
    );
  }
}
 
export default TriggerMode;
