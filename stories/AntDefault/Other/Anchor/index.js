import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import StaticAnchor from './StaticAnchor';

class Anchor extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Anchor</h1>

        <p className="text">
          Hyperlinks to scroll on one page.
        </p>

        <h2 className="title">When to use</h2>

        <p className="text">
          For displaying anchor hyperlinks on page and jumping between them.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <StaticAnchor />

      </Fragment>
    );
  }
}
 
export default Anchor;