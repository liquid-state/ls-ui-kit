import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import MultipleSelection from './MultipleSelection';
import Generate from './Generate';
import Checkable from './Checkable';

class TreeSelect extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">TreeSelect</h1>

        <p className="text">
          Tree selection control.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          TreeSelect is similar to Select,
          but the values are provided in a tree like
          structure. Any data whose entries are defined
          in a hierarchical manner is fit to use this
          control. Examples of such case may include a
          corporate hierarchy, a directory structure,
          and so on.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <MultipleSelection />
        <Generate />
        <Checkable />

      </Fragment>
    );
  }
}
 
export default TreeSelect;