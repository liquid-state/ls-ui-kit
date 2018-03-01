import React, { Component } from 'react';
import { Button, Icon } from 'antd';

import './Button.less';

export const Default = [
  () => <Button className="default" type="primary">Primary</Button>,
  () => <Button className="default">Default</Button>,
  () => <Button className="default" type="dashed">Dashed</Button>,
  () => <Button className="default" icon="search" type="primary">Icon</Button>,
  () => <Button className="default" type="danger">Danger</Button>,
];

export const Box = [
  () => <Button className="box" type="primary">Primary</Button>,
  () => <Button className="box">Default</Button>,
  () => <Button className="box" type="dashed">Dashed</Button>,
  () => <Button className="box" icon="search" type="primary">Icon</Button>,
  () => <Button className="box" type="danger">Danger</Button>
];

export const Rounded = [
  () => <Button className="rounded" type="primary">Primary</Button>,
  () => <Button className="rounded">Default</Button>,
  () => <Button className="rounded" type="dashed">Dashed</Button>,
  () => <Button className="rounded" icon="search" type="primary">Icon</Button>,
  () => <Button className="rounded" type="danger">Danger</Button>
];

export const Radius = [
  () => <Button className="radius" type="primary">Primary</Button>,
  () => <Button className="radius">Default</Button>,
  () => <Button className="radius" type="dashed">Dashed</Button>,
  () => <Button className="radius" icon="search" type="primary">Icon</Button>,
  () => <Button className="radius" type="danger">Danger</Button>
];

export const Shadow = [
  () => <Button className="shadow" type="primary">Primary</Button>,
  () => <Button className="shadow">Default</Button>,
  () => <Button className="shadow" type="dashed">Dashed</Button>,
  () => <Button className="shadow" icon="search" type="primary">Icon</Button>,
  () => <Button className="shadow" type="danger">Danger</Button>
];

export const Ghost = [
  () => <Button className="ghost" type="primary" ghost>Primary</Button>,
  () => <Button className="ghost" ghost>Default</Button>,
  () => <Button className="ghost" type="dashed" ghost>Dashed</Button>,
  () => <Button className="ghost" icon="search" type="primary" ghost>Icon</Button>,
  () => <Button className="ghost" type="danger" ghost>Danger</Button>
];