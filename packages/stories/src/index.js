import React from 'react';
import { storiesOf as defStory } from '@storybook/react';

import './css/style.css';
import './css/icons.css';

// General
import Typography from './General/Typography';
import Button from './General/Button';
import Icon from './General/Icon';
import PagerStories from './General/Pager';
import FullCentralImage from './General/FullCentralWithImage/FullCentral';

// Navigation
import Pagination from './Navigation/Pagination';
import Steps from './Navigation/Steps';
import Affix from './Navigation/Affix';
import Breadcrumbs from './Navigation/Breadcrumbs';
import Dropdown from './Navigation/Dropdown';

// Data Entry
import AutoComplate from './Data Entry/AutoComplate';
import Checkbox from './Data Entry/Checkbox';
import CheckboxMobile from './Data Entry/Checkbox Mobile';
import DatePicker from './Data Entry/DatePicker';
import Form from './Data Entry/Form';
import InputNumber from './Data Entry/InputNumber';
import Input from './Data Entry/Input';
import Rate from './Data Entry/Rate';
import RateMobile from './Data Entry/Rate Mobile';
import Radio from './Data Entry/Radio';
import RadioMobile from './Data Entry/Radio Mobile';
import Slider from './Data Entry/Slider';
import SliderMobile from './Data Entry/Slider Mobile';
import Switch from './Data Entry/Switch';
import Select from './Data Entry/Select';
import Upload from './Data Entry/Upload';
import Cascader from './Data Entry/Cascader';
import Mention from './Data Entry/Mention';
import TreeSelect from './Data Entry/TreeSelect';
import TimePicker from './Data Entry/TimePicker';
import Transfer from './Data Entry/Transfer';
import {
  SearchMinInput,
  SearchError,
  SearchOnChange,
  SearchOnSubmit,
  SearchLoading,
  SearchHeading,
} from './Data Entry/Search';

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
import MediaButton from './Data Display/MediaButton';
import MediaButtonGroup from './Data Display/MediaButtonGroup';
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

export const defaultConfig = {
  name: 'Liquid State UI Kit',
  filters: [],
};

// Create storiesOf
const create = (storiesOf, filters = []) => {
  const match = n => filters.includes(n);
  return (name, module) => {
    const anchor = storiesOf(name, module);
    const proxy = {
      add: (cName, component) => {
        !match(cName)
          ? anchor.add(cName, component)
          : console.info('Component Filtered:', `${name}/${cName}`);
        return proxy;
      },
    };
    return proxy;
  };
};

export function configureStories(storiesOf = defStory, config = defaultConfig) {
  storiesOf = create(storiesOf, config.filters);
  const prefix = config.name;

  storiesOf(prefix, module);

  storiesOf(`${prefix}/General`, module)
    .add('Buttons', () => <Button />)
    .add('Icon', () => <Icon />)
    .add('Pager', PagerStories)
    .add('FullCentralImage', () => <FullCentralImage />);

  storiesOf(`${prefix}/Navigation`, module)
    .add('Pagination', () => <Pagination />)
    .add('Steps', () => <Steps />)
    .add('Affix', () => <Affix />)
    .add('Breadcrumbs', () => <Breadcrumbs />)
    .add('Dropdown', () => <Dropdown />);

  storiesOf(`${prefix}/Data Entry`, module)
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

  storiesOf(`${prefix}/Data Entry/Search`, module)
    .add('Minimun Input', () => <SearchMinInput />)
    .add('Search Error', () => <SearchError />)
    .add('Loading', () => <SearchLoading />)
    .add('Heading', () => <SearchHeading />)
    .add('With Data', () => <SearchOnChange />)
    .add('OnSubmit', () => <SearchOnSubmit />);

  storiesOf(`${prefix}/Data Display`, module)
    .add('Avatar', () => <Avatar />)
    .add('Badge', () => <Badge />)
    .add('Calendar', () => <Calendar />)
    .add('Card', () => <Card />)
    .add('Collapse', () => <Collapse />)
    .add('Carousel', () => <Carousel />)
    .add('List', () => <List />)
    .add('Media Button', () => <MediaButton />)
    .add('Media Button Group', () => <MediaButtonGroup />)
    .add('Popover', () => <Popover />)
    .add('Table', () => <Table />)
    .add('Tabs', () => <Tabs />)
    .add('Timeline', () => <Timeline />)
    .add('Tooltip', () => <Tooltip />)
    .add('Tree', () => <Tree />);

  storiesOf(`${prefix}/Feedback`, module)
    .add('Alert', () => <Alert />)
    .add('Modal', () => <Modal />)
    .add('Message', () => <Message />)
    .add('Notification', () => <Notification />)
    .add('Progress', () => <Progress />)
    .add('Popconfirm', () => <Popconfirm />)
    .add('Spin', () => <Spin />);

  storiesOf(`${prefix}/Other`, module)
    .add('Divider', () => <Divider />)
    .add('Anchor', () => <Anchor />)
    .add('BackTop', () => <BackTop />)
    .add('LocaleProvider', () => <LocaleProvider />);

  storiesOf(`${prefix}/Data Entry/Radio`, module)
    .add('Radio', () => <Radio />)
    .add('Radio Mobile', () => <RadioMobile />);

  storiesOf(`${prefix}/Data Entry/Rate`, module)
    .add('Rate', () => <Rate />)
    .add('Rate Mobile', () => <RateMobile />);

  storiesOf(`${prefix}/Data Entry/Slider`, module)
    .add('Slider', () => <Slider />)
    .add('Slider Mobile', () => <SliderMobile />);

  storiesOf(`${prefix}/Data Entry/Checkbox`, module)
    .add('Checkbox', () => <Checkbox />)
    .add('Checkbox Mobile', () => <CheckboxMobile />);
}

export default () => configureStories();
