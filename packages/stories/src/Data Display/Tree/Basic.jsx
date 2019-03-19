import React, { Component } from 'react';
import { Tree } from 'antd';
import Example from '../../utils/Example';

const TreeNode = Tree.TreeNode;

class Basic extends Component {
  render() {
    return (
      <Example title="Basic">

        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
        >
          <TreeNode title="parent 1" key="0-0">
            <TreeNode title="parent 1-0" key="0-0-0" disabled>
              <TreeNode title="leaf" key="0-0-0-0" disableCheckbox />
              <TreeNode title="leaf" key="0-0-0-1" />
            </TreeNode>
            <TreeNode title="parent 1-1" key="0-0-1">
              <TreeNode title="sss" key="0-0-1-0" />
            </TreeNode>
          </TreeNode>
        </Tree>
      </Example>
    );
  }
}
 
export default Basic;
