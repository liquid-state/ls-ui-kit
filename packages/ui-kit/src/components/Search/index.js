import React, { Component } from 'react';
import {
  List,
  Form,
  Input,
  Spin,
  Icon,
} from 'antd';
import PropTypes from 'prop-types';

import './style.less';

/**
 * renderListItem
 *
 * The default renderListItem used when none is provided
 */
const renderListItem = onItemClick => item => (
  <List.Item
    onClick={() => onItemClick(item)}
    key={item.id ? item.id : item.title}
    className={item.className ? item.className : null}
    actions={item.icon ? [<Icon type={item.icon} />] : null}
  >
    <span className="search-item-inner">{item.title}</span>
  </List.Item>
);

/**
 * SearchList Component
 *
 * Provides a search box with logic for displaying back the search results within a List
 *
 * @param {function} onChange - Binds to onChange events
 * @param {function} onSubmit - Binds to submit via keyboard or button press
 * @param {function} onItemClick - Bind to all item clicks and returns the item object back
 * @param {number} minInput - When above 0, will eat onChange/onSubmit events and
 *  display validation message
 * @param {Array<Result>} results - Where result has properties of: title, icon, className
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
      error: props.error,
      hasSubmitted: false,
    };
  }

  // Only override the error state from props if the error state is currently empty. The
  // error state should be cleared internally through onChange
  static getDerivedStateFromProps = (props, state) => ({
    ...state,
    error: !state.error && props.error ? props.error : state.error,
    value: Object.prototype.hasOwnProperty.call(props, 'value') ? props.value : state.value
  });

  onSubmit = () => {
    const { state: { value }, props: { minInput, onSubmit }, error } = this;
    this.setState({ hasSubmitted: true });
    return value.length >= minInput ? onSubmit(value) : error();
  };

  onChange = ({ target: { value } }) => {
    const { props: { minInput, onChange, onEmpty } } = this;
    this.setState({ value });
    onChange(value);
    if (value === '') { return onEmpty(); }
    if (value.length < minInput) { return this.error(`Please enter at least ${minInput} characters`); }
    this.error();
    this.setState({ hasSubmitted: false });
  }

  error = v => (typeof v === 'undefined' ? this.setState({ error: null }) : this.setState({ error: v }));

  render() {
    const {
      results,
      button,
      renderItem,
      loading,
      onItemClick,
      heading,
      noResultsMessage,
      spinner,
      placeholder,
    } = this.props;
    const { error, value, hasSubmitted } = this.state;
    const help = error || (results.length === 0 && value !== '' && hasSubmitted ? noResultsMessage : null);

    return (
      <Form className="ls-ui-kit search">
        <Form.Item className="search-input-wrap" help={help}>
          <Input.Search
            placeholder={placeholder}
            value={value}
            onChange={this.onChange}
            onSearch={this.onSubmit}
            enterButton={button}
          />
        </Form.Item>
        { heading }
        { loading === true
          ? <div className="search-spinner">{ spinner }</div>
          : <List>{results.map(renderItem(onItemClick))}</List> }
      </Form>);
  }
}

renderListItem.propTypes = {
  id: PropTypes.node,
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
  className: PropTypes.string,
};

renderListItem.defaultProps = {
  icon: false,
};

SearchList.propTypes = {
  onEmpty: PropTypes.func,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
  onItemClick: PropTypes.func,
  heading: PropTypes.node,
  noResultsMessage: PropTypes.node,
  minInput: PropTypes.number,
  results: PropTypes.arrayOf(PropTypes.shape(renderListItem.propTypes)),
  loading: PropTypes.bool,
  button: PropTypes.bool,
  renderItem: PropTypes.func,
  spinner: PropTypes.node,
  value: PropTypes.string,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

SearchList.defaultProps = {
  onEmpty: e => e,
  onChange: e => e,
  onSubmit: e => e,
  onItemClick: e => e,
  heading: null,
  noResultsMessage: 'No Results found',
  minInput: 0,
  results: [],
  loading: false,
  button: true,
  renderItem: renderListItem,
  spinner: <Spin />,
  error: null,
  placeholder: '',
};

SearchList.displayName = 'Search'

export default SearchList;
