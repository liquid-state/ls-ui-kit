import React, { Component } from 'react';
import { Tree } from 'antd';
import Example from '../../utils/Example';

const TreeNode = Tree.TreeNode;

class Line extends Component {
  render() {
    return (
      <Example title="Tree With Line">

        <Tree
          showLine
          defaultExpandedKeys={['0-0-0']}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0">
              <TreeNode title="leaf" key="0-0-0-0" />
              <TreeNode title="leaf" key="0-0-0-1" />
              <TreeNode title="leaf" key="0-0-0-2" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="leaf" key="0-0-1-0" />
            </TreeNode>
            <TreeNode title="parent 1-2" key="0-0-2">
              <TreeNode title="leaf" key="0-0-2-0" />
              <TreeNode title="leaf" key="0-0-2-1" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Example>
    );
  }
}
 
export default Line;
