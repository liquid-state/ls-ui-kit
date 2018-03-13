import React, { Component, Fragment } from 'react';
import { Row, Col } from 'antd';

import { ButtonDefault, ButtonBox, ButtonRounded, ButtonRadius, ButtonShadow, ButtonGhost } from '../../../../src/General/Button';

class ButtonPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Button</h1>

        <section className="example">
          <h3 className="ex-title">Default</h3>
          <ButtonDefault className="mb20">Default</ButtonDefault>
          <ButtonDefault className="mb20" type="primary">Default</ButtonDefault>
          <ButtonDefault className="mb20" type="dashed">Dashed</ButtonDefault>
          <ButtonDefault className="mb20" type="primary" icon="global">Icon</ButtonDefault>
          <ButtonDefault type="danger">Danger</ButtonDefault>
        </section>

        <section className="example">
          <h3 className="ex-title">Box</h3>
          <ButtonBox className="mb20">Default</ButtonBox>
          <ButtonBox className="mb20" type="primary">Default</ButtonBox>
          <ButtonBox className="mb20" type="dashed">Dashed</ButtonBox>
          <ButtonBox className="mb20" type="primary" icon="global">Icon</ButtonBox>
          <ButtonBox type="danger">Danger</ButtonBox>
        </section>

        <section className="example">
          <h3 className="ex-title">Rounded</h3>
          <ButtonRounded className="mb20">Default</ButtonRounded>
          <ButtonRounded className="mb20" type="primary">Default</ButtonRounded>
          <ButtonRounded className="mb20" type="dashed">Dashed</ButtonRounded>
          <ButtonRounded className="mb20" type="primary" icon="global">Icon</ButtonRounded>
          <ButtonRounded type="danger">Danger</ButtonRounded>
        </section>

        <section className="example">
          <h3 className="ex-title">Radius</h3>
          <ButtonRadius className="mb20">Default</ButtonRadius>
          <ButtonRadius className="mb20" type="primary">Default</ButtonRadius>
          <ButtonRadius className="mb20" type="dashed">Dashed</ButtonRadius>
          <ButtonRadius className="mb20" type="primary" icon="global">Icon</ButtonRadius>
          <ButtonRadius type="danger">Danger</ButtonRadius>
        </section>

        <section className="example">
          <h3 className="ex-title">Shadow</h3>
          <ButtonShadow className="mb20">Default</ButtonShadow>
          <ButtonShadow className="mb20" type="primary">Default</ButtonShadow>
          <ButtonShadow className="mb20" type="dashed">Dashed</ButtonShadow>
          <ButtonShadow className="mb20" type="primary" icon="global">Icon</ButtonShadow>
          <ButtonShadow type="danger">Danger</ButtonShadow>
        </section>

        <section className="example">
          <h3 className="ex-title">Ghost</h3>
          <div style={{padding: 20, background: '#4e3488'}}>
            <ButtonGhost className="mb20">Default</ButtonGhost>
            <ButtonGhost className="mb20" type="primary">Default</ButtonGhost>
            <ButtonGhost className="mb20" type="dashed">Dashed</ButtonGhost>
            <ButtonGhost className="mb20" type="primary" icon="global">Icon</ButtonGhost>
            <ButtonGhost type="danger">Danger</ButtonGhost>
          </div>
        </section>
      </Fragment>
    );
  }
}
 
export default ButtonPage;