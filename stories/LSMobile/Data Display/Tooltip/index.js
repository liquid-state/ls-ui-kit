import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Placement from './Placement';
import ArrowPointing from './ArrowPointing';

class Popover extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Tooltip</h1>

        <p className="text">
          A simple text popup tip.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>
            The tip is shown on mouse enter, and is hidden on mouse leave. The Tooltip doesn't support complex text or operations.
          </li>
          <li>
            To provide an explanation of a button/text/operation. It's often used instead of the html title attribute.
          </li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Placement />
        <ArrowPointing />

      </Fragment>
    );
  }
}
 
export default Popover;