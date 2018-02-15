import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, message } from 'antd';

class ButtonComponent extends Component {
  menu = (
    <Menu onClick={this.handleMenuClick}>
      <Menu.Item key="1">1st menu item</Menu.Item>
      <Menu.Item key="2">2nd menu item</Menu.Item>
      <Menu.Item key="3">3rd item</Menu.Item>
    </Menu>
  );

  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Button with dropdown menu</h3>

        <Dropdown.Button onClick={this.handleButtonClick} overlay={this.menu}>
          Dropdown
        </Dropdown.Button>
        <Dropdown.Button
          onClick={this.handleButtonClick}
          overlay={this.menu}
          disabled
          style={{ marginLeft: 8 }}
        >
          Dropdown
        </Dropdown.Button>
        <Dropdown overlay={this.menu}>
          <Button style={{ marginLeft: 8 }}>
            Button <Icon type="down" />
          </Button>
        </Dropdown>
      </section>
    );
  }

  handleButtonClick = (e) => message.info('Click on left button.');

  handleMenuClick = (e) => message.info('Click on menu item.');
  
}
 
export default ButtonComponent;