import React from 'react';
import { storiesOf } from '@storybook/react';

import './Data Display/MediaButton';

// General
import Button from './General/Button';
import PagerStories from './General/Pager';

storiesOf('LS Mobile', module);

// General
storiesOf('LS Mobile/General', module)
  .add('Stretch Button', () => <Button />)
  .add('Pager', PagerStories);

