import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// General
import Button from './General/Button';

// Data Display
import Card from './Data Display/Card';
import Table from './Data Display/Table';

// Data Entry
import Slider from './Data Entry/Slider';
import Rate from './Data Entry/Rate';
import Radio from './Data Entry/Radio';
import Checkbox from './Data Entry/Checkbox';

// Navigation
import Steps from './Navigation/Steps'

storiesOf('LS Mobile', module);

storiesOf('LS Mobile/General', module)
  .add('Button', () => <Button />);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />)
  .add('Table', () => <Table />);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Slider', () => <Slider />)
  .add('Rate', () => <Rate />)
  .add('Radio', () => <Radio />)
  .add('Checkbox', () => <Checkbox />);

// Navigation
storiesOf('LS Mobile/Navigation', module)
  .add('Steps', () => <Steps />);