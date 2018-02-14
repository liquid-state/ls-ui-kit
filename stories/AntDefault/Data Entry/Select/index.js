import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Sizes from './Sizes';
import Search from './Search';
import Tags from './Tags';
import Group from './Group';
import AutoComplate from './AutoComplate';
import Multiple from './Multiple';
import AutomaticCompletion from './AutomaticCompletion';
import SearchBox from './SearchBox';
import AutomaticTokenization from './AutomaticTokenization';
import GetValue from './GetValue';
import SearchUser from './SearchUser';

class DatePickerPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Select</h1>

        <p className="text">
          Select component to select value from options.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>A dropdown menu for displaying choices - an elegant alternative to the native select element.</li>
          <li>Utilizing Radio is recommended when there are fewer total options (less than 5).</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Sizes />
        <Search />
        <Tags />
        <Group />
        <AutoComplate />
        <Multiple />
        <AutomaticCompletion />
        <SearchBox />
        <AutomaticTokenization />
        <GetValue />
        <SearchUser />

      </Fragment>
    );
  }
}
 
export default DatePickerPage;