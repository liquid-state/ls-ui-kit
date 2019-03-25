import React, { Component, Fragment } from 'react';
import DirectionalIcons from './Direction';
import SuggestedIcons from './Suggested';
import ApplicationIcons from './Application';
import Brands from './Brands';

class IconPage extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Icon</h1>

        <DirectionalIcons />

        <SuggestedIcons />

        <ApplicationIcons />

        <Brands />
      </Fragment>
    );
  }
};

export default IconPage;
