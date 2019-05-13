import React, { Component, Fragment } from 'react';
import MediaButton from '../../../../ui-kit/dist/components/MediaButton';
import MediaButtonGroup from '../../../../ui-kit/dist/components/MediaButtonGroup';
import Example from '../../utils/Example';

class Standard extends Component {
  render() {
    return (
      <Fragment>
        <Example title="Standard grid">
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
        </Example>

        <Example title="One element grid">
          <MediaButtonGroup>
            <MediaButton>
              <MediaButton.Icon type="heart" circle />
              <MediaButton.Text>APPOINTMENTS</MediaButton.Text>
            </MediaButton>
          </MediaButtonGroup>
        </Example>

        <Example title="Three element grid">
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
        </Example>

        <Example title="Five element grid">
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
        </Example>
      </Fragment>
    );
  }
}

export default Standard;
