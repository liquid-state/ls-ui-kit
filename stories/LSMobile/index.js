import React from 'react';
import { storiesOf } from '@storybook/react';

import './Data Display/MediaButton';

// Data Entry
import Slider from './Data Entry/Slider';
import Checkbox from './Data Entry/Checkbox';
import Rate from './Data Entry/Rate';
import Radio from './Data Entry/Radio';

// General
import Button from './General/Button';
import PagerStories from './General/Pager';

storiesOf('LS Mobile', module);

// General
storiesOf('LS Mobile/General', module)
  .add('Button', () => <Button />)
  .add('Pager', PagerStories)

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Checkbox', () => <Checkbox />)
  .add('Slider', () => <Slider />)
  .add('Rate', () => <Rate />)
  .add('Radio', () => <Radio />);
