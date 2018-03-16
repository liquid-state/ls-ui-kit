import React, { Component, Fragment } from 'react';

import Radio from '../../../../src/Data Entry/Radio';

const data = [
  {
    value: 1,
    text: 'A'
  },
  {
    value: 2,
    text: 'B'
  },
  {
    value: 3,
    text: 'C'
  },
  {
    value: 4,
    text: 'D'
  },
  {
    value: 5,
    text: 'E',
    disabled: true
  }
];

class RadioPage extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Radio</h1>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>Used to select a single state in multiple options.</li>
          <li>The difference between Select is that Radio is visible to user and can facilitate the comparison of choice. So, when you want to use Radio, option should not be too much.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <section className="example">
          <h3 className="ex-title">Mobile</h3>
          <Radio type="mobile" data={data} />
        </section>

        <section className="example">
          <h3 className="ex-title">Desktop</h3>
          <Radio data={data} />
        </section>

        <section className="example">
          <h3 className="ex-title">Vertical</h3>
          <Radio type="vertical" data={data} />
        </section>

      </Fragment>
    );
  }
}
 
export default RadioPage;