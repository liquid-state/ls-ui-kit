import React, { Component, Fragment } from 'react';

import Basic from './Basic';
import Search from './Search';
import Advanced from './Advanced';
import CustomDatasource from './CustomDatasource';

class Transfer extends Component {

  render() {

    return (
      <Fragment>
        <h1 className="title">Double column transfer choice box.</h1>

        <p className="text">
          Transfer the elements between two columns in an intuitive and efficient way.
        </p>

        <p className="text">
          One or more elements can be selected from either column,
          one click on the proper 'direction' button, and the transfer is done. 
          The left column is considered the 'source' and the right column is
          considered the 'target'. As you can see in the API description,
          these names are reflected in.
        </p>

        <h2 className="title">Examples:</h2>

        <Basic />
        <Search />
        <Advanced />
        <CustomDatasource />

      </Fragment>
    );
  }
}
 
export default Transfer;