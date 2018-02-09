import React, { Component, Fragment } from 'react';
import Basic from './Basic';
import './style.css';

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

        <Basic />


      </Fragment>
    );
  }


  handleDisabledChange = (disabled) => {
    this.setState({ disabled });
  }
}
 
export default Slider;