import React, { Component, Fragment } from 'react';

import './style.css';

import Basic from './Basic';
import Icon from './Icon';
import ReactRouter from './ReactRouter';
import Separator from './Separator';

class Breadcrumbs extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Breadcrumbs</h1>

        <p className="text">
          A breadcrumb displays the current location within a hierarchy. It allows going back to states higher up in the hierarchy.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>When the system has more than two layers in a hierarchy.</li>
          <li>When you need to inform the user of where they are.</li>
          <li>When the user may need to navigate back to a higher level.</li>
          <li>When the application has multi-layer architecture.</li>
        </ul>

        <h2 className="title">Examples:</h2>
        
        <Basic />
        <Icon />
        <ReactRouter />
        <Separator />

      </Fragment>
    );
  }
}
 
export default Breadcrumbs;