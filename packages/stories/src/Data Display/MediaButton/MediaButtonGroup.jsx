import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaButtonGroup from '../../../../src/components/MediaButtonGroup';
import { MediaButton } from '../../../../src';


storiesOf('Liquid State UI Kit/Data Display/Media Button Group/Scaling', module)
  .addDecorator(story => (
    <div style={{ maxWidth: 550, margin: 'auto' }}>
      {story()}
    </div>
  ))
  .add('Standard Grid', () => (
    <MediaButtonGroup>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('1 Element Grid', () => (
    <MediaButtonGroup>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('3 Element Grid', () => (
    <MediaButtonGroup>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('5 Element Grid', () => (
    <MediaButtonGroup>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ));

storiesOf('Liquid State UI Kit/Data Display/Media Button Group/Sized', module)
  .addDecorator(story => (
    <div style={{ maxWidth: 768, margin: 'auto', display: 'flex', justifyContent: 'center' }}>
      {story()}
    </div>
  ))
  .add('Small Grid', () => (
    <MediaButtonGroup size="small">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('3 Element Grid Small', () => (
    <MediaButtonGroup size="small">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('5 Element Grid Small', () => (
    <MediaButtonGroup size="small">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('Medium Grid', () => (
    <MediaButtonGroup size="medium">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('3 Element Grid Medium', () => (
    <MediaButtonGroup size="medium">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('5 Element Grid Medium', () => (
    <MediaButtonGroup size="medium">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('Large Grid', () => (
    <MediaButtonGroup size="large">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('3 Element Grid Large', () => (
    <MediaButtonGroup size="large">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ))
  .add('5 Element Grid Large', () => (
    <MediaButtonGroup size="large">
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
      </MediaButton>
    </MediaButtonGroup>
  ));

