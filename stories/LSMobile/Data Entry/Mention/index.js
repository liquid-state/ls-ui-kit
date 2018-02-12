import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Placement from './Placement';
import Asynchronous from './Asynchronous';
import CustomizeSuggestion from './CustomizeSuggestion';
import Icon from './Icon';
import Controlled from './Controlled';
import Form from './Form';
import MultiLines from './MultiLines';
import SuggestionContainer from './SuggestionContainer';
import Disabled from './Disabled';
import CustomizeTriggerToken from './CustomizeTriggerToken';

class Mention extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Mention</h1>

        <p className="text">
        Mention component.
        </p>

        <h2 className="title">When To Use</h2>

        <p className="text">
          When need to mention someone or something.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Placement />
        <Asynchronous />
        <CustomizeSuggestion />
        <Icon />
        <Controlled />
        <Form />
        <MultiLines />
        <SuggestionContainer />
        <Disabled />
        <CustomizeTriggerToken />

      </Fragment>
    );
  }
}
 
export default Mention;