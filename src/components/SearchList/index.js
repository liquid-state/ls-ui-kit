import React, { Component } from 'react';
import { List, Form, Input, Alert, Spin, Icon } from 'antd';
import PropTypes from 'prop-types';

import './style.less';

/**
 * renderListItem
 *
 * The default renderListItem used when none is provided
 */
const renderListItem = ({
  title, link, icon, selected,
}) => (
  <List.Item key={title} className={selected ? 'selected' : null} actions={icon ? [<Icon type={icon} />] : null}>
    <a href={link}>
      <span>{title}</span>
    </a>
  </List.Item>
);

/**
 * SearchList Component
 *
 * Provides a search box with logic for displaying back the search results within a List
 *
 * @param {function} onChange - Binds to onChange events
 * @param {function} onSubmit - Binds to submit via keyboard or button press
 * @param {number} minInput - When above 0, will eat onChange/onSubmit events and
 *  display validation message
 * @param {Array<Result>} results - Where result has properties of: title, link, icon, selected
 * @param {boolean} loading - If true, will display a loading spinner
 * @param {boolean} button - If true, a search button will be appended to the input
 * @param {function} renderItem - By default uses LinkList to render out the list of results
 * @param {string} value - The current value of the search input
 */
class SearchList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
      error: false,
    };
  }

  onSubmit = () => (this.state.value.length >= this.props.minInput
    ? this.props.onSubmit(this.state.value) : this.error());

  onChange = ({ target: { value } }) => {
    this.setState({ value });
    if (value.length < this.props.minInput) {
      return this.error(`Please enter at least ${this.props.minInput} characters`);
    } this.error();
    return this.props.onChange(value);
  }

  error = v => (typeof v === 'undefined' ? this.setState({ error: false }) : this.setState({ error: v }));

  render() {
    return (
      <Form className="search-list">
        <div className="search-input-wrap">
          <Input.Search
            value={this.state.value}
            onChange={this.onChange}
            onSearch={this.onSubmit}
            enterButton={this.props.button}
          />
        </div>
        { this.state.error ? <Alert message={this.state.error} type="info" />
          : this.props.loading === true
            ? <div className="search-spinner"><Spin /></div> : this.props.results.length === 0
              ? this.state.value !== ''
                ? <p>No Results</p> : null
              : <List>{this.props.results.map(this.props.renderItem)}</List> }
      </Form>);
  }
}

renderListItem.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  link: PropTypes.string,
  selected: PropTypes.bool,
};

renderListItem.defaultProps = {
  icon: false,
  selected: false,
  link: 'nolink', // @todo remove this
};

SearchList.propTypes = {
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  minInput: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    link: PropTypes.string,
    selected: PropTypes.bool,
  })),
  loading: PropTypes.bool,
  button: PropTypes.bool,
  renderItem: PropTypes.func,
  value: PropTypes.string,
};

SearchList.defaultProps = {
  onChange: e => e,
  onSubmit: e => e,
  minInput: 0,
  results: [],
  loading: false,
  button: true,
  renderItem: renderListItem,
  value: '',
};

export default SearchList;
