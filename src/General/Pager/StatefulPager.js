import React from 'react';
import PropTypes from 'prop-types';

import Pager from './Pager';

/** A pager which does not have a current value passed in props and thus manages its own state */
export default class StatefulPager extends React.Component {
  static displayName = 'StatefulPager';

  static propTypes = {
    steps: PropTypes.number.isRequired,
    defaultValue: PropTypes.number,
  }

  static defaultProps = {
    defaultValue: 0,
  }

  state = {
    value: this.props.defaultValue,
  }

  onChange = value => this.setState({ value });

  render() {
    return (<Pager
      {...this.props}
      current={this.state.value}
      onChange={this.onChange}
    />);
  }
}
