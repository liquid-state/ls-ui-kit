import React, { Component } from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import Example from '../../utils/Example';

class HidingMenu extends Component {
  state = {
    visible: false
  };

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key="2">Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key="3">Clicking me will close the menu</Menu.Item>
      </Menu>
    );

    return (
      <Example title="The way of hiding menu.">
        <Dropdown overlay={menu}
          onVisibleChange={this.handleVisibleChange}
          visible={this.state.visible}
        >
          <a className="ant-dropdown-link" href="#">
            Hover me <Icon type="down" />
          </a>
        </Dropdown>
      </Example>
    );
  }

  handleMenuClick = (e) => {
    if (e.key === '3') {
      this.setState({ visible: false });
    }
  }

  handleVisibleChange = (flag) => {
    this.setState({ visible: flag });
  }
}
 
export default HidingMenu;
