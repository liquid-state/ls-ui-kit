import React, { Component, Fragment } from 'react';
import MediaButton from '../../../../ui-kit/dist/components/MediaButton';
import Example from '../../utils/Example';

class Icons extends Component {
  render() {
    return (
      <Fragment>
        <Example title="Square icon">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Icon type="heart" />
              <MediaButton.Text>Square</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Circle icon">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Icon type="heart" circle />
              <MediaButton.Text>Circle</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Rounded icon">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Icon
                type="heart"
                style={{ borderRadius: '25%' }}
              />
              <MediaButton.Text>Rounded</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Icon with shadow">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Icon
                type="heart"
                style={{ borderRadius: '35%' }}
                shadow
              />
              <MediaButton.Text>Shadowed</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Custom fill icon">
          <div style={{ width: 100, cursor: 'pointer' }}>
            <MediaButton>
              <MediaButton.Icon
                type="heart"
                shadow
                style={{ borderRadius: '35%', backgroundColor: '#ddd', borderColor: '#ddd' }}
              />
              <MediaButton.Text>Custom Fill</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>

        <Example title="Custom icon style">
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
                }}
              />
              <MediaButton.Text>Custom Icon Style</MediaButton.Text>
            </MediaButton>
          </div>
        </Example>
      </Fragment>
    );
  }
}

export default Icons;
