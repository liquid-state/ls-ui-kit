import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// Data Entry
import Slider from './Data Entry/Slider';


/* import Cascader from './Data Entry/Cascader';
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

// Data Display
import Popover from './Data Display/Popover';
import Tooltip from './Data Display/Tooltip';
import Table from './Data Display/Table';
import Tabs from './Data Display/Tabs'; */

storiesOf('LS Mobile', module);

// Data Entry
storiesOf('LS Mobile/Data Entry', module)
  .add('Slider', () => <Slider />);
/*   .add('Cascader', () => <Cascader />)
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

// Data Display
storiesOf('LS Mobile/Data Display', module)
  .add('Popover', () => <Popover />)
  .add('Tooltip', () => <Tooltip />)
  .add('Table', () => <Table />)
  .add('Tabs', () => <Tabs />); */