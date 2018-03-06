import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// General
import Button from './General/Button';

// Data Display
import Card from './Data Display/Card';

// Navigation
import Steps from './Navigation/Steps'

storiesOf('LS Mobile', module);

storiesOf('LS Mobile/General', module)
  .add('Button', () => <Button />);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />);

// Navigation
storiesOf('LS Mobile/Navigation', module)
  .add('Steps', () => <Steps />);