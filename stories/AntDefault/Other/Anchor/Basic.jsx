import React, { Component } from 'react';
import { Anchor } from 'antd';

const { Link } = Anchor;

class Basic extends Component {
  render() { 
    return (
      <section className="example">
        <h3 className="ex-title">Basic</h3>

        <Anchor>
          <Link href="#components-anchor-demo-basic" title="Basic demo" />
          <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
          <Link href="#API" title="API">
            <Link href="#Anchor-Props" title="Anchor Props" />
            <Link href="#Link-Props" title="Link Props" />
          </Link>
        </Anchor>
      </section>
    );
  }
}
 
export default Basic;