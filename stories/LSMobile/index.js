import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Display
import Card from './Data Display/Card';
import './Data Display/MediaButton';
import Table from './Data Display/Table';

// Data Entry
import Slider from './Data Entry/Slider';
import Checkbox from './Data Entry/Checkbox';

storiesOf('LS Mobile', module);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />)
  .add('Table', () => <Table />);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Checkbox', () => <Checkbox />)
  .add('Slider', () => <Slider />);