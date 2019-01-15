import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import BasicControlled from './BasicControlled';
import Draggable from './Draggable';
import Load from './Load';
import Searchable from './Searchable';
import Line from './Line';

class Tree extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Tree</h1>

        <h2 className="title">When to use</h2>

        <p className="text">
          Almost anything can be represented in a tree structure.
          Examples include directories, organization hierarchies,
          biological classifications, countries, etc. The Tree component
          is a way of representing the hierarchical relationship between
          these things. You can also expand, collapse, and select a
          treeNode within a Tree.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <BasicControlled />
        <Draggable />
        <Load />
        <Searchable />
        <Line />

      </Fragment>
    );
  }
}
 
export default Tree;