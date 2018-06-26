import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

import RoundedCollapse from './RoundedCollapse';

storiesOf('RoundedCollapse', module)
  .add('Collapse', () => <RoundedCollapse />);
