import React, { Component, Fragment } from 'react';

import './style.css';

import Localization from './Localization';
import AllComponents from './AllComponents';

class LocaleProvider extends Component {
  render() { 
    return (
      <div>
        <h1 className="title">LocaleProvider</h1>

        <p className="text">
          LocaleProvider provides a uniform localization support for built-in text of components.
        </p>

        <h2 className="title">Exemples:</h2>

        <Localization />
        <AllComponents />

      </div>
    );
  }
}
 
export default LocaleProvider;