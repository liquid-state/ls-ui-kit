import React, { Component } from 'react';
import { Checkbox, Row, Col } from 'antd';
import Example from '../../utils/Example';

class Grid extends Component {
  state = {}
  render() { 
    return (
      <Example title="Use with Grid">

        <Checkbox.Group style={{ width: '100%' }}>
          <Row>
            <Col span={8}><Checkbox value="A">A</Checkbox></Col>
            <Col span={8}><Checkbox value="B">B</Checkbox></Col>
            <Col span={8}><Checkbox value="C">C</Checkbox></Col>
            <Col span={8}><Checkbox value="D">D</Checkbox></Col>
            <Col span={8}><Checkbox value="E">E</Checkbox></Col>
            <Col span={8}><Checkbox value="F">F</Checkbox></Col>
          </Row>
        </Checkbox.Group>
      </Example>
    );
  }
}
 
export default Grid;
