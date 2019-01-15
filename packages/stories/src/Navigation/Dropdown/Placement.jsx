import React, { Component } from 'react';
import { Menu, Dropdown, Button, Row } from 'antd';

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item.....</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item.....</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item.....</a>
    </Menu.Item>
  </Menu>
);

class Placement extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Placement</h3>

        <Row className="mb20">

          <Dropdown overlay={menu} placement="bottomLeft">
            <Button>bottomLeft</Button>
          </Dropdown>

          <Dropdown overlay={menu} placement="bottomCenter">
            <Button className="tooltip">bottomCenter</Button>
          </Dropdown>

          <Dropdown overlay={menu} placement="bottomRight">
            <Button>bottomRight</Button>
          </Dropdown>

        </Row>

        <Row>

          <Dropdown overlay={menu} placement="topLeft">
            <Button>topLeft</Button>
          </Dropdown>

          <Dropdown overlay={menu} placement="topCenter">
            <Button className="tooltip">topCenter</Button>
          </Dropdown>

          <Dropdown overlay={menu} placement="topRight">
            <Button>topRight</Button>
          </Dropdown>

        </Row>
      </section>
    );
  }
}

export default Placement;
