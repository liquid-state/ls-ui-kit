import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Display
import Card from './Data Display/Card';
import './Data Display/MediaButton';

// Data Entry
import Slider from './Data Entry/Slider';

// General
import Button from './General/Button';

storiesOf('LS Mobile', module);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Slider', () => <Slider />);

// General
storiesOf('LS Mobile/General', module)
  .add('Button', () => <Button />);