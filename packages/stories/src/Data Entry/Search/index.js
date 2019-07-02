import React, { Component, Fragment } from 'react';
import { action } from '@storybook/addon-actions';
import { Search } from '@liquid-state/ui-kit';

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
    <Search placeholder="Placeholder text" minInput={10} button={false} onChange={action('change')} onEmpty={action('empty')} />
  </Fragment>);

export const SearchError = () => (
  <Fragment>
    <h1>Search with error set</h1>
    <Search error="This is an error" />
    <h2>With error set to null</h2>
    <Search error={null} />
  </Fragment>
);

export const SearchLoading = () => (
  <section className="example">
    <h2 className="title">Search Loading</h2>
    <p>Using <tt>loading = true</tt></p>
    <Search loading />
    <hr />
    <h2 className="title">Loading with results</h2>
    <Search results={exampleData} loading />
    <h2 className="title">Custom Spinner</h2>
    <Search spinner={<img src="///placehold.it/100x100" />} loading />
  </section>);

export const SearchHeading = () => (
  <Fragment>
    <h1>Headings</h1>
    <p>Define <tt>heading</tt></p>
    <Search heading={<h4>SEARCH RESULTS</h4>} results={exampleData} />
    <hr />
    <h2>Another example</h2>
    <Search heading="Previous Searches" results={exampleData} />
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
        <Search onItemClick={console.info} results={filter(this.state.filter)} onChange={this.updateFilter} />
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
        <Search minInput={3} results={filter(this.state.filter)} onSubmit={this.updateFilter} />
      </Fragment>);
  }
}

export class SearchUpdateValue extends Component {
  state = {
    selected: ''
  };

  render() {
    const { selected } = this.state;
    return (
      <Fragment>
        <h2>Search which updates on Item Clicked</h2>
        <Search
          results={selected ? filter(selected) : exampleData}
          onItemClick={v => this.setState({ selected: v.title })}
          value={selected}
          onChange={v => this.setState({ selected: v })}
        />
      </Fragment>
    )
  }
}

export default SearchMinInput;
