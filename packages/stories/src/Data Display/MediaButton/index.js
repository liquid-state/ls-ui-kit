import React, { Component, Fragment } from 'react';
import Images from './Images';
import Icons from './Icons';
import Sizes from './Sizes';


class MediaButton extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Media Buttons</h1>

        <h2 className="title">Examples:</h2>

        <Images />
        <Icons />
        <Sizes />


      </Fragment>
    );
  }
}

export default MediaButton;
