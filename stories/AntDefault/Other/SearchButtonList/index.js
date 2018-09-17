import React, { Component, Fragment } from 'react';
import Search from '../../../../src/components/SearchButtonList/';

const exampleData = [
  {title: 'Test Title', isFavourited: true},
  {title: 'Another Test', isFavourited: false}
]

class SearchButtonList extends Component {
  render() {
    return (<Fragment>
            <h1>Search Button List</h1>
            <Search data={exampleData} />
            </Fragment>);
  }
}

export default SearchButtonList;
