import React, { Component, Fragment } from 'react';

import Rate from '../../../../src/Data Entry/Rate';

class RatePage extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Rate</h1>

        <p className="text">
          Rate component.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Show evaluation.</li>
          <li>A quick rating operation on something.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <Rate />
        </section>


      </Fragment>
    );
  }
}
 
export default RatePage;