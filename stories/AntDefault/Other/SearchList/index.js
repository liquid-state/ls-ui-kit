import React, { Component, Fragment } from 'react';
import SearchList from '../../../../src/components/SearchList/';

const exampleData = [
  {title: 'Test Title', selected: true},
  {title: 'Another Test', icon: 'star'}
];

class SearchListStory extends Component {
  render() {
    return (
      <Fragment>
        <h1>SearchList</h1>
        <SearchList minInput={3} button={false} />
        <br />
        <h2>SearchList with Results</h2>
        <SearchList results={exampleData} />
      </Fragment>);
  }
}

export default SearchListStory;
