import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// General
import Button from './General/Button';

// Data Display
import Card from './Data Display/Card';

// Navigation
/* import Steps from './Navigation/Steps'; */

// Data Entry
import Checkbox from './Data Entry/Checkbox';
import Radio from './Data Entry/Radio';
import Rate from './Data Entry/Rate';
import Slider from './Data Entry/Slider';

storiesOf('LS Mobile', module);

storiesOf('LS Mobile/General', module)
  .add('Button', () => <Button />);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />);

// Navigation
/* storiesOf('LS Mobile/Navigation', module)
  .add('Steps', () => <Steps />); */

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Checkbox', () => <Checkbox />)
  .add('Radio', () => <Radio />)
  .add('Rate', () => <Rate />)
  .add('Slider', () => <Slider />);