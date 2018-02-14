import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Group from './Group';
import Search from './Search';
import Textarea from './Textarea';
import Autosize from './Autosize';
import Prefix from './Prefix';
import PrePost from './PrePost';
import FormatTooltip from './FormatTooltip';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Input</h1>

        <p className="text">
          A basic widget for getting the user input is a text field. Keyboard and mouse can be used for providing or changing data.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>A user input in a form field is needed.</li>
          <li>A search input is required.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Group />
        <Search />
        <Textarea />
        <Autosize />
        <Prefix />
        <PrePost />
        <FormatTooltip />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;