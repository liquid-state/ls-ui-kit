import React, { Component } from 'react';
import { TreeSelect, Row, Col } from 'antd';
import Example from '../../utils/Example';

const SHOW_PARENT = TreeSelect.SHOW_PARENT;

const treeData = [
  {
    label: 'Node1',
    value: '0-0',
    key: '0-0',
    children: [
      {
        label: 'Child Node1',
        value: '0-0-0',
        key: '0-0-0',
      }
    ],
  },
  {
    label: 'Node2',
    value: '0-1',
    key: '0-1',
    children: [{
      label: 'Child Node3',
      value: '0-1-0',
      key: '0-1-0',
    },
    {
      label: 'Child Node4',
      value: '0-1-1',
      key: '0-1-1',
    },
    {
      label: 'Child Node5',
      value: '0-1-2',
      key: '0-1-2',
    }],
  }
];

class Checkable extends Component {
  state = {
    value: ['0-0-0'],
  }

  render() {
    const tProps = {
      treeData,
      value: this.state.value,
      onChange: this.onChange,
      treeCheckable: true,
      showCheckedStrategy: SHOW_PARENT,
      searchPlaceholder: 'Please select',
      style: {
        width: '100%'
      }
    };
    return (
      <Example title="Checkable">/h3>
        <Row>
          <Col sm={16} lg={7}>
            <TreeSelect {...tProps} />
          </Col>
        </Row>
      </Example>
    );
  }
  onChange = value => this.setState({ value });
}

export default Checkable;
