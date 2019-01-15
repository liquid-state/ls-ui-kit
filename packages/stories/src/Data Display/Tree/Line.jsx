import React, { Component } from 'react';
import { Tree } from 'antd';

const TreeNode = Tree.TreeNode;

class Line extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">Tree With Line</h3>

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
      </section>
    );
  }
}
 
export default Line;