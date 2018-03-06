import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Display
import Card from './Data Display/Card';

storiesOf('LS Mobile', module);

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Card', () => <Card />);