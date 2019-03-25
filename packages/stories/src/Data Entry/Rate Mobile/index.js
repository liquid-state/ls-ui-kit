import React, { Fragment } from 'react';

import { Rate } from '@liquid-state/ui-kit';
import WithState from '../../utils/WithState';
import Example from '../../utils/Example';

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

    <Example title="Default">
      <Rate mobile />
    </Example>

    <Example title="With State">
      <WithState initial={{ value: 1 }} >
        {(state, setState) => (
          <React.Fragment>
            <Rate
              mobile
              value={state.value}
              onChange={value => setState({ value })}
            />
            <span className="ant-rate-text">{state.value} Stars</span>
          </React.Fragment>
        )}
      </WithState>
    </Example>
  </Fragment>
);
