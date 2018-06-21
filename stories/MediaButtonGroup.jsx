import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaButtonGroup from '../src/components/MediaButtonGroup';
import { MediaButton } from '../src';


storiesOf('LS Mobile/Data Display/Media Button Group', module)
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
