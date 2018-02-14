import React, { Component, Fragment } from 'react';

import './style.css';

import Basic from './Basic';
import Custom from './Custom';

class BackTop extends Component {
  render() { 
    return (
      <div id="backtop">
        <h1 className="title">BackTop</h1>

        <p className="text">
          BackTop makes it easy to go back to the top of the page.
        </p>

        <h2 className="title">When to use</h2>

        <ul>
          <li>When the page content is very long.</li>
          <li>When you need to go back to the top very frequently in order to view the contents.</li>
        </ul>

        <h2 className="title">Exemples:</h2>

        <Basic />
        <Custom />

      </div>
    );
  }
}
 
export default BackTop;