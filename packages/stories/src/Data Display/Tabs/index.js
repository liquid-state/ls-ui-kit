import React, { Component, Fragment } from 'react';

import './style.css';

import Basic from './Basic';
import Icon from './Icon';
import Disabled from './Disabled';
import Slide from './Slide';
import ExtraContent from './ExtraContent';
import Size from './Size';
import Position from './Position';
import CardType from './CardType';
import AddCloseTab from './AddCloseTab';
import Container from './Container';
import Customized from './Customized';

class TabsPage extends Component {
  render() { 
    return (
      <Fragment>
        <h1 className="title">Tabs</h1>

        <p className="text">
          Tabs make it easy to switch between different views.
        </p>

        <h2 className="title">When to use</h2>

        <p className="text">
          Ant Design has 3 types of Tabs for different situations.
        </p>

        <ul>
          <li>Card Tabs: for managing too many closeable views.</li>
          <li>Normal Tabs: for functional aspects of a page.</li>
          <li>RadioButton: for secondary tabs.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Icon />
        <Disabled />
        <Slide />
        <ExtraContent />
        <Size />
        <Position />
        <CardType />
        <AddCloseTab />
        <Container />
        <Customized />

      </Fragment>
    );
  }
}
 
export default TabsPage;