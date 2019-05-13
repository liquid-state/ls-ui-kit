import React, { Component, Fragment } from 'react';
import MediaButton from '../../../../ui-kit/dist/components/MediaButton';
import Example from '../../utils/Example';

class Sizes extends Component {
  render() {
    return (
      <Fragment>
        <Example title="Small icon">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton size="small">
              <MediaButton.Icon type="heart" />
              <MediaButton.Text>Small</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Medium icon">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton size="medium">
              <MediaButton.Icon type="heart" />
              <MediaButton.Text>Medium</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Large icon">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton size="large">
              <MediaButton.Icon type="heart" />
              <MediaButton.Text>Large</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Small image">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton size="small">
              <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
              <MediaButton.Text>Small</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Medium image">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton size="medium">
              <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
              <MediaButton.Text>Medium</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Large image">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton size="large">
              <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
              <MediaButton.Text>Large</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>
      </Fragment>
    );
  }
}

export default Sizes;
