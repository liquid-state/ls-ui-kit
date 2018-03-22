import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Display
import Card from './Data Display/Card';
import './Data Display/MediaButton';

// Data Entry
import Slider from './Data Entry/Slider';
import Checkbox from './Data Entry/Checkbox';
import Rate from './Data Entry/Rate';

// General
import Button from './General/StretchButton';

storiesOf('LS Mobile', module);

// General
storiesOf('LS Mobile/General', module)
  .add('Stretch Button', () => <Button />);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Checkbox', () => <Checkbox />)
  .add('Slider', () => <Slider />)
  .add('Rate', () => <Rate />);
