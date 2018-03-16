import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Display
import Card from './Data Display/Card';
import './Data Display/MediaButton';
import Table from './Data Display/Table';

// Data Entry
import Slider from './Data Entry/Slider';

// General
import Button from './General/Button';

storiesOf('LS Mobile', module);

// General
storiesOf('LS Mobile/General', module)
  .add('Button', () => <Button />);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />)
  .add('Table', () => <Table />);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Slider', () => <Slider />);