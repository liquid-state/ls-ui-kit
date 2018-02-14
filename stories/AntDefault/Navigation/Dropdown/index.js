import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Placement from './Placement';
import OtherElements from './OtherElements';
import TriggerMode from './TriggerMode';
import ClickEvent from './ClickEvent';
import Button from './Button';
import CascadingMenu from './CascadingMenu';
import HidingMenu from './HidingMenu';
import ContextMenu from './ContextMenu';

class Dropdown extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Dropdown</h1>

        <p className="text">
          A dropdown list.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          If there are too many operations to display,
          you can wrap them in a Dropdown.
          By clicking/hovering on the trigger, a dropdown
          menu should appear, which allows you to choose
          one option and execute relevant actions.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Placement />
        <OtherElements />
        <TriggerMode />
        <ClickEvent />
        <Button />
        <CascadingMenu />
        <HidingMenu />
        <ContextMenu />

      </Fragment>
    );
  }
}
 
export default Dropdown;