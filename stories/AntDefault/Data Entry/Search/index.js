import React, { Component, Fragment } from 'react';
import SearchList from '../../../../src/components/Search';

const exampleData = [
  { title: 'Test Title' },
  { title: 'Test with a star', icon: 'star' },
  { title: 'This row is selected', className: 'selected' },
  { title: 'Nothing important about this row' },
  { title: 'Another Test row' },
  { title: 'How about a heart', icon: 'heart' },
];

const filter = v => exampleData.filter(res => res.title.includes(v));

export const SearchMinInput = () => (
  <Fragment>
    <h1>Default Search Component</h1>
    <p>Using <tt>minInput</tt> and no button</p>
    <SearchList minInput={10} button={false} />
  </Fragment>);

export class SearchOnChange extends Component {
  constructor() {
    super();
    this.state = { filter: '' };
  }

  updateFilter = v => this.setState({ filter: v })

  render() {
    return (
      <Fragment>
        <h1>Search with Results</h1>
        <p>Updated using <tt>onChange</tt> and binds <tt>onItemClick</tt> to console.info</p>
        <SearchList onItemClick={console.info} results={filter(this.state.filter)} onChange={this.updateFilter} />
      </Fragment>);
  }
}

// eslint-disable-next-line react/no-multi-comp
export class SearchOnSubmit extends Component {
  constructor() {
    super();
    this.state = { filter: '' };
  }

  updateFilter = v => this.setState({ filter: v })

  render() {
    return (
      <Fragment>
        <h2>Search with Results</h2>
        <p>Updated using <tt>onSubmit</tt></p>
        <SearchList minInput={3} results={filter(this.state.filter)} onSubmit={this.updateFilter} />
      </Fragment>);
  }
}

export default SearchMinInput;
