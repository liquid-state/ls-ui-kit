import React, { Component, Fragment } from 'react';
import Basic from './Basic';
import Default from './Default';
import CustomTrigger from './CustomTrigger';
import Hover from './Hover';
import DisabledOption from './DisabledOption';
import ChangeOnSelect from './ChangeOnSelect';
import Size from './Size';
import CustomRender from './CustomRender';
import Search from './Search';
import Load from './Load';

class Cascader extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Cascader</h1>

        <p className="text">
          Cascade selection box.
        </p>

        <h2 className="title">When To Use</h2>

        <ul>
          <li>When you need to select from a set of associated data set. Such as province/city/district, company level, things classification.</li>
          <li>When selecting from a large data set, with multi-stage classification separated for easy selection.</li>
          <li>Chooses cascade items in one float layer for better user experience.</li>
        </ul>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Default />
        <CustomTrigger />
        <Hover />
        <DisabledOption />
        <ChangeOnSelect />
        <Size />
        <CustomRender />
        <Search />
        <Load />

      </Fragment>
    );
  }
}
 
export default Cascader;