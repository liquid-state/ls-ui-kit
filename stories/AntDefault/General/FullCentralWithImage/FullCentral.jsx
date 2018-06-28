import React, { Component } from 'react';
import FullImage from '../../../../src/components/FullCentralImage';
import image from './img.svg';

export default class FullCentralImage extends Component {
  render() {
    return (
      <section className="example">
        <h3 className="ex-title">FullCentralImage</h3>
        <div>
          <FullImage image={image} />
        </div>
      </section>
    );
  }
}
