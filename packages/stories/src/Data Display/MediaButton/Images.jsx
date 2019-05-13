import React, { Component, Fragment } from 'react';
import MediaButton from '../../../../ui-kit/dist/components/MediaButton';
import Example from '../../utils/Example';

class Images extends Component {
  render() {
    return (
      <Fragment>
        <Example title="Square Image">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Image src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800" />
              <MediaButton.Text>Square</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Circle Image">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Image
                src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                circle
              />
              <MediaButton.Text>Circle</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Rounded Image">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Image
                src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                style={{ borderRadius: '25%' }}
              />
              <MediaButton.Text>Rounded</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Rounded image with shadow">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Image
                src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                shadow
                style={{ borderRadius: '25%' }}
              />
              <MediaButton.Text>Rounded + Shadow</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Rounded image with custom shadow">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Image
                src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
                style={{ borderRadius: '25%', boxShadow: '4px 6px 1px 0px rgba(51,51,51,1)' }}
              />
              <MediaButton.Text>Rounded + Custom Shadow</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title=" Image with no text">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Image
                src="https://avatars.mds.yandex.net/get-pdb/33827/4731cfc0-877e-4052-9179-0522e0a84f40/s800"
              />
            </MediaButton>
          </div>
        </Example>
      </Fragment>
    );
  }
}

export default Images;
