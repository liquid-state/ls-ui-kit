import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Display
import Card from './Data Display/Card';
import './Data Display/MediaButton';

// Data Entry
import Slider from './Data Entry/Slider';
import Radio from './Data Entry/Radio';

storiesOf('LS Mobile', module);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Radio', () => <Radio />)
  .add('Slider', () => <Slider />);