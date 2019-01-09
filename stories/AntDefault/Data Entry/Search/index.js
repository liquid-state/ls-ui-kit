import React, { Component, Fragment } from 'react';
import SearchList from '../../../../src/components/Search';
import { action } from '@storybook/addon-actions';

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
    <SearchList minInput={10} button={false} onChange={action('change')} onEmpty={action('empty')} />
  </Fragment>);

export const SearchError = () => (
  <Fragment>
    <h1>Search with error set</h1>
    <SearchList error="This is an error" />
    <h2>With error set to null</h2>
    <SearchList error={null} />
  </Fragment>
);

export const SearchLoading = () => (
  <Fragment>
    <h1>Search Loading</h1>
    <p>Using <tt>loading = true</tt></p>
    <SearchList loading />
    <hr />
    <h2>Loading with results</h2>
    <SearchList results={exampleData} loading />
    <h2>Custom Spinner</h2>
    <SearchList Spinner={() => <img src="///placehold.it/100x100" />} loading />
  </Fragment>);

export const SearchHeading = () => (
  <Fragment>
    <h1>Headings</h1>
    <p>Define <tt>heading</tt></p>
    <SearchList heading={<h4>SEARCH RESULTS</h4>} results={exampleData} />
    <hr />
    <h2>Another example</h2>
    <SearchList heading="Previous Searches" results={exampleData} />
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
