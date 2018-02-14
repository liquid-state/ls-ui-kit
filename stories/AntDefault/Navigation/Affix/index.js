import React, { Component, Fragment } from 'react';

import './style.css';

import Basic from './Basic';
import Callback from './Callback';
import Container from './Container';

class Affix extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Affix</h1>

        <p className="text">
          Make an element stick to viewport.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          When user browses a long web page, some content need to stick to the viewport. This is common for menus and actions.
        </p>
        
        <p className="text">
          Please note that Affix should not cover other content on the page, especially when the size of the viewport is small.
        </p>

        <h2 className="title">Examples:</h2>
        
        <Basic />
        <Callback />
        <Container />

      </Fragment>
    );
  }
}
 
export default Affix;