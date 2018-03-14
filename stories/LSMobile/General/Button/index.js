import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

/* import { ButtonDefault, ButtonBox, ButtonRounded, ButtonRadius, ButtonShadow, ButtonGhost } from '../../../../src/General/Button'; */
import Button from '../../../../src/General/Button';

class ButtonPage extends Component {
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
        </section>

        <section className="example">
          <h3 className="ex-title">Box</h3>
          <Button className="mb20" box>Default</Button>
          <Button className="mb20" type="primary" box>Primary</Button>
          <Button className="mb20" type="dashed" box>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" box>Icon</Button>
          <Button type="danger" box>Danger</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Rounded</h3>
          <Button className="mb20" rounded>Default</Button>
          <Button className="mb20" type="primary" rounded>Primary</Button>
          <Button className="mb20" type="dashed" rounded>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" rounded>Icon</Button>
          <Button type="danger" rounded>Danger</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Radius</h3>
          <Button className="mb20" radius>Default</Button>
          <Button className="mb20" type="primary" radius>Primary</Button>
          <Button className="mb20" type="dashed" radius>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" radius>Icon</Button>
          <Button type="danger" radius>Danger</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Shadow</h3>
          <Button className="mb20" shadow>Default</Button>
          <Button className="mb20" type="primary" shadow>Primary</Button>
          <Button className="mb20" type="dashed" shadow>Dashed</Button>
          <Button className="mb20" type="primary" icon="global" shadow>Icon</Button>
          <Button type="danger" shadow>Danger</Button>
        </section>

        <section className="example">
          <h3 className="ex-title">Ghost</h3>
          <div style={{padding: 20, background: '#4e3488'}}>
            <Button className="mb20" ghost>Default</Button>
            <Button className="mb20" type="primary" ghost>Primary</Button>
            <Button className="mb20" type="dashed" ghost>Dashed</Button>
            <Button className="mb20" type="primary" icon="global" ghost>Icon</Button>
            <Button type="danger" ghost>Danger</Button>
          </div>
        </section>
      </Fragment>
    );
  }
}
 
export default ButtonPage;