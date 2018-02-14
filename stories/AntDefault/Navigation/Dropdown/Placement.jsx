import React, { Component } from 'react';
import { Menu, Dropdown, Button, Icon, Row, Col } from 'antd';

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
        
        <Row className="mb20" gutter={16}>
          <Col sm={12} lg={2}>
            <Dropdown overlay={menu} placement="bottomLeft">
              <Button>bottomLeft</Button>
            </Dropdown>
          </Col>

          <Col sm={12} lg={2}>
            <Dropdown overlay={menu} placement="bottomCenter">
              <Button>bottomCenter</Button>
            </Dropdown>
          </Col>

          <Col sm={12} lg={2}>
            <Dropdown overlay={menu} placement="bottomRight">
              <Button>bottomRight</Button>
            </Dropdown>
          </Col>
        </Row>

        <Row>
          <Col sm={12} lg={2}>
            <Dropdown overlay={menu} placement="topLeft">
              <Button>topLeft</Button>
            </Dropdown>
          </Col>

          <Col sm={12} lg={2}>
            <Dropdown overlay={menu} placement="topCenter">
              <Button>topCenter</Button>
            </Dropdown>
          </Col>

          <Col sm={12} lg={2}>
            <Dropdown overlay={menu} placement="topRight">
              <Button>topRight</Button>
            </Dropdown>
          </Col>

        </Row>
      </section>
    );
  }
}
 
export default Placement;