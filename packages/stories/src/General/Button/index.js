import React, { Component, Fragment } from 'react';

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
        <h1 className="title">Button</h1>

        <section className="example">
          <h3 className="ex-title">Default</h3>
          <Button className="mb20">Default</Button>
          <Button className="mb20" type="primary">Primary</Button>
          <Button className="mb20" type="dashed">Dashed</Button>
          <Button className="mb20" type="primary" icon="global">Icon</Button>
          <Button type="danger">Danger</Button>
          <Button type="inverted">Inverted</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Block</h3>
          <Button className="mb20" block>Default</Button>
          <Button className="mb20" type="primary" block>Primary</Button>
          <Button className="mb20" type="dashed" block>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" block>Icon</Button>
          <Button type="danger" block>Danger</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Round</h3>
          <Button className="mb20" round>Default</Button>
          <Button className="mb20" type="primary" round>Primary</Button>
          <Button className="mb20" type="dashed" round>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" round>Icon</Button>
          <Button type="danger" round>Danger</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Raised</h3>
          <Button className="mb20" raised>Default</Button>
          <Button className="mb20" type="primary" raised>Primary</Button>
          <Button className="mb20" type="dashed" raised>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" raised>Icon</Button>
          <Button type="danger" raised>Danger</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Ghost</h3>
          <div style={{padding: 20, background: '#212121'}}>
            <Button className="mb20" ghost>Default</Button>
            <Button className="mb20" type="primary" ghost>Primary</Button>
            <Button className="mb20" type="dashed" ghost>Dashed</Button>
            <Button className="mb20" type="primary" icon="global" ghost>Icon</Button>
            <Button type="danger" ghost>Danger</Button>
          </div>
        </section>

        <section className="example">
          <h3 className="ex-title">Stretched</h3>
          <div>
            <Button className="mb20" stretched>Default</Button>
            <Button className="mb20" type="primary" stretched>Primary</Button>
            <Button className="mb20" type="dashed" stretched>Dashed</Button>
            <Button className="mb20" type="primary" icon="global" stretched>Icon</Button>
            <Button type="danger" stretched>Danger</Button>
          </div>
        </section>

        <section className="example">
          <h3 className="ex-title">Checked</h3>
          <div>
            <CheckableButton size="large" checked={this.state.checked} onClicked={() => this.onCheckableButtonClick()} />
          </div>
        </section>
      </Fragment>
    );
  }
}

export default ButtonPage;
