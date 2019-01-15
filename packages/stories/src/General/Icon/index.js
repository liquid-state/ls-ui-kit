import React, { Component, Fragment } from 'react';
import DirectionalIcons from './Direction';
import SuggestedIcons from './Suggested';
import ApplicationIcons from './Application';
import Brands from './Brands';

class IconPage extends Component {
  render() { 
    const exampleStyle = {
      display: 'inline-block',
      marginLeft: '20px',
      padding: '10px 20px',
      background: '#eee'
    };

    return (
      <Fragment>
        <h1 className="title">Icon</h1>

        <DirectionalIcons />

        <SuggestedIcons />

        <ApplicationIcons />

        <Brands />
      </Fragment>
    );
  }
}
 
export default IconPage;