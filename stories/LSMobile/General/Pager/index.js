import React from 'react';
import Pager from '../../../../src/General/Pager';

const { Step } = Pager;

export default () => (
  <div>
    <h1 className="title">Pager</h1>

    <section className="example">
      <h2 className="ex-title">Basic Pager</h2>
      <Pager steps={5} current={3} />
    </section>

    <section className="example">
      <h2 className="ex-title">Hidden right arrow</h2>
      <Pager steps={5} current={3} hideRightArrow />
    </section>

    <section className="example">
      <h2 className="ex-title">Hidden left arrow</h2>
      <Pager steps={5} current={3} hideLeftArrow />
    </section>
  </div>
);
