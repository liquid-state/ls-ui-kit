import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import Slider from './Data Entry/Slider';

storiesOf('LS Mobile', module);

storiesOf('LS Mobile/LS Data Entry', module)
  .add('LS Slider', () => <Slider />);
