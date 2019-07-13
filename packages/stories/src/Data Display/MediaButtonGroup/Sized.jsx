import React, { Component, Fragment } from 'react';
import MediaButton from '../../../../ui-kit/dist/components/MediaButton';
import MediaButtonGroup from '../../../../ui-kit/dist/components/MediaButtonGroup';
import Example from '../../utils/Example';

class Sized extends Component {
  render() {
    return (
      <Fragment>
        <Example title="Small grid">
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
        </Example>
        <Example title="Three element small grid">
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
        </Example>

        <Example title="Five element small grid">
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
        </Example>

        <Example title="Medium grid">
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
        </Example>

        <Example title="Three element medium grid">
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
        </Example>

        <Example title="Five element medium grid">
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
        </Example>

        <Example title="Large grid">
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
        </Example>

        <Example title="Three element large grid">
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
        </Example>

        <Example title="Five element large grid">
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
        </Example>
      </Fragment>
    );
  }
}

export default Sized;
