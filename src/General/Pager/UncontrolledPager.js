import React from 'react';
import PropTypes from 'prop-types';

import Pager from './Pager';

/** A pager which does not have a current value passed in props and thus manages its own state */
export default class UncontrolledPager extends React.Component {
  static displayName = 'Pager';

  static propTypes = {
    steps: PropTypes.number.isRequired,
    defaultValue: PropTypes.number,
  }

  static defaultProps = {
    defaultValue: 1,
  }

  state = {
    value: this.props.defaultValue,
  }

  onPrevious = () => {
    if (this.state.value === 0) {
      return;
    }
    this.setState({ value: this.state.value - 1 });
  }

  onNext = () => {
    if (this.state.value === this.props.steps - 1) {
      return;
    }
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (<Pager
      {...this.props}
      current={this.state.value}
      onPrevious={this.onPrevious}
      onNext={this.onNext}
    />);
  }
}
