import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Sizes from './Sizes';
import Disabled from './Disabled';
import HourAndMinute from './HourAndMinute';
import Interval from './Interval';
import Addon from './Addon';
import Hours from './Hours';

class TimePicker extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">TimePicker</h1>

        <p className="text">
          By clicking the input box, you can select a time from a popup panel.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Sizes />
        <Disabled />
        <HourAndMinute />
        <Interval />
        <Addon />
        <Hours />

      </Fragment>
    );
  }
}
 
export default TimePicker;