import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Entry
import Slider from './Data Entry/Slider';

storiesOf('LS Mobile', module);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Slider', () => <Slider />);