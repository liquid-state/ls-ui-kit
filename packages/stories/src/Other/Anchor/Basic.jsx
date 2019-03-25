import React, { Component } from 'react';
import { Anchor } from 'antd';
import Example from '../../utils/Example';

const { Link } = Anchor;

class Basic extends Component {
  render() { 
    return (
      <Example title="Basic">
        <Anchor>
          <Link href="#components-anchor-demo-basic" title="Basic demo" />
          <Link href="#components-anchor-demo-fixed" title="Fixed demo" />
          <Link href="#API" title="API">
            <Link href="#Anchor-Props" title="Anchor Props" />
            <Link href="#Link-Props" title="Link Props" />
          </Link>
        </Anchor>
      </Example>
    );
  }
}
 
export default Basic;
