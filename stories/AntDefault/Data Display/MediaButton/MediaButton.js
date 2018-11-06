import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import MediaButton from '../../../../src/components/MediaButton';


storiesOf('Liquid State UI Kit/Data Display/Media Button', module)
  .add('Square Image', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
        <MediaButton.Text>Square</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Circle Image', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" circle />
        <MediaButton.Text>Circle</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Rounded Image', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Image
          src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
          style={{ borderRadius: '25%' }} />
        <MediaButton.Text>Rounded</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Rounded Image With Shadow', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Image
          src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
          shadow
          style={{ borderRadius: '25%' }} />
        <MediaButton.Text>Rounded + Shadow</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Rounded Image with Custom Shadow', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Image
          src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
          style={{ borderRadius: '25%', boxShadow: '4px 6px 1px 0px rgba(51,51,51,1)' }} />
        <MediaButton.Text>Image</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Image Without Text', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Image
          src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
          />
      </MediaButton>
    </div>
  ))
  .add('With Icons', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Icon type="heart" />
        <MediaButton.Text>Square</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Circle Icon', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Icon type="heart" circle />
        <MediaButton.Text>Circle</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Rounded Icon', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Icon
          type="heart"
          style={{ borderRadius: '25%' }} />
        <MediaButton.Text>Rounded</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Shadowed Icon', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Icon
          type="heart"
          style={{ borderRadius: '35%' }}
          shadow />
        <MediaButton.Text>Shadowed</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Shadowed Icon With Fill', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Icon
          type="heart"
          shadow
          style={{ borderRadius: '35%', backgroundColor: '#ddd', borderColor: '#ddd' }} />
        <MediaButton.Text>Custom Fill</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Custom Icon Styles', () => (
    <div style={{ width: 100, cursor: 'pointer' }}>
      <MediaButton>
        <MediaButton.Icon
          type="smile"
          style={{
            borderRadius: '35%',
            backgroundColor: '#a4a4a4',
            borderColor: '#a4a4a4',
            boxShadow: '4px 6px 1px 0px rgba(51,51,51,1)'
          }}
          iconStyle={{
            boxShadow: '4px 6px 1px 0px rgba(51,51,51,1)',
            borderRadius: '50%',
            color: 'white'
          }} />
        <MediaButton.Text>Custom Icon Style</MediaButton.Text>
      </MediaButton>
    </div>
  ))
  .add('Small Icon', () => (
    <MediaButton size="small">
      <MediaButton.Icon type="heart" />
      <MediaButton.Text>Small</MediaButton.Text>
    </MediaButton>
  ))
  .add('Medium Icon', () => (
    <MediaButton size="medium">
      <MediaButton.Icon type="heart" />
      <MediaButton.Text>Medium</MediaButton.Text>
    </MediaButton>
  ))
  .add('Large Icon', () => (
    <MediaButton size="large">
      <MediaButton.Icon type="heart" />
      <MediaButton.Text>Large</MediaButton.Text>
    </MediaButton>
  ))
  .add('Small Image', () => (
    <MediaButton size="small">
      <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
      <MediaButton.Text>Small</MediaButton.Text>
    </MediaButton>
  ))
  .add('Medium Image', () => (
    <MediaButton size="medium">
      <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
      <MediaButton.Text>Medium</MediaButton.Text>
    </MediaButton>
  ))
  .add('Large Image', () => (
    <MediaButton size="large">
      <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
      <MediaButton.Text>Large</MediaButton.Text>
    </MediaButton>
  ));
