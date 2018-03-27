import React, { Component, Fragment } from 'react';

import SliderComponent from '../../../../src/components/Slider/Slider';

class Slider extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Slider</h1>

        <p className="text">
          A Slider component for displaying current value and intervals in range.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          To input a value in a range.
        </p>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <h3 className="ex-title mb20">Slider</h3>
          <SliderComponent mobile />
        </section>
      </Fragment>
    );
  }
}

export default Slider;
