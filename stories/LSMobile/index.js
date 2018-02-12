import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Entry
import Slider from './Data Entry/Slider';
import Cascader from './Data Entry/Cascader';
import Input from './Data Entry/Input';
import Mention from './Data Entry/Mention';
import TreeSelect from './Data Entry/TreeSelect';
import Select from './Data Entry/Select';
import TimePicker from './Data Entry/TimePicker';
import Transfer from './Data Entry/Transfer';
import Upload from './Data Entry/Upload';

// Navigation
import Affix from './Navigation/Affix';
import Breadcrumbs from './Navigation/Breadcrumbs';
import Dropdown from './Navigation/Dropdown';

storiesOf('LS Mobile', module);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Slider', () => <Slider />)
  .add('Cascader', () => <Cascader />)
  .add('Input', () => <Input />)
  .add('Mention', () => <Mention />)
  .add('TreeSelect', () => <TreeSelect />)
  .add('Select', () => <Select />)
  .add('TimePicker', () => <TimePicker />)
  .add('Transfer', () => <Transfer />)
  .add('Upload', () => <Upload />);

// Navigation
storiesOf('LS Mobile/Navigation', module)
  .add('Affix', () => <Affix />)
  .add('Breadcrumbs', () => <Breadcrumbs />)
  .add('Dropdown', () => <Dropdown />);