import React, { Component } from 'react';
import { TreeSelect, Row, Col } from 'antd';

const treeData = [
  {
    label: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [{
      label: 'Child Node1',
      value: '0-0-1',
      key: '0-0-1',
    },
    {
      label: 'Child Node2',
      value: '0-0-2',
      key: '0-0-2',
    }],
  },
  {
    label: 'Node2',
    value: '0-1',
    key: '0-1',
  }
];

class Generate extends Component {
  state = {
    value: undefined
  }

  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Generate form tree data</h3>

        <Row>
          <Col sm={16} lg={7}>
          <TreeSelect
              style={{ width: '100%' }}
              value={this.state.value}
              dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
              treeData={treeData}
              placeholder="Please select"
              treeDefaultExpandAll
              onChange={this.onChange}
            />
          </Col>
        </Row>
      </section>
    );
  }

  onChange = (value) => this.setState({ value });
}

export default Generate;