import React from 'react';
import Pager from '../../../../src/components/Pager';
import WithState from '../../../utils/WithState';
import { action } from '@storybook/addon-actions';

export default () => (
  <div>
    <h1 className="title">Pager</h1>

    <section className="example">
      <h2 className="ex-title">Basic Pager</h2>
      <Pager steps={5} />
    </section>

    <section className="example">
      <h2 className="ex-title">Hidden right arrow</h2>
      <Pager steps={5} hideRightArrow />
    </section>

    <section className="example">
      <h2 className="ex-title">Hidden left arrow</h2>
      <Pager steps={5} hideLeftArrow />
    </section>

    <section className="example">
      <h2 className="ex-title">Default value</h2>
      <Pager steps={5} defaultValue={4} />
    </section>

    <section className="example">
      <h2 className="ex-title">Text arrow overwrite</h2>
      <Pager steps={5} defaultValue={4} textRightArrow="Next" textLeftArrow="Back" />
    </section>

    <section className="example">
      <h2 className="ex-title">Unlock onChange</h2>
      <Pager steps={5} defaultValue={4} unlockChange onChange={console.log} />
    </section>

    <section className="example">
      <h2 className="ex-title">A fully controlled pager</h2>
      <WithState initial={{ value: 2 }}>
        {(state, setState) => {
          const onChange = (value) => setState({ value });

          return (
            <Pager
              steps={5}
              current={state.value}
              onChange={onChange}
            />
          );
        }}
      </WithState>
    </section>
  </div>
);
