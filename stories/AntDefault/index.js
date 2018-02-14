import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// General
import Button from './General/Button';
import Icon from './General/Icon';

// Navigation
import Pagination from './Navigation/Pagination';
import Steps from './Navigation/Steps';

// Data Entry
import AutoComplate from './Data Entry/AutoComplate';
import Checkbox from './Data Entry/Checkbox';
import DatePicker from './Data Entry/DatePicker';
import Form from './Data Entry/Form';
import InputNumber from './Data Entry/InputNumber';
import Input from './Data Entry/Input';
import Rate from './Data Entry/Rate';
import Radio from './Data Entry/Radio';
import Slider from './Data Entry/Slider';
import Switch from './Data Entry/Switch';
import Select from './Data Entry/Select';
import Upload from './Data Entry/Upload';

// Data Display
import Avatar from './Data Display/Avatar';
import Badge from './Data Display/Badge';
import Calendar from './Data Display/Calendar';
import Card from './Data Display/Card';
import Collapse from './Data Display/Collapse';
import Carousel from './Data Display/Carousel';
import List from './Data Display/List';
import Table from './Data Display/Table';
import Tabs from './Data Display/Tabs';
import Timeline from './Data Display/Timeline';
import Popover from './Data Display/Popover';
import Tooltip from './Data Display/Tooltip';
import Tree from './Data Display/Tree';

// Feedback
import Alert from './Feedback/Alert';
import Modal from './Feedback/Modal';
import Message from './Feedback/Message';
import Notification from './Feedback/Notification';
import Progress from './Feedback/Progress';
import Popconfirm from './Feedback/Popconfirm';
import Spin from './Feedback/Spin';

// Other
import Divider from './Other/Divider';
import Anchor from './Other/Anchor';
import BackTop from './Other/BackTop';
import LocaleProvider from './Other/LocaleProvider';

storiesOf('Ant Default', module);
storiesOf('Ant Default/General', module)
  .add('Button', () => <Button />)
  .add('Icon', () => <Icon />);

storiesOf('Ant Default/Navigation', module)
  .add('Pagination', () => <Pagination />)
  .add('Steps', () => <Steps />);

storiesOf('Ant Default/Data Entry', module)
  .add('AutoComplate', () => <AutoComplate />)
  .add('Checkbox', () => <Checkbox />)
  .add('DatePicker', () => <DatePicker />)
  .add('Form', () => <Form />)
  .add('InputNumber', () => <InputNumber />)
  .add('Input', () => <Input />)
  .add('Rate', () => <Rate />)
  .add('Radio', () => <Radio />)
  .add('Slider', () => <Slider />)
  .add('Switch', () => <Switch />)
  .add('Select', () => <Select />)
  .add('Upload', () => <Upload />);

storiesOf('Ant Default/Data Display', module)
  .add('Avatar', () => <Avatar />)
  .add('Badge', () => <Badge />)
  .add('Calendar', () => <Calendar />)
  .add('Card', () => <Card />)
  .add('Collapse', () => <Collapse />)
  .add('Carousel', () => <Carousel />)
  .add('List', () => <List />)
  .add('Popover', () => <Popover />)
  .add('Table', () => <Table />)
  .add('Tabs', () => <Tabs />)
  .add('Timeline', () => <Timeline />)
  .add('Tooltip', () => <Tooltip />)
  .add('Tree', () => <Tree />);

storiesOf('Ant Default/Feedback', module)
  .add('Alert', () => <Alert />)
  .add('Modal', () => <Modal />)
  .add('Message', () => <Message />)
  .add('Notification', () => <Notification />)
  .add('Progress', () => <Progress />)
  .add('Popconfirm', () => <Popconfirm />)
  .add('Spin', () => <Spin />);

storiesOf('Ant Default/Other', module)
  .add('Divider', () => <Divider />)
  .add('Anchor', () => <Anchor />)
  .add('BackTop', () => <BackTop />)
  .add('LocaleProvider', () => <LocaleProvider />);