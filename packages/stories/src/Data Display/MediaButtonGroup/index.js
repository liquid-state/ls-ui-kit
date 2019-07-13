import React, { Component, Fragment } from 'react';
import Standard from './Standard';
import Sized from './Sized';

class MediaButtonGroup extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Media Button Groups</h1>

        <h2 className="title">Examples:</h2>

        <Standard />

        <Sized />
      </Fragment>
    );
  }
}

export default MediaButtonGroup;
