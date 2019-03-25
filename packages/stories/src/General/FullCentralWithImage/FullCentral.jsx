import React, { Component } from 'react';
import Example from '../../utils/Example';
import { FullWidthCenterImage } from '@liquid-state/ui-kit';
import image from './img.svg';

export default class FullCentralImage extends Component {
  render() {
    return (
      <Example title="FullWidthCenterImage">
        <h4>Default</h4>
        <div>
        <FullWidthCenterImage image={image} />
        </div>


        <h4>With borderless enabled</h4>
        <div>
        <FullWidthCenterImage image={image} borderless />
        </div>
      </Example>
    );
  }
}
