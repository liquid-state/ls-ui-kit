import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Ways from './Ways';
import Placement from './Placement';
import Dialog from './Dialog';
import ArrowPointing from './ArrowPointing';

class Popover extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Popover</h1>

        <p className="text">
          The floating card popped by clicking or hovering.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          A simple popup menu to provide extra information or operations.
        </p>

        <p className="text">
          Comparing with Tooltip, besides information Popover card
          can also provide action elements like links and buttons.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Ways />
        <Placement />
        <Dialog />
        <ArrowPointing />

      </Fragment>
    );
  }
}
 
export default Popover;