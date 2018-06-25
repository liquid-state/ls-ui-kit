import React, { Component, Fragment } from 'react';
import { storiesOf } from '@storybook/react';

// General
import Button from './General/Button';
import Icon from './General/Icon';

// Navigation
import Pagination from './Navigation/Pagination';
import Steps from './Navigation/Steps';
import Affix from './Navigation/Affix';
import Breadcrumbs from './Navigation/Breadcrumbs';
import Dropdown from './Navigation/Dropdown';
import PagerStories from './Navigation/Pager';

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
import Cascader from './Data Entry/Cascader';
import Mention from './Data Entry/Mention';
import TreeSelect from './Data Entry/TreeSelect';
import TimePicker from './Data Entry/TimePicker';
import Transfer from './Data Entry/Transfer';

// Buttons
import MediaButton from './Buttons/MediaButton';

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

// G2
// import CurveLineChart from './G2/CurveLineChart';
// import StackHistogram from './G2/StackHistogram';
// import GroupHistogram from './G2/GroupHistogram';
// import ScatterPlot from './G2/ScatterPlot';
// import MultipleLineCharts from './G2/MultipleLineCharts';
// import BasicLine from './G2/BasicLine';

storiesOf('Liquid State UI Kit', module);
storiesOf('Liquid State UI Kit/General', module)
  .add('Button', () => <Button />)
  .add('Icon', () => <Icon />);

storiesOf('Liquid State UI Kit/Navigation', module)
  .add('Pagination', () => <Pagination />)
  .add('Steps', () => <Steps />)
  .add('Affix', () => <Affix />)
  .add('Breadcrumbs', () => <Breadcrumbs />)
  .add('Dropdown', () => <Dropdown />)
  .add('Pager', PagerStories);

storiesOf('Liquid State UI Kit/Data Entry', module)
  .add('AutoComplate', () => <AutoComplate />)
  .add('Cascader', () => <Cascader />)
  .add('DatePicker', () => <DatePicker />)
  .add('Form', () => <Form />)
  .add('InputNumber', () => <InputNumber />)
  .add('Input', () => <Input />)
  .add('Mention', () => <Mention />)
  .add('Switch', () => <Switch />)
  .add('Select', () => <Select />)
  .add('TimePicker', () => <TimePicker />)
  .add('Transfer', () => <Transfer />)
  .add('TreeSelect', () => <TreeSelect />)
  .add('Upload', () => <Upload />);

storiesOf('Liquid State UI Kit/Data Display', module)
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

storiesOf('Liquid State UI Kit/Feedback', module)
  .add('Alert', () => <Alert />)
  .add('Modal', () => <Modal />)
  .add('Message', () => <Message />)
  .add('Notification', () => <Notification />)
  .add('Progress', () => <Progress />)
  .add('Popconfirm', () => <Popconfirm />)
  .add('Spin', () => <Spin />);

storiesOf('Liquid State UI Kit/Other', module)
  .add('Divider', () => <Divider />)
  .add('Anchor', () => <Anchor />)
  .add('BackTop', () => <BackTop />)
  .add('LocaleProvider', () => <LocaleProvider />);

// storiesOf('Liquid State UI Kit/G2', module)
//   .add('Curve line chart', () => <CurveLineChart />)
//   .add('Stack histogram', () => <StackHistogram />)
//   .add('Group histogram', () => <GroupHistogram />)
//   .add('Scatter plot', () => <ScatterPlot />)
//   .add('Multiple line charts', () => <MultipleLineCharts />)
//   .add('The basic line chart', () => <BasicLine />);

storiesOf('Liquid State UI Kit/Radio Mobile', module)
  .add('Radio', () => <Radio />);

storiesOf('Liquid State UI Kit/Rate Mobile', module)
  .add('Rate', () => <Rate />);

storiesOf('Liquid State UI Kit/Slider Mobile', module)
  .add('Slider', () => <Slider />);

storiesOf('Liquid State UI Kit/Checkbox Mobile', module)
  .add('Checkbox', () => <Checkbox />);
