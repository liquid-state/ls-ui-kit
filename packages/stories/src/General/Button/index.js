import React, { Component, Fragment } from 'react';
import Example from '../../utils/Example';
import { Button, CheckableButton } from '@liquid-state/ui-kit';

class ButtonPage extends Component {
  state = {
    checked: false,
  }
  onCheckableButtonClick = () => {
    this.setState({ checked: !this.state.checked });
  }
  render() {
    return (
      <Fragment>
        <h1 className="title">Buttons</h1>

        <Example title="Default">
          <Button className="mb20">Default</Button>
          <Button className="mb20" type="primary">Primary</Button>
          <Button className="mb20" type="dashed">Dashed</Button>
          <Button className="mb20" type="primary" icon="global">Icon</Button>
          <Button type="danger">Danger</Button>
          <Button type="inverted">Inverted</Button>
        </Example>

        <Example title="Block">
          <Button className="mb20" block>Default</Button>
          <Button className="mb20" type="primary" block>Primary</Button>
          <Button className="mb20" type="dashed" block>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" block>Icon</Button>
          <Button type="danger" block>Danger</Button>
        </Example>

        <Example title="Round">
          <Button className="mb20" round>Default</Button>
          <Button className="mb20" type="primary" round>Primary</Button>
          <Button className="mb20" type="dashed" round>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" round>Icon</Button>
          <Button type="danger" round>Danger</Button>
        </Example>

        <Example title="Raised">
          <Button className="mb20" raised>Default</Button>
          <Button className="mb20" type="primary" raised>Primary</Button>
          <Button className="mb20" type="dashed" raised>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" raised>Icon</Button>
          <Button type="danger" raised>Danger</Button>
        </Example>

        <Example title="Ghost">
          <div style={{padding: 20, background: '#212121'}}>
            <Button className="mb20" ghost>Default</Button>
            <Button className="mb20" type="primary" ghost>Primary</Button>
            <Button className="mb20" type="dashed" ghost>Dashed</Button>
            <Button className="mb20" type="primary" icon="global" ghost>Icon</Button>
            <Button type="danger" ghost>Danger</Button>
          </div>
        </Example>

        <Example title="Stretched">
          <div>
            <Button className="mb20" stretched>Default</Button>
            <Button className="mb20" type="primary" stretched>Primary</Button>
            <Button className="mb20" type="dashed" stretched>Dashed</Button>
            <Button className="mb20" type="primary" icon="global" stretched>Icon</Button>
            <Button type="danger" stretched>Danger</Button>
          </div>
        </Example>

        <Example title="Checked">
          <div>
            <CheckableButton size="large" checked={this.state.checked} onClicked={() => this.onCheckableButtonClick()} />
          </div>
        </Example>

      </Fragment>
    );
  }
}

export default ButtonPage;
