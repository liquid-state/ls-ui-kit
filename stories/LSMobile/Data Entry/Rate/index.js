import React, { Fragment } from 'react';

import Rate from '../../../../src/Data Entry/Rate';

class ExampleWithText extends React.Component {
  state = {
    value: 3
  };

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <React.Fragment>
        <Rate
          mobile
          value={this.state.value}
          onChange={this.onChange}
        />
        <span className="ant-rate-text">{this.state.value} Stars</span>
      </React.Fragment>
    );
  }
}


export default () => (
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
      <Rate mobile />
    </section>

    <section className="example">
      <ExampleWithText />
    </section>
  </Fragment>
);
