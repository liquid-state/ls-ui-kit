import React, { Component } from 'react';
import { FullWidthCenterImage } from '@liquid-state/ui-kit';
import image from './img.svg';

export default class FullCentralImage extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">FullWidthCenterImage</h3>
        <h4>Default</h4>
        <div>
        <FullWidthCenterImage image={image} />
        </div>


        <h4>With borderless enabled</h4>
        <div>
        <FullWidthCenterImage image={image} borderless />
        </div>
      </section>
    );
  }
}
