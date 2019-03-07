import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import Example from '../../utils/Example';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
    </Menu.Item>
  </Menu>
);

const Basic = () => (
  <Example title="Basic">
    <Dropdown overlay={menu}>
      <a className="ant-dropdown-link" href="#">
        Hover me <Icon type="down" />
      </a>
    </Dropdown>
  </Example>
);

export default Basic;
