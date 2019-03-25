import React from 'react';
import { Pager } from '@liquid-state/ui-kit';
import WithState from '../../utils/WithState';
import { action } from '@storybook/addon-actions';
import Example from '../../utils/Example';

export default () => (
  <div>
    <h1 className="title">Pager</h1>

    <Example title="Basic Pager">
      <Pager steps={5} onClick={action('onClick')} />
    </Example>

    <Example title="Hidden right arrow">
      <Pager steps={5} hideRightArrow  onChange={action('onChange')}/>
    </Example>

    <Example title="Hidden left arrow">
      <Pager steps={5} hideLeftArrow />
    </Example>

    <Example title="Default value">
      <Pager steps={5} defaultValue={4} />
    </Example>

    <Example title="Text arrow overwrite (With Text)">
      <Pager
        steps={5}
        defaultValue={4}
        onClick={action('onClick')}
        onChange={action('onChange')}
        next="NEXT"
        previous="BACK" />
    </Example>

    <Example title="OnClick to capture all clicks">
      <Pager steps={5} defaultValue={4}  onChange={action('onChange')} />
    </Example>

    <Example title="A fully controlled pager">
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
    </Example>
  </div>
);
