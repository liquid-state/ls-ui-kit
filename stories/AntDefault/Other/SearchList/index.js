import React, { Component, Fragment } from 'react';
import SearchList from '../../../../src/components/SearchList';

const exampleData = [
  { title: 'Test Title' },
  { title: 'Test with a star', icon: 'star' },
  { title: 'This row is selected', selected: true },
  { title: 'Nothing important about this row' },
  { title: 'Another Test row' },
  { title: 'How about a heart', icon: 'heart' },
];

const filter = v => exampleData.filter(res => res.title.includes(v));

class SearchListStory extends Component {
  constructor() {
    super();
    this.state = { filter: '' };
  }

  updateFilter = v => this.setState({ filter: v })

  render() {
    return (
      <Fragment>

        <h1>SearchList</h1>
        <SearchList minInput={10} button={false} />
        <br />

        <h2>SearchList with Results</h2>
        <SearchList results={filter(this.state.filter)} onChange={this.updateFilter} />

      </Fragment>);
  }
}

export default SearchListStory;
